import CaseStudy from "../components/CaseStudy";
import hero from "../img/work/donapp-500x500.png";

// TODO: replace placeholder copy and add real process images once available.
export default function NgoDonationApp() {
  return (
    <CaseStudy
      title="NGO Donation App - DonApp"
      subtitle="UX/UI design of an app for donation"
      hero={hero}
      overview="Add an overview of this project here."
      role="Product Designer"
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
