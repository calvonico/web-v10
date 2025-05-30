import Alskar from "../components/alskar";
import Bio from "../components/bio";
import Climamap from "../components/climamap";
import Movies from "../components/movies";
import Books from "../components/books";
// import Series from "../components/series";
// import Portfolio from "../components/portfolio3";
// import Projects from "../components/projects";
// import Resume from "../components/resume";
import SocialMedia from "../components/socialmedia";
import Suscripcion from "../components/suscripcion";
import Notes from "../components/notes";

export default function Home() {
  return (
    <div className="css2">
      <div className="columnas-contenido">
        <div className="cuadro-bio dark:bg-slate-950">
          <Bio />
        </div>
        <div className="ver_desktop">
          <div className="my-masonry-grid">
            <div className="my-masonry-grid_column">
              
               <div className="caja dark:bg-slate-950">
                <Notes />
              </div> 

              <div className="caja dark:bg-slate-950">
                <Movies />
              </div>
              
              <div className="caja dark:bg-slate-950">
                <SocialMedia />
              </div>

            </div>
            <div className="my-masonry-grid_column">
              <Climamap />
              {/* <div className="caja dark:bg-slate-950">
                <Alskar />
              </div> */}
              <div className="caja dark:bg-slate-950">
                <Books />
              </div>
              {/* <div className="caja dark:bg-slate-950">
                <Series />
              </div> */}
              {/* <div className="caja dark:bg-slate-950">
                <Resume />
              </div> */}

              {/* <div className="caja dark:bg-slate-950">
                <Projects />
              </div> */}
              {/* <div className="caja dark:bg-slate-950">
                <Portfolio />
              </div> */}
              <div className="caja dark:bg-slate-950">
                <Suscripcion />
              </div>
              

            </div>
          </div>
              {/* <div className="cuadro-bio dark:bg-slate-950">
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
              <div className="caja dark:bg-slate-950">
                  <Notes />
                </div>
              <div className="caja dark:bg-slate-950">
                <Movies />
              </div>
              <div className="caja dark:bg-slate-950">
                <Books />
              </div>
              {/* <div className="caja dark:bg-slate-950">
                <Series />
              </div> */}
              <div className="caja dark:bg-slate-950">
                <Suscripcion />
              </div>
              <div className="caja dark:bg-slate-950">
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
