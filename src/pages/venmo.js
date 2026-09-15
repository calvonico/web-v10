import CaseStudy from "../components/CaseStudy";
import hero from "../img/work/venmo-500x500.png";

// TODO: replace placeholder copy and add real process images once available.
export default function Venmo() {
  return (
    <CaseStudy
      title="Venmo - PayPal"
      subtitle="Graphic and email marketing assets"
      hero={hero}
      overview="Add an overview of this project here."
      role="Graphic Designer"
      responsibilities="Add responsibilities here"
      sections={[
        {
          heading: "The Objective",
          paragraphs: ["Add project details here."],
        },
      ]}
    />
  );
}
