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
          I'm a entrepeneur, designer, and frontend developer. Born and raised
          in Buenos Aires, Argentina, now based in beautiful Oporto, Portugal.
        </p>
        <p className="mt-1">
        I like to travel and explore new cities; and I love watching movies, 'fútbol' and video games.
        </p>
      </div>
    </div>
  );
}
