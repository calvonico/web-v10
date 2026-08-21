import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import imgTeengo from "../img/work/teengo-500x500.png";
import imgDonation from "../img/work/donapp-500x500.png";
import imgVenmo from "../img/work/venmo-500x500.png";
import imgDespegar from "../img/work/despegar-500x500.png";

const projects = [
  {
    name: "Wallet App",
    client: "TeenGo",
    description: "UX/UI redesign of a digital wallet for teenagers",
    discipline: "UX/UI",
    image: imgTeengo,
    url: "/work/wallet-app",
  },
  {
    name: "NGO Donation App",
    client: "DonApp",
    description: "UX/UI design of an app for donation",
    discipline: "UX/UI",
    image: imgDonation,
    url: "https://www.behance.net/gallery/122906011/DonApp-UXUI-Design",
  },
  {
    name: "Venmo",
    client: "PayPal",
    description: "Graphic and email marketing assets",
    discipline: "Graphic Design",
    image: imgVenmo,
    url: "https://www.behance.net/gallery/143438131/Venmo-Graphic-UI-Design",
  },
  {
    name: "Despegar",
    client: "Despegar",
    description: "Marketing graphic assets",
    discipline: "Graphic Design",
    image: imgDespegar,
    url: "https://www.behance.net/gallery/96941755/Despegar-APP-web",
  },
];

function isInternal(url) {
  return url.startsWith("/");
}

export default function Work() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const disciplines = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.discipline))],
    []
  );

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.discipline === filter),
    [filter]
  );

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div className="relative z-10 min-h-screen w-full bg-neutral-100 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
        >
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
          Home
        </Link>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <h1 className="mt-10 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Selected Work
          </h1>
          <p className="mt-4 max-w-xl text-base text-zinc-500 dark:text-zinc-400">
            A mix of UX/UI, product and graphic design work over the years.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {disciplines.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === d
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-white text-zinc-600 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 dark:bg-slate-900 dark:text-zinc-300 dark:ring-slate-700 dark:hover:bg-slate-800"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </motion.div>

        <div
          className="relative mt-8"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered && (
              <motion.div
                key={hovered.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none absolute z-10 hidden md:block w-64 aspect-[4/3] overflow-hidden rounded-xl shadow-2xl"
                style={{
                  left: coords.x + 24,
                  top: coords.y - 140,
                }}
              >
                <img
                  src={hovered.image}
                  alt={hovered.name}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <ul>
            {filtered.map((project, index) => {
              const external = !isInternal(project.url);
              const Row = (
                <div
                  onMouseEnter={() => setHovered(project)}
                  className={`group flex items-center justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 py-7 transition-opacity duration-200 ${
                    hovered && hovered.name !== project.name
                      ? "opacity-40"
                      : "opacity-100"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-14 w-14 flex-none rounded-lg object-cover md:hidden"
                  />
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 truncate">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-none items-center gap-4">
                    <span className="hidden sm:inline text-xs uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                      {project.discipline}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-zinc-900 dark:group-hover:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              );

              return (
                <li key={project.name}>
                  {external ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {Row}
                    </a>
                  ) : (
                    <Link to={project.url}>{Row}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
