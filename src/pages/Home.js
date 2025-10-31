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


export default function Home() {
  return (
    <div className="css2">
      <div className="columnas-contenido">
        <div className="cuadro-bio dark:bg-slate-900">
          <Bio />
        </div>
        <div className="ver_desktop">
          <div className="my-masonry-grid">
            <div className="my-masonry-grid_column">
              
               <div className="caja dark:bg-slate-900">
                <Notes />
              </div> 

              <div className="caja dark:bg-slate-900">
                <Movies />
              </div>
              
              <div className="caja dark:bg-slate-900">
                <Suscripcion />
              </div>

            </div>
            <div className="my-masonry-grid_column">
              <Climamap />
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
              <div className="caja dark:bg-slate-900">
                <Buildinpublic />
              </div>
              <div className="caja dark:bg-slate-900">
                <Books />
              </div>
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
              <div className="caja dark:bg-slate-900">
                <SocialMedia />
              </div>
              

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
              <div className="caja dark:bg-slate-900">
                <Buildinpublic />
              </div>
              <div className="caja dark:bg-slate-900">
                  <Notes />
                </div>
              <div className="caja dark:bg-slate-900">
                <Movies />
              </div>
              <div className="caja dark:bg-slate-900">
                <Books />
              </div>
              {/* <div className="caja dark:bg-slate-950">
                <Series />
              </div> */}
              <div className="caja dark:bg-slate-900">
                <Suscripcion />
              </div>
              <div className="caja dark:bg-slate-900">
                <SocialMedia />
              </div>
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
