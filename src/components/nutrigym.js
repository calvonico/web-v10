function BoltIcon(props) {
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
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  );
}

export default function Nutrigym() {
  return (
    <div>
      <h2 className="flex justify-left text-base font-semibold text-zinc-900 dark:text-zinc-100">
        <BoltIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">NutriGym AI</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        An AI-powered nutrition and training companion I'm currently building.
      </p>

      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 dark:bg-teal-900/30">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
        </span>
        <span className="text-xs font-medium text-teal-700 dark:text-teal-300">
          Building
        </span>
      </div>
    </div>
  );
}
