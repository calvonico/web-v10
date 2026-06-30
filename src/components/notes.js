import { useState, useEffect } from "react";

export default function Suscripcion() {
  const [note, setNote] = useState(null);

  useEffect(() => {
    fetch("/api/latest-note")
      .then((res) => res.json())
      .then((data) => setNote(data))
      .catch(() => {});
  }, []);

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
      <h2 className="flex justify-left text-base font-semibold text-zinc-900 dark:text-zinc-100">
        <NewspaperIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Latest note</span>
      </h2>
      <div className="mt-6">
        <a href={note?.slug ? `/notes/${note.slug}` : "#"} className="group">
          <h3 className="text-xl font-bold dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            {note?.title || "Loading..."}
          </h3>
        </a>
        <div
          className="mt-1 h-24 overflow-hidden relative"
          style={{ boxSizing: "border-box" }}
        >
          <div className="dark:text-zinc-100">
            {note?.description || ""}
          </div>
          <div className="bg-gradient-to-t from-white dark:from-slate-900 z-10 absolute inset-0"></div>
        </div>
      </div>
      <div className="mt-6">
        <a
          href="/notes"
          className="flex w-full items-center justify-center rounded-xl bg-teal-600 px-3 py-2 text-base font-semibold text-white shadow-sm relative overflow-hidden group hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700  hover:ring-2 hover:ring-offset-2 hover:ring-teal-500 dark:ring-offset-slate-950 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-96 trans ease"></span>
          Read all notes
        </a>
      </div>
    </div>
  );
}
