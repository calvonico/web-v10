import CaseStudy from "../components/CaseStudy";

// TODO: add hero image and process images once available.
export default function Cashi() {
  return (
    <CaseStudy
      title="Cashi"
      subtitle="Digital wallet and financial services platform by Walmart Mexico & Central America"
      overview="Cashi is the digital wallet and financial services platform developed by Walmart of Mexico and Central America."
      role="Graphic & UI Designer"
      responsibilities="Email marketing design - A/B testing - Visual system"
      sections={[
        {
          heading: "The Work",
          paragraphs: [
            "On the Cashi project, I was responsible for creating and remastering marketing emails, improving their visual impact and readability, and optimizing them for correct display across mobile devices and different email clients.",
            "I ran multiple proposals and A/B tests, respecting Cashi's brand identity to develop different variants. We incorporated clear iconography, hero imagery and a standardization of sizes and visual hierarchy, keeping a consistent tone in the communication with customers. As a result, we achieved a significant improvement in email delivery and performance metrics.",
          ],
        },
      ]}
    />
  );
}
