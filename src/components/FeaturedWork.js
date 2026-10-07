import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const featured = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.featured - b.featured);

function BriefcaseIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  );
}

export default function FeaturedWork() {
  const [hero, ...rest] = featured;

  return (
    <div>
      <h2 className="flex justify-left text-base font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Selected Work</span>
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {hero && (
          <Link
            key={hero.name}
            to={hero.url}
            className="group relative col-span-2 h-40 overflow-hidden rounded-xl bg-zinc-900"
          >
            <ProjectImage project={hero} />
            <div className="absolute inset-x-0 bottom-0 p-3">
              <span className="text-sm font-semibold text-white">
                {hero.name}
              </span>
            </div>
          </Link>
        )}

        {rest.map((project) => (
          <Link
            key={project.name}
            to={project.url}
            className="group relative h-28 overflow-hidden rounded-xl bg-zinc-900"
          >
            <ProjectImage project={project} />
            <div className="absolute inset-x-0 bottom-0 p-3">
              <span className="text-sm font-semibold text-white">
                {project.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link
          to="/work"
          className="flex w-full items-center justify-center rounded-xl bg-teal-600 px-3 py-2 text-base font-semibold text-white shadow-sm relative overflow-hidden group hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700 hover:ring-2 hover:ring-offset-2 hover:ring-teal-500 dark:ring-offset-slate-950 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-96 trans ease"></span>
          View all work
        </Link>
      </div>
    </div>
  );
}

function ProjectImage({ project }) {
  return (
    <>
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
          <span className="text-2xl font-bold tracking-tight text-white/30">
            {project.name}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
    </>
  );
}
