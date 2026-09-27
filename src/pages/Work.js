import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import imgTeengo from "../img/work/teengo-500x500.png";
import imgDonation from "../img/work/donapp-500x500.png";
import imgVenmo from "../img/work/venmo-500x500.png";
import imgDespegar from "../img/work/despegar-500x500.png";

// size controls how many grid cells a card spans in the bento layout.
// "large" -> 2x2, "wide" -> 2x1, "small" -> 1x1 (default when omitted).
// Projects without an `image` yet render an initials placeholder instead
// (see the `color` field) until real artwork is added.
const projects = [
  {
    name: "Wallet App",
    client: "TeenGo",
    description: "UX/UI redesign of a digital wallet for teenagers",
    discipline: "UX/UI",
    image: imgTeengo,
    url: "/work/wallet-app",
    size: "large",
  },
  {
    name: "NGO Donation App",
    client: "DonApp",
    description: "UX/UI design of an app for donation",
    discipline: "UX/UI",
    image: imgDonation,
    url: "/work/ngo-donation-app",
    size: "wide",
  },
  {
    name: "Venmo",
    client: "PayPal",
    description: "Graphic and email marketing assets",
    discipline: "Graphic Design",
    image: imgVenmo,
    url: "/work/venmo",
    size: "small",
  },
  {
    name: "Despegar",
    client: "Despegar",
    description: "Marketing graphic assets",
    discipline: "Graphic Design",
    image: imgDespegar,
    url: "/work/despegar",
    size: "small",
  },
  {
    name: "Grupo Axo",
    client: "Grupo Axo",
    description: "Social media, video and email assets for fashion retail brands",
    discipline: "Graphic Design",
    url: "/work/grupo-axo",
    size: "wide",
    color: "from-rose-500 to-orange-400",
  },
  {
    name: "Cashi",
    client: "Cashi",
    description: "Email marketing design and A/B testing for a digital wallet",
    discipline: "Graphic Design",
    url: "/work/cashi",
    size: "small",
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Wally",
    client: "Wally",
    description: "UI design for a new business line in an international payments app",
    discipline: "UX/UI",
    url: "/work/wally",
    size: "small",
    color: "from-sky-500 to-indigo-400",
  },
  {
    name: "Ingram",
    client: "Ingram",
    description: "Digital and communication assets for a global tech distributor",
    discipline: "Graphic Design",
    url: "/work/ingram",
    size: "small",
    color: "from-fuchsia-500 to-purple-400",
  },
];

const sizeClasses = {
  large: "sm:col-span-2 sm:row-span-2",
  wide: "sm:col-span-2",
  small: "",
};

function isInternal(url) {
  return url.startsWith("/");
}

export default function Work() {
  const [filter, setFilter] = useState("All");

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
        <Link to="/">
          <p className="ms-1 dark:text-white">Home</p>
        </Link>
      </div>

      <div className="css2">
        <div className="columnas-contenido">
          <div className="cuadro-bio dark:bg-slate-900">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
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
                        : "bg-white text-zinc-600 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 dark:bg-slate-800 dark:text-zinc-300 dark:ring-slate-700 dark:hover:bg-slate-700"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 auto-rows-[16rem] gap-4">
              {filtered.map((project, index) => {
                const external = !isInternal(project.url);
                const Card = (
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      delay: (index % 4) * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative h-full w-full overflow-hidden rounded-2xl bg-zinc-900"
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 h-full w-full object-cover object-[center_75%] transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${
                          project.color || "from-zinc-700 to-zinc-900"
                        }`}
                      >
                        <span className="text-4xl font-bold tracking-tight text-white/30">
                          {project.name}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="text-xs uppercase tracking-wide text-white/60">
                        {project.discipline}
                      </span>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/70 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </motion.div>
                );

                return external ? (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={sizeClasses[project.size] || ""}
                  >
                    {Card}
                  </a>
                ) : (
                  <Link
                    key={project.name}
                    to={project.url}
                    className={sizeClasses[project.size] || ""}
                  >
                    {Card}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
