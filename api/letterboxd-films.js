const LETTERBOXD_USER = "calvonico";
const FILM_COUNT = 3;

function extractTag(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
  if (!match) return null;
  const value = match[1].replace("<![CDATA[", "").replace("]]>", "").trim();
  return value || null;
}

function starsFromRating(rating) {
  if (!rating) return "";
  const num = parseFloat(rating);
  const full = Math.floor(num);
  const half = num - full >= 0.5;
  return "★".repeat(full) + (half ? "1/2" : "");
}

async function posterForTmdbId(tmdbId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${process.env.TMDB_API_KEY}`
  );
  if (!response.ok) return null;
  const data = await response.json();
  return data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : null;
}

export default async function handler(req, res) {
  const rssResponse = await fetch(
    `https://letterboxd.com/${LETTERBOXD_USER}/rss/`
  );

  if (!rssResponse.ok) {
    return res.status(rssResponse.status).json({ error: "Letterboxd RSS error" });
  }

  const xml = await rssResponse.text();
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

  const diaryEntries = items
    .map((item) => ({
      title: extractTag(item, "letterboxd:filmTitle"),
      year: extractTag(item, "letterboxd:filmYear"),
      rating: extractTag(item, "letterboxd:memberRating"),
      tmdbId: extractTag(item, "tmdb:movieId"),
      link: extractTag(item, "link"),
      watchedDate: extractTag(item, "letterboxd:watchedDate"),
      rewatch: extractTag(item, "letterboxd:rewatch"),
    }))
    .filter((entry) => entry.title && entry.tmdbId && entry.rewatch !== "Yes")
    .slice(0, FILM_COUNT);

  const films = await Promise.all(
    diaryEntries.map(async (entry) => ({
      title: entry.title,
      year: entry.year,
      stars: starsFromRating(entry.rating),
      link: entry.link,
      watchedDate: entry.watchedDate,
      posterUrl: await posterForTmdbId(entry.tmdbId),
    }))
  );

  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.status(200).json({ films });
}
