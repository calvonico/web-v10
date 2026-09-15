import CaseStudy from "../components/CaseStudy";

// TODO: add hero image and process images once available.
export default function GrupoAxo() {
  return (
    <CaseStudy
      title="Grupo Axo"
      subtitle="Retail and fashion brand distribution across Latin America"
      overview="Grupo Axo is a leader in retail and the distribution of fashion and lifestyle brands across Latin America."
      role="Graphic Designer"
      responsibilities="Social media content - Video - Email marketing - Ads"
      sections={[
        {
          heading: "The Challenge",
          paragraphs: [
            "The project demanded producing a large volume of assets every month throughout its entire run, making it a constant challenge. Despite dynamic briefs and tight turnaround times, we developed high-quality images and videos, maintaining a level of excellence in line with the global brands we were responsible for, many of them leaders and references in their industries.",
            "Throughout the project, hundreds of images and videos were created and used for social media posts, carousels, websites, email marketing pieces and ads.",
          ],
        },
      ]}
    />
  );
}
