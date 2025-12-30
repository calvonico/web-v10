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
          I'm a solopreneur, designer and developer passionate about building things that help people.</p>
        <p className='mt-3'>
          Buenos Aires ✈️ Porto ✈️ Barcelona
        </p>
        {/*<p className="mt-3">
          For the last 14 years my work has consisted of marketing design: building creative assets for email, social media, websites, and more.
        </p>
        //<p className="mt-3">
          //Lately I've been working as a Creative Lead, coordinating a group of designers focusing on achieving their best version to create unique and quality images and illustrations for our clients.
        //</p> */}
        <p className="mt-3">
          I like to travel and explore new cities; and love watching movies, Formula 1, football and video games.
        </p>
        {/* <div className="blobs-container available mt-4">
          <div className='blob yellow'></div>
          <div className="text-sm text-gray-500">Building</div>
        </div> */}
      </div>
    </div>
  );
}
