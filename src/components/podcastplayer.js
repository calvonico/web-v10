import { useState, useEffect } from "react";

function PodcastIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  );
}

export default function PodcastPlayer() {
  const [episodeId, setEpisodeId] = useState(null);

  useEffect(() => {
    fetch("/api/podcast-episodes")
      .then((res) => res.json())
      .then((data) => {
        const latest = data.episodes?.[0];
        if (latest?.url) {
          const id = latest.url.split("/episode/")[1]?.split("?")[0];
          if (id) setEpisodeId(id);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <h2 className="flex justify-left text-base font-semibold text-zinc-900 dark:text-zinc-100">
        <PodcastIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">
          <a href="/podcast" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            Desde el Paddock
          </a>
        </span>
      </h2>
      <div className="mt-6">
        {episodeId ? (
          <iframe
            src={`https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: "12px" }}
          />
        ) : (
          <div className="h-[152px] rounded-xl bg-zinc-100 dark:bg-slate-800 animate-pulse" />
        )}
      </div>
    </div>
  );
}
