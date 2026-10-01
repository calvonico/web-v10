import CaseStudy from "../components/CaseStudy";
import hero from "../img/work/despegar-500x500.png";

// TODO: replace placeholder copy and add real process images once available.
export default function Despegar() {
  return (
    <CaseStudy
      title="Despegar"
      subtitle="Marketing graphic assets"
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
