import CaseStudy from "../components/CaseStudy";

// TODO: add hero image and process images once available.
export default function Ingram() {
  return (
    <CaseStudy
      title="Ingram"
      subtitle="Digital and communication assets for the world's largest tech distributor"
      overview="Ingram Micro is the largest technology wholesale distributor in the world."
      role="Graphic Designer"
      responsibilities="Web & landing page design - Email marketing - Digital advertising"
      sections={[
        {
          heading: "The Scope",
          paragraphs: [
            "I worked alongside Ingram on the end-to-end development of their digital and communication assets, supporting their marketing initiatives with creative solutions tailored to each channel and audience.",
            "The scope of work included designing and developing websites and landing pages focused on conversion, with an emphasis on user experience and brand consistency. I also built email marketing pieces for large-scale campaigns, taking care of both visual design and content structure to maximize engagement.",
            "On the graphic side, we developed banners and pieces for digital advertising and social media, adapting formats to different distribution environments — from display ads to organic content — always under a creative line consistent with Ingram's identity.",
          ],
        },
      ]}
    />
  );
}
