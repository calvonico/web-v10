import logoWebio from '../img/webio.png'
import logoMero from "../img/mero_v1.png";

export default function Buildinpublic () {

      const projects = [
        {
          company: 'Mero Home', 
          title: 'Your home. Organized.',
          logo: logoMero,
          start: "",
          end: "In progress"
        },
        {
          company: "Webio",
          title: "Your own personal corner on the internet",
          logo: logoWebio,
          start: "",
          end: "In progress",
        },

      ]

    return (
        <div>

        <h2 className="flex justify-left text-base font-semibold text-zinc-900 dark:text-zinc-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" className='fill-zinc-100 stroke-zinc-400  dark:fill-zinc-100/10 dark:stroke-zinc-500' />
          </svg>
          <span className="ml-3">Apps I'm building</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {projects.map((role, roleIndex) => (
            <li key={roleIndex} className="flex gap-4">
              <a href="#" className='flex flex-auto p-2 -m-2 gap-4 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-950 transition-colors'>
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <img src={role.logo} alt="" className="h-7 w-7" unoptimized="true" />
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Name</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {role.company}
                  </dd>
                  <dt className="sr-only">Description</dt>
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
                    </time>{' '}
                    <div className="blobs-container available">
                    <span aria-hidden="true" className='blob yellow'></span>{' '}
                    
                    <time dateTime={role.end.dateTime ?? role.end}>
                      {role.end.label ?? role.end}
                    </time></div>
                  </dd>
                </dl>
              </a>
            </li>
          ))}
        </ol>

      </div>
    )
}
