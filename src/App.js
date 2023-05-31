import Alskar from "./components/alskar";
import Bio from "./components/bio";
import Climamap from "./components/climamap";
import Movies from "./components/movies";
import Portfolio from "./components/portfolio";
import Projects from "./components/projects";
import Resume from "./components/resume";
import SocialMedia from "./components/socialmedia";

// function SunIcon(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       {...props}
//     >
//       <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
//       <path
//         d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
//         fill="none"
//       />
//     </svg>
//   )
// }

// function MoonIcon(props) {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//       <path
//         d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   )
// }

// function ModeToggle() {
//   function disableTransitionsTemporarily() {
//     document.documentElement.classList.add('[&_*]:!transition-none')
//     window.setTimeout(() => {
//       document.documentElement.classList.remove('[&_*]:!transition-none')
//     }, 0)
//   }

//   function toggleMode() {
//     disableTransitionsTemporarily()

//     let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
//     let isSystemDarkMode = darkModeMediaQuery.matches
//     let isDarkMode = document.documentElement.classList.toggle('dark')

//     if (isDarkMode === isSystemDarkMode) {
//       delete window.localStorage.isDarkMode
//     } else {
//       window.localStorage.isDarkMode = isDarkMode
//     }
//   }

//   return (
//     <button
//       type="button"
//       aria-label="Toggle dark mode"
//       className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
//       onClick={toggleMode}
//     >
//       <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
//       <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
//     </button>
//   )
// }

export default function App() {
  return (
    <div className="App">
      <div className="contenedor bg-neutral-100 dark:bg-slate-900">

        {/* <div className="flex justify-end md:flex-1 pt-6 pe-6 z-10 ">
          <div className="pointer-events-auto">
            <ModeToggle />
          </div>
        </div> */}
        <div className="css2">
          <div className="columnas-contenido">
            <div className="cuadro-bio dark:bg-slate-950">
              <Bio />
            </div>
            <div className="ver_desktop">
              <div className="my-masonry-grid">
                <div className="my-masonry-grid_column">
                  <div className="caja dark:bg-slate-950">
                    <Portfolio />
                  </div>
                  <div className="caja dark:bg-slate-950">
                    <Alskar />
                  </div>
                  <div className="caja dark:bg-slate-950">
                    <Movies />
                  </div>
                </div>
                <div className="my-masonry-grid_column">
                  <Climamap />
                  <div className="caja dark:bg-slate-950">
                    <Resume />
                  </div>
                  
                  <div className="caja dark:bg-slate-950">
                    <Projects />
                  </div>
                  <div className="caja dark:bg-slate-950">
                    <SocialMedia />
                  </div>
                </div>
              </div>
            </div>

            <div className="ver_mobile">
              <div className="my-masonry-grid">
                <div className="my-masonry-grid_column">
                  <div className="caja dark:bg-slate-950">
                    <Portfolio />
                  </div>
                  <div className="caja dark:bg-slate-950">
                    <Resume />
                  </div>
                  <div className="caja dark:bg-slate-950">
                    <Alskar />
                  </div>
                  <div className="caja dark:bg-slate-950">
                    <Projects />
                  </div>
                  <div className="caja dark:bg-slate-950">
                    <Movies />
                  </div>
                  <div className="caja dark:bg-slate-950">
                    <SocialMedia />
                  </div>
                </div>
              </div>
            </div>

            <p className="copyright dark:text-zinc-300">
              Nico Calvo © {new Date().getFullYear()} &ndash; v10
            </p>
          </div>
        </div>

        <div className="fondo-degradado"></div>
      </div>

      <div className="tutto-abajo"></div>
    </div>
  );
}
