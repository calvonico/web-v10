import Alskar from "../components/alskar";
import Bio from "../components/bio";
import Climamap from "../components/climamap";
import Movies from "../components/movies";
import Books from "../components/books";
// import Series from "../components/series";
// import Portfolio from "../components/portfolio3";
// import Projects from "../components/projects";
// import Resume from "../components/resume";
import Buildinpublic from "../components/buildinpublic";
import SocialMedia from "../components/socialmedia";
import Suscripcion from "../components/suscripcion";
import Notes from "../components/notes";
import PodcastPlayer from "../components/podcastplayer";
import FadeInBox from "../components/FadeInBox";
import FeaturedWork from "../components/FeaturedWork";
import Lab from "../components/lab";
import Nutrigym from "../components/nutrigym";
import Deka from "../components/deka";


export default function Home() {
  return (
    <div className="css2">
      <div className="columnas-contenido">
        <FadeInBox className="cuadro-bio dark:bg-slate-900">
          <Bio />
        </FadeInBox>
        <div className="ver_desktop">
          <div className="my-masonry-grid">
            <div className="my-masonry-grid_column">

              <FadeInBox className="caja dark:bg-slate-900" delay={0}>
                <FeaturedWork />
              </FadeInBox>

               <FadeInBox className="caja dark:bg-slate-900" delay={0.08}>
                <Notes />
              </FadeInBox>

              <FadeInBox className="caja dark:bg-slate-900" delay={0.16}>
                <Movies />
              </FadeInBox>

              <FadeInBox className="caja dark:bg-slate-900" delay={0.24}>
                <Deka />
              </FadeInBox>

              <FadeInBox className="caja dark:bg-slate-900" delay={0.32}>
                <SocialMedia />
              </FadeInBox>


            </div>
            <div className="my-masonry-grid_column">
              <FadeInBox delay={0}>
                <Climamap />
              </FadeInBox>
              <FadeInBox className="caja dark:bg-slate-900" delay={0.08}>
                <Nutrigym />
              </FadeInBox>
              <FadeInBox className="caja dark:bg-slate-900" delay={0.16}>
                <Lab />
              </FadeInBox>
              <FadeInBox className="caja dark:bg-slate-900" delay={0.24}>
                <PodcastPlayer />
              </FadeInBox>
              {/* <div className="caja dark:bg-slate-900">
                <Alskar />
              </div> */}
              {/* <div className="caja dark:bg-slate-900">
                <Buildinpublic />
              </div> */}
              {/* ****Si quiero hacer la caja con los reflejos, tengo que poner caja-conborde y el shadow y despues los divs con los gradient****
              <div className="caja-conborde shadow-[inset_0_0_0_1px_hsl(0deg,0%,100%,0.1)] dark:bg-gray-900">
                aca empieza el div de gradient --->
                <div className="absolute inset-0 opacity-10 degrade-caja-1"></div>
                <div className="absolute inset-0 opacity-20 degrade-caja-2"></div>
                <--- aca termina el div de gradient
                <Books />
              </div> */}
              {/*<div className="caja dark:bg-slate-900">
                <Buildinpublic />
              </div>*/}
              <FadeInBox className="caja dark:bg-slate-900" delay={0.32}>
                <Books />
              </FadeInBox>
              {/* <div className="caja dark:bg-slate-900">
                <Series />
              </div> */}
              {/* <div className="caja dark:bg-slate-900">
                <Resume />
              </div> */}

              {/* <div className="caja dark:bg-slate-900">
                <Projects />
              </div> */}
              {/* <div className="caja dark:bg-slate-900">
                <Portfolio />
              </div> */}
              <FadeInBox className="caja dark:bg-slate-900" delay={0.4}>
                <Suscripcion />
              </FadeInBox>


            </div>
          </div>
              {/* <div className="cuadro-bio dark:bg-slate-900">
                <SocialMedia />
              </div> */}
        </div>

        <div className="ver_mobile">
          <div className="my-masonry-grid">
            <div className="my-masonry-grid_column">
              {/* <div className="caja dark:bg-slate-950">
                <Portfolio />
              </div> */}
              {/* <div className="caja dark:bg-slate-950">
                <Resume />
              </div> */}
              {/* <div className="caja dark:bg-slate-950">
                <Alskar />
              </div> */}
              {/* <div className="caja dark:bg-slate-950">
                <Projects />
              </div> */}
              {/* <div className="caja dark:bg-slate-900">
                <Buildinpublic />
              </div> */}
              <FadeInBox className="caja dark:bg-slate-900" delay={0}>
                <FeaturedWork />
              </FadeInBox>
              <FadeInBox className="caja dark:bg-slate-900" delay={0.08}>
                <Notes />
              </FadeInBox>
              <FadeInBox className="caja dark:bg-slate-900" delay={0.16}>
                <Nutrigym />
              </FadeInBox>
              <FadeInBox className="caja dark:bg-slate-900" delay={0.24}>
                <Lab />
              </FadeInBox>
              <FadeInBox className="caja dark:bg-slate-900" delay={0.32}>
                <Movies />
              </FadeInBox>
              <FadeInBox className="caja dark:bg-slate-900" delay={0.4}>
                <PodcastPlayer />
              </FadeInBox>
              <FadeInBox className="caja dark:bg-slate-900" delay={0.48}>
                <Books />
              </FadeInBox>
              {/* <div className="caja dark:bg-slate-950">
                <Series />
              </div> */}
              <FadeInBox className="caja dark:bg-slate-900" delay={0.56}>
                <Deka />
              </FadeInBox>
              <FadeInBox className="caja dark:bg-slate-900" delay={0.64}>
                <Suscripcion />
              </FadeInBox>
              <FadeInBox className="caja dark:bg-slate-900" delay={0.72}>
                <SocialMedia />
              </FadeInBox>
            </div>
          </div>
        </div>

        {/* <p className="copyright dark:text-zinc-300">
          Nico Calvo © {new Date().getFullYear()} &ndash; v10
        </p> */}
      </div>
    </div>
  );
}
