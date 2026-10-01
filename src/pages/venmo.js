import CaseStudy from "../components/CaseStudy";
import hero from "../img/work/venmo/Presentacion.png";
import intro from "../img/work/venmo/1.webp";
import emailMarketing from "../img/work/venmo/2.webp";
import partnerships from "../img/work/venmo/3.webp";
import feedTiles from "../img/work/venmo/4.webp";
import socialMedia from "../img/work/venmo/5.webp";
import moreEmails from "../img/work/venmo/6.webp";

export default function Venmo() {
  return (
    <CaseStudy
      title="Venmo - PayPal"
      subtitle="Email, in-app and social media creatives for the Commerce area"
      hero={hero}
      overview="As a visual marketing designer for the Commerce area of the Venmo product, my task was to design and develop creatives for emails, in-app and social media."
      role="Visual Marketing Designer"
      responsibilities="Email - In-app - Social media"
      sections={[
        {
          images: [
            { src: intro, alt: "Venmo Commerce marketing team: introduction" },
            {
              src: emailMarketing,
              alt: "Email marketing: DoorDash promotional email on desktop and mobile",
            },
            {
              src: partnerships,
              alt: "Engaging designs and partnerships with major brands: Fanatics, Uber Eats and Uber promotions in app and email",
            },
            {
              src: feedTiles,
              alt: "App feed tiles promoting Venmo business profiles",
            },
            {
              src: socialMedia,
              alt: "Social media: stories and posts for giveaways and tax requirements",
            },
            {
              src: moreEmails,
              alt: "More emails: checkout, Uber and business profile campaigns",
            },
          ],
        },
      ]}
    />
  );
}
