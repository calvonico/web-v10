function TrophyIcon(props) {
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
        d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.25 9.71 2 12 2c2.291 0 4.545.25 6.75.721v1.515M18.75 4.236c.982.143 1.954.317 2.916.52a6.003 6.003 0 01-5.395 4.972m2.479-5.492V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 00-2.48-.008"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  );
}

const upcomingRaces = [
  { edition: "DEKA Barcelona", date: "March 2027" },
  { edition: "DEKA Barcelona", date: "September 2027" },
];

export default function Deka() {
  return (
    <div>
      <h2 className="flex justify-left text-base font-semibold text-zinc-900 dark:text-zinc-100">
        <TrophyIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Fitness</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Competed in DEKA Barcelona.
      </p>

      <div className="mt-4 space-y-2">
        {upcomingRaces.map((race, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl bg-zinc-50 px-3 py-2 dark:bg-slate-800"
          >
            <span className="text-sm text-zinc-700 dark:text-zinc-300">
              {race.edition}
            </span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-white">
              {race.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
