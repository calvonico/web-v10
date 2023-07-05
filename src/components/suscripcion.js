export default function Suscripcion() {
  function EnvelopeOpenIcon(props) {
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
          d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
      </svg>
    );
  }

  return (
    <div>
      <h2 className="flex justify-center text-base font-semibold text-zinc-900 dark:text-zinc-100">
        <EnvelopeOpenIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Subscribe to receive my updates</span>
      </h2>
      <div className="mt-6">
        <form action="https://email.alskarcloud.com/subscribe" method="POST">
          <div className="flex">
            <input
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              className="w-1/2 me-2 rounded-xl px-3 py-2 ring-1 ring-inset ring-gray-200 border-gray-300 bg-gray-50 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-400 focus:ring-opacity-50"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              id="email"
              className="w-1/2 rounded-xl px-3 py-2 ring-1 ring-inset ring-gray-200 border-gray-300 bg-gray-50 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-400 focus:ring-opacity-50"
              required
            />
          </div>

          <div style={{ display: "none" }}>
            <label htmlFor="hp">HP</label>
            <br />
            <input type="text" name="hp" id="hp" />
          </div>
          <input
            type="hidden"
            name="list"
            value="763cAB763qr0763vhY9g7K7635Jb9A"
          />
          <input type="hidden" name="subform" value="yes" />
          <input
            type="submit"
            name="submit"
            id="submit"
            value="Subscribe"
            className="block w-full p-2 mt-3 rounded-xl bg-zinc-300 font-semibold text-zinc-900 shadow-sm hover:bg-teal-700 hover:text-white transition-all"
            style={{ cursor: "pointer" }}
          />
        </form>
      </div>
      {/* { new Alert({ type: 'success', message: 'Toast Message Here', }) } */}
    </div>
  );
}
