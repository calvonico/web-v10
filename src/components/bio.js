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
          I'm a entrepeneur, designer and developer passionate about building things that help people. Born and raised in Buenos Aires, Argentina, now based in beautiful Oporto, Portugal.
        </p>
        <p className="mt-3">
        For the last 12 years my work has consisted of marketing design: building creative assets for email, social media, websites, and more. I have also developed several websites, UI for mobile applications, and have mentored and led teams of designers.
        </p>
        <p className="mt-3">
        I like to travel and explore new cities; and I love watching movies, football and video games.
        </p>
        <div className="blobs-container available mt-4">
          <div className='blob green'></div>
          <div className="text-sm text-gray-500">Available for freelance work</div>
        </div>
      </div>
    </div>
  );
}
