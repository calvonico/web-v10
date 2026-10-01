import CaseStudy from "../components/CaseStudy";
import fullApp from "../img/work/donation-app/fullapp.png";

export default function NgoDonationApp() {
  return (
    <CaseStudy
      title="NGO Donation App - DonApp"
      subtitle="UX/UI design of an app for donation"
      overview="DonApp is an app that helps companies make it easy for their employees to donate to the NGOs of their choice."
      role="Product Designer"
      responsibilities="Research - Information architecture - Wireframes - UI design"
      sections={[
        {
          heading: "The project",
          paragraphs: [
            "The goal was to launch the first version of DonApp in four months, for iOS and Android. The app focuses exclusively on the person who donates, and the MVP would start with between 20 and 60 NGOs. Techo, Un árbol and El Campito were among the organizations we wanted to collaborate with.",
            "The idea is to delegate the responsibility of choosing how to donate to the people who make up the company: companies allocate a percentage of each employee's salary every month, and each employee chooses which NGO receives it, splitting it between several or giving it all to one.",
          ],
        },
        {
          heading: "From research to the final product",
          paragraphs: [
            "The process started with a set of key questions: what the product should achieve, which problem it solves, what makes it different, what return it generates, how it works and whether donating would be mandatory. The answers pointed to a simple and fast process, with few intermediaries and full control over where and how much is donated.",
            "We then defined three personas (Claudia, an HR lead committed to the environment; Sergio, a development manager concerned about poverty; and Lara, an intern who loves animals) and organized the app into three sections: Home, Donate and Account. A user flow mapped the path from choosing a category and an NGO to confirming the amount and reaching a thank-you screen.",
            "With the foundations in place, the visual language took shape around the Nunito typeface and a purple palette. Low-fidelity wireframes defined the key screens (home, categories, NGO detail, amount selection and confirmation) before moving on to a high-fidelity prototype with real content. The complete process is below.",
          ],
          images: [
            {
              src: fullApp,
              alt: "DonApp case study: project brief, key questions, personas, information architecture, user flow, colors and typography, wireframes and high-fidelity prototype",
            },
          ],
        },
      ]}
    />
  );
}
