import CaseStudy from "../components/CaseStudy";
import hero from "../img/work/wally/hero.jpg";
import home from "../img/work/wally/home.jpg";
import services from "../img/work/wally/services.jpg";
import onboarding from "../img/work/wally/onboarding.jpg";
import summary from "../img/work/wally/summary.jpg";
import success from "../img/work/wally/success.jpg";
import dashboard from "../img/work/wally/dashboard.jpg";
import overdue from "../img/work/wally/overdue.jpg";

export default function Wally() {
  return (
    <CaseStudy
      title="Wally"
      subtitle="Digital wallet and international payments app"
      hero={hero}
      overview="Wally is a digital wallet and international payments app that lets people send and use dollars from any country. I designed its new credit line, offered inside the app by NFD S.A. The screens show the product as I designed it, before Wally's rebrand."
      role="UX/UI Designer"
      responsibilities="UI design - UX research - Design systems"
      sections={[
        {
          heading: "The Objective",
          paragraphs: [
            "The goal was to design the UI for a new business line, ensuring consistency with the app's existing ecosystem. I developed new flows, visual components, behaviors and interaction rules, and carried out in-depth analysis of how users relate to the app. This process allowed us not only to build the new elements, but also to improve the overall UX, optimizing navigation and experience across every module.",
          ],
          screens: [
            { src: home, alt: "Home with the credit line banner" },
            { src: services, alt: "Services menu with the loans entry point" },
          ],
          caption: "Two entry points: a banner on the home screen and a shortcut in the services menu.",
        },
        {
          heading: "Setting up the line",
          paragraphs: [
            "A short onboarding introduces the product, then the user configures the amount, the installments and the payment date, reviews a summary of the request and confirms it.",
          ],
          screens: [
            { src: onboarding, alt: "Credit line onboarding" },
            { src: summary, alt: "Request summary with email confirmation" },
            { src: success, alt: "Configuration applied" },
          ],
        },
        {
          heading: "Living with the line",
          paragraphs: [
            "Once active, the credit line has its own dashboard: next payment, available credit and payment history. We also designed the hard states, like having no available credit left or an overdue installment that blocks the balance until it's paid.",
          ],
          screens: [
            { src: dashboard, alt: "Credit line dashboard with no available credit" },
            { src: overdue, alt: "Credit line dashboard with an overdue installment" },
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
