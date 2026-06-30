import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import coverPic from '../img/podcast.jpeg'

const platforms = [
  {
    name: "Spotify",
    icon: "bi:spotify",
    url: "#",
    color: "#1DB954",
  },
  {
    name: "Apple Podcasts",
    icon: "simple-icons:applepodcasts",
    url: "#",
    color: "#D56DFB",
  },
  {
    name: "YouTube",
    icon: "bi:youtube",
    url: "#",
    color: "#FF0000",
  },
];

function HeadphonesIcon(props) {
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
        d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function MicrophoneIcon(props) {
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

function VideoIcon(props) {
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
        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  );
}

export default function Podcast() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/podcast-episodes")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.episodes || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="flex items-center absolute top-4 left-4 text-gray-500 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <a href="/">
          <p className="ms-1 dark:text-white">Home</p>
        </a>
      </div>

      <div className="css2">
        <div className="columnas-contenido">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            exit={{ opacity: 0 }}
          >
            {/* Hero */}
            <div className="cuadro-bio dark:bg-slate-900 text-center">
              <div className="flex flex-col items-center py-6">
                <div className="w-40 h-40 rounded-2xl overflow-hidden mb-5">
                  <img
                    src={coverPic}
                    alt="Desde el Paddock"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Desde el Paddock
                </h1>
                <p className="mt-4 max-w-xl text-base text-gray-500 dark:text-zinc-400">
                  “Desde el Paddock” es tu pase directo al corazón de la Fórmula 1. Análisis, historias y todo lo que no se ve en la transmisión: estrategias, polémicas y la vida dentro del paddock. Si te apasiona la F1, este es tu lugar.
                </p>
              </div>
            </div>

            {/* Plataformas */}
            <div className="caja dark:bg-slate-900 mt-6">
              <h2 className="flex justify-left text-base font-semibold text-zinc-900 dark:text-zinc-100">
                <HeadphonesIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Escuchalo en</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-inset ring-gray-200 dark:ring-gray-700 hover:ring-2 hover:ring-teal-500 transition-all duration-300 dark:text-white"
                  >
                    <Icon icon={platform.icon} height="20" color={platform.color} />
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Últimos episodios */}
            <div className="caja dark:bg-slate-900 mt-6">
              <h2 className="flex justify-left text-base font-semibold text-zinc-900 dark:text-zinc-100">
                <MicrophoneIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Últimos episodios</span>
              </h2>
              <div className="mt-6 space-y-4">
                {loading ? (
                  <p className="text-sm text-gray-400 dark:text-zinc-500 text-center py-4">
                    Cargando episodios...
                  </p>
                ) : episodes.length === 0 ? (
                  <p className="text-sm text-gray-400 dark:text-zinc-500 text-center py-4">
                    Próximamente
                  </p>
                ) : (
                  episodes.map((ep) => (
                    <a
                      key={ep.number}
                      href={ep.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl p-4 ring-1 ring-inset ring-gray-200 dark:ring-gray-700 hover:ring-2 hover:ring-teal-500 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-medium text-teal-600 dark:text-teal-400">
                            Ep. {ep.number} &middot; {ep.date} &middot; {ep.duration} min
                          </p>
                          <h3 className="mt-1 text-base font-semibold text-zinc-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                            {ep.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 dark:text-zinc-400">
                            {ep.description}
                          </p>
                        </div>
                        <div className="ml-4 flex-shrink-0 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 text-teal-600 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  ))
                )}
              </div>
            </div>

            {/* Reels / Shorts */}
            <div className="caja dark:bg-slate-900 mt-6 mb-6">
              <h2 className="flex justify-left text-base font-semibold text-zinc-900 dark:text-zinc-100">
                <VideoIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Reels & Shorts</span>
              </h2>
              <div className="mt-6">
                <p className="text-sm text-gray-400 dark:text-zinc-500 text-center py-8">
                  Próximamente
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
