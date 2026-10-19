// import Alskar from "./components/alskar";
// import Bio from "./components/bio";
// import Climamap from "./components/climamap";
// import Movies from "./components/movies";
// import Portfolio from "./components/portfolio3";
// import Projects from "./components/projects";
// import Resume from "./components/resume";
// import SocialMedia from "./components/socialmedia";
// import Suscripcion from "./components/suscripcion";
// import Notes from "./components/notes";

import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const Wallet = lazy(() => import("./pages/walletApp"));
const NgoDonationApp = lazy(() => import("./pages/ngoDonationApp"));
const Venmo = lazy(() => import("./pages/venmo"));
const Despegar = lazy(() => import("./pages/despegar"));
const GrupoAxo = lazy(() => import("./pages/grupoAxo"));
const Cashi = lazy(() => import("./pages/cashi"));
const Wally = lazy(() => import("./pages/wally"));
const Ingram = lazy(() => import("./pages/ingram"));
const Podcast = lazy(() => import("./pages/Podcast"));

export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div className="contenedor bg-neutral-100 dark:bg-slate-950">
        <Suspense fallback={<Loading />}>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/wallet-app" element={<Wallet />} />
              <Route path="/work/ngo-donation-app" element={<NgoDonationApp />} />
              <Route path="/work/venmo" element={<Venmo />} />
              <Route path="/work/despegar" element={<Despegar />} />
              <Route path="/work/grupo-axo" element={<GrupoAxo />} />
              <Route path="/work/cashi" element={<Cashi />} />
              <Route path="/work/wally" element={<Wally />} />
              <Route path="/work/ingram" element={<Ingram />} />
              <Route path="/podcast" element={<Podcast />} />
            </Routes>
          </AnimatePresence>
        </Suspense>

        <footer className="z-10 mx-auto flex w-[900px] max-w-full flex-col gap-1 px-[18px] pb-12 pt-4 text-xs text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-start sm:justify-between">
          <p>Nico Calvo © {new Date().getFullYear()} &ndash; v10</p>
          <p className="max-w-md opacity-80 sm:text-right">
            Movie data and posters from{' '}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              TMDb
            </a>
            . This website uses the TMDb API but is not endorsed or certified by TMDb.
          </p>
        </footer>
        <div className="fondo-degradado"></div>
      </div>

      <div className="tutto-abajo"></div>
    </div>
  );

  function Loading() {
    return <div className="text-white ">Loading...</div>;
  }
}
