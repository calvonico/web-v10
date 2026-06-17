import imgBio from '../img/bio.jpg'

export default function Bio() {
  return (
    <div className="contenido-bio">
      <div className="avatar-bio">
        <div className="avatar">
          <img
            alt="Nico Calvo"
            src={imgBio}
            // src="https://nicocalvo.com/images/nico-rounded_700x700.png"
            className="imagen-bio"
            decoding="async"
          />
        </div>
      </div>
      <div className="bio dark:text-zinc-100">
        <h2 className="bio-name">
          Hey, I'm <strong>Nico</strong> 👋
        </h2>
        <p className="mt-1">
          An Argentinian designer and creative based in Spain. For over a decade, I've worked in graphic design, digital interfaces, marketing, and digital product development. I'm passionate about building simple experiences, solving complex problems, and exploring the intersection of design, technology, and artificial intelligence. When I'm not designing, I'm probably testing new tools, working on a personal project, or following Formula 1.</p>
        {/*<p className='mt-3'>
          Buenos Aires ✈️ Porto ✈️ Barcelona
        </p>
        <p className="mt-3">
          For the last 14 years my work has consisted of marketing design: building creative assets for email, social media, websites, and more.
        </p>
        //<p className="mt-3">
          //Lately I've been working as a Creative Lead, coordinating a group of designers focusing on achieving their best version to create unique and quality images and illustrations for our clients.
        //</p> */}

        {/* <div className="blobs-container available mt-4">
          <div className='blob yellow'></div>
          <div className="text-sm text-gray-500">Building</div>
        </div> */}
      </div>
    </div>
  );
}
