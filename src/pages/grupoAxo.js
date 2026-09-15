import CaseStudy from "../components/CaseStudy";

// TODO: add hero image, real copy and process images once available.
export default function GrupoAxo() {
  return (
    <CaseStudy
      title="Grupo Axo"
      subtitle="Add project subtitle here"
      overview="Add an overview of this project here."
      role="Add role here"
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
