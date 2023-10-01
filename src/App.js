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

export default function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Wallet = lazy(() => import("./pages/walletApp"));
  const location = useLocation();

  return (
    <div className="App">
      <div className="contenedor bg-neutral-100 dark:bg-slate-900">
        <Suspense fallback={<Loading />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Home />} />
              <Route path="/work/wallet-app" element={<Wallet />} />
            </Routes>
          </AnimatePresence>
        </Suspense>

        <div className="pb-12 z-10">
          <p className="copyright dark:text-zinc-300">
            Nico Calvo © {new Date().getFullYear()} &ndash; v10
          </p>
        </div>
        <div className="fondo-degradado"></div>
      </div>

      <div className="tutto-abajo"></div>
    </div>
  );

  function Loading() {
    return <div className="text-white ">Loading...</div>;
  }
}
