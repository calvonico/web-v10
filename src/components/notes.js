export default function Suscripcion() {

    function NewspaperIcon(props) {
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
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          />
        </svg>
      );
    
    }
  
    return (
      <div>
        <h2 className="flex justify-center text-base font-semibold text-zinc-900 dark:text-zinc-100">
          <NewspaperIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Latest note</span>
        </h2>
        <div className="mt-6">


            <h3 className="text-xl font-bold dark:text-white">
                El titulo de la nota
            </h3>
        <div className="mt-1 h-24 overflow-hidden relative" style={{ boxSizing: "border-box" }}>
          <div className="dark:text-zinc-100">
          contrenido un poco largo para poder ver que tanto se puede poner. Cuantas lineas de texto podemos poner aca y hacer el difuminado y el truncado para seguir leyendo y que se corte y el texto sigue sigue
          </div>
          <div className="bg-gradient-to-t from-white dark:from-slate-950 z-10 absolute inset-0"></div>
        </div>
                </div>
        <div className="mt-6">
        <a
          
          target="_blank"
          className="flex w-full items-center justify-center rounded-xl bg-teal-600 p-2 font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline-offset-0 transition-colors"
        >
          Read all notes
        </a>
      </div>
      </div>
  
      
    );
  }
  