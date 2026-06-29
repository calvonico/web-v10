const SHOW_ID = "76Qh4RfixIDxRZc247h0zy";

async function getAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
}

export default async function handler(req, res) {
  const token = await getAccessToken();

  const response = await fetch(
    `https://api.spotify.com/v1/shows/${SHOW_ID}/episodes?market=ES&limit=5`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!response.ok) {
    return res.status(response.status).json({ error: "Spotify API error" });
  }

  const data = await response.json();

  const episodes = data.items.map((ep, i) => ({
    number: data.total - i,
    title: ep.name,
    description: ep.description?.slice(0, 150) || "",
    date: new Date(ep.release_date).toLocaleDateString("es-AR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    duration: Math.round(ep.duration_ms / 60000),
    url: ep.external_urls?.spotify || "#",
    image: ep.images?.[0]?.url || null,
  }));

  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.status(200).json({ episodes });
}
