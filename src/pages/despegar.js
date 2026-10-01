import CaseStudy from "../components/CaseStudy";
import hero from "../img/work/despegar/cover.png";
import homeBanners from "../img/work/despegar/1. portada.webp";
import pushLandings from "../img/work/despegar/2.webp";
import packagesAndFlights from "../img/work/despegar/3.webp";
import cyberweek from "../img/work/despegar/4.webp";

export default function Despegar() {
  return (
    <CaseStudy
      title="Despegar"
      subtitle="Promotional marketing creatives for the website and app"
      hero={hero}
      overview="Promotional marketing creatives for the website and app. Home banners and mobile landing pages."
      role="Graphic Designer"
      responsibilities="Home banners - Mobile landing pages"
      sections={[
        {
          images: [
            {
              src: homeBanners,
              alt: "Marketing banners for the main home page of the website in LATAM",
            },
            {
              src: pushLandings,
              alt: "Promotional push landing pages in the official app: Black Days, Black Friday and Siente Colombia",
            },
            {
              src: packagesAndFlights,
              alt: "Home banners and mobile landing pages for package, flight and Cyber Monday promotions",
            },
            {
              src: cyberweek,
              alt: "Cyberweek banners and mobile landing pages",
            },
          ],
        },
      ]}
    />
  );
}
