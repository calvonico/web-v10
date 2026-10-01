function FlaskIcon(props) {
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
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5.5 14.5A3 3 0 007.621 19.5h8.758A3 3 0 0018.5 14.5l-3.591-4.091a2.25 2.25 0 01-.659-1.591V3.104M6.75 3h10.5"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function PixelFlask({ x, liquidColor, height, delay }) {
  const bodyTop = 32 - height;
  return (
    <g shapeRendering="crispEdges">
      {/* neck */}
      <rect x={x + 3} y="6" width="4" height="6" className="fill-zinc-300 dark:fill-zinc-600" />
      {/* body outline */}
      <rect x={x} y={bodyTop} width="10" height={height} className="fill-zinc-200 dark:fill-zinc-700" />
      {/* liquid */}
      <rect
        x={x + 1}
        y={bodyTop + 3}
        width="8"
        height={height - 4}
        fill={liquidColor}
        className="animate-lab-liquid"
        style={{ animationDelay: `${delay}ms` }}
      />
      {/* bubbles */}
      <rect
        x={x + 3}
        y={bodyTop + height - 8}
        width="2"
        height="2"
        fill={liquidColor}
        className="animate-lab-bubble opacity-90"
        style={{ animationDelay: `${delay}ms` }}
      />
      <rect
        x={x + 6}
        y={bodyTop + height - 6}
        width="2"
        height="2"
        fill={liquidColor}
        className="animate-lab-bubble opacity-90"
        style={{ animationDelay: `${delay + 900}ms` }}
      />
    </g>
  );
}

function LabScene() {
  return (
    <svg
      viewBox="0 0 64 34"
      className="w-full h-24 rounded-lg bg-zinc-950"
      preserveAspectRatio="xMidYMax meet"
    >
      <g shapeRendering="crispEdges">
        {/* desk */}
        <rect x="0" y="30" width="64" height="4" className="fill-zinc-700" />
        <PixelFlask x={8} liquidColor="#2dd4bf" height={16} delay={0} />
        <PixelFlask x={27} liquidColor="#f59e0b" height={20} delay={400} />
        <PixelFlask x={46} liquidColor="#e879f9" height={13} delay={800} />
      </g>
    </svg>
  );
}

export default function Lab() {
  return (
    <div>
      <h2 className="flex justify-left text-base font-semibold text-zinc-900 dark:text-zinc-100">
        <FlaskIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Lab</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Experiments, games and other things I build just for fun.
      </p>

      <div className="mt-4">
        <LabScene />
      </div>

      <a
        href="https://quesopedia.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-4 flex items-center justify-between rounded-xl bg-zinc-50 px-3 py-2 transition-colors hover:bg-zinc-100 dark:bg-slate-800 dark:hover:bg-slate-700"
      >
        <span className="text-sm font-medium text-zinc-700 transition-colors group-hover:text-teal-600 dark:text-zinc-300 dark:group-hover:text-teal-400">
          Quesopedia
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
          v1
        </span>
      </a>
    </div>
  );
}
