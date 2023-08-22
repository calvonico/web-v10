import logoCeibo from "../img/ceibo.svg";
import logoWunderman from "../img/wunderman.svg";
import logoDespegar from "../img/despegar.svg";
import logoEmblue from "../img/emblue.svg";

export default function Resume() {
  const resume = [
    {
      company: "Ceibo Digital",
      title: "Sr Design Specialist",
      logo: logoCeibo,
      start: "2021",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "Despegar",
      title: "Sr Digital Designer",
      logo: logoDespegar,
      start: "2017",
      end: "2021",
    },
    {
      company: "Wunderman BA",
      title: "Designer & Email developer",
      logo: logoWunderman,
      start: "2014",
      end: "2017",
    },
    {
      company: "emBlue",
      title: "Email Marketing Manager",
      logo: logoEmblue,
      start: "2010",
      end: "2013",
    },
  ];

  function BriefcaseIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <path
          d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
          className="stroke-zinc-400 dark:stroke-zinc-500"
        />
      </svg>
    );
  }

  return (
    <div>
      <h2 className="flex justify-center text-base font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Employment</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <img src={role.logo} alt="" className="h-7 w-7" unoptimized="true" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <a href="#" class="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Button Text</span>
</a> */}
      <div className="mt-6">
        <a
          href="https://linkedin.com/in/nicolascalvo"
          target="_blank"
          className="flex w-full items-center justify-center rounded-xl bg-teal-600 px-3 py-2 text-base font-semibold text-white shadow-sm relative overflow-hidden group hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700  hover:ring-2 hover:ring-offset-2 hover:ring-teal-500 dark:ring-offset-slate-950 transition-all ease-out duration-300"
        >
          <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-96 trans ease"></span>
          Go to LinkedIn{" "}
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
