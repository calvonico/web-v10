import CaseStudy from "../components/CaseStudy";

// TODO: add hero image and process images once available.
export default function Wally() {
  return (
    <CaseStudy
      title="Wally"
      subtitle="Digital wallet and international payments app"
      overview="Wally is a digital wallet and international payments app that lets people send and use dollars from any country."
      role="UX/UI Designer"
      responsibilities="UI design - UX research - Design systems"
      sections={[
        {
          heading: "The Objective",
          paragraphs: [
            "The goal was to design the UI for a new business line, ensuring consistency with the app's existing ecosystem. I developed new flows, visual components, behaviors and interaction rules, and carried out in-depth analysis of how users relate to the app. This process allowed us not only to build the new elements, but also to improve the overall UX, optimizing navigation and experience across every module.",
          ],
        },
        {
          heading: "Going the extra mile",
          paragraphs: [
            "We extended the original scope of the project: designing new flows and screens, along with creating components, interactions and unprecedented behaviors, drove a quality leap across the app's entire ecosystem. These additions raised the visual and functional coherence of the product, generating a real upgrade in the user experience and a noticeable increase in the perceived value of the new business line.",
          ],
        },
      ]}
    />
  );
}
