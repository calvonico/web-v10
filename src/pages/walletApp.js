import CaseStudy from "../components/CaseStudy";
import hero from "../img/work/TG/teengo_hero.png";
import grafico1 from "../img/work/TG/grafico-1.png";
import grafico2 from "../img/work/TG/grafico-2.png";
import empathy from "../img/work/TG/empathy.png";
import userpersona from "../img/work/TG/user-persona.png";
import benchmark from "../img/work/TG/benchmark.png";
import arquitectura from "../img/work/TG/arquitectura.png";
import sistema from "../img/work/TG/sistema.png";
import ui from "../img/work/TG/ui.png";

export default function WalletApp() {
  return (
    <CaseStudy
      title="Wallet App - TeenGo"
      subtitle="Digital wallet, community and financial education geared towards teenagers"
      hero={hero}
      overview="With the purpose of building the financial well-being of the new generations in Latin America, we created a solution to turn our children into financial specialists."
      role="Product Designer"
      responsibilities="User research - Design - Prototyping"
      sections={[
        {
          heading: "The Objective",
          paragraphs: [
            "Incorporate new features and fixes previously identified. Design a new UX for teens and implement UI improvements. To work on UX for teens we need to research and understand the pain and context in depth.",
          ],
        },
        {
          heading: "Knowing our users",
          paragraphs: [
            "With the intention of improving the UX, we started by understanding the money management of 11-17 year olds, their main pains in financial issues, the link with their peers when using money, their knowledge of concepts such as virtual wallets, saving and investing. We also presented the main screens of the application to get their opinions and feedback on certain elements, layout, design and interpretation of the functionalities.",
            "With this objective in mind, we created a survey of 32 questions: 4 to capture demographic information, 18 regarding the relationship with money, and 10 focused on the application. Some of the questions were closed-ended, some were open-ended, and some were to rank concepts from most to least relevant, for example.",
          ],
          images: [{ src: grafico1, alt: "age and genre" }],
        },
        {
          heading: "",
          paragraphs: [
            "To address the understanding of respondents' relationship with money, we began by asking them in what ways they receive money in their daily lives.",
          ],
          images: [
            { src: grafico2, alt: "query" },
            { src: empathy, alt: "empathy map" },
          ],
        },
        {
          heading: "Some Conclusions",
          paragraphs: [
            "After the analysis performed, we can deduce that the age range targeted by Teengo is highly dependent on their parents in terms of money management. We note this as a positive finding, as it tends to indicate to us that the spending control that their parents could do through the application would not be an impediment to use.",
            "In relation to the means of payment used, we identified that cash continues to be the protagonist among the youngest children, with 59% of the sample indicating it as the preferred means of payment. This opens the door for us, given that in many cases this is due to the fact that there is no accessible digital payment alternative for them. We identified that the use of debit cards not only depends on age, but is also associated with the fact of living in big cities or close to them. Something similar happens with QR payments.",
            "Two-thirds of the respondents indicate that their income is on demand. In relation to expenses, they are higher than $1000 per week across the entire spectrum of the sample, evidencing an increase in spending in teenagers aged 14 and older, marked by the increase in social events and autonomy. Such consumption is mainly oriented towards social events with friends, food consumption in educational institutions and the purchase of clothing.",
            "On the other hand, we found that the concept of savings is widespread among most young people, highlighting that more than 70% have savings, and 86% are willing to learn how to invest.",
          ],
          images: [
            { src: userpersona, alt: "User persona" },
            { src: benchmark, alt: "benchmark" },
            { src: arquitectura, alt: "Information Architecture" },
            { src: sistema, alt: "Design System" },
          ],
        },
        {
          heading: "What's in each section",
          paragraphs: [
            "In Discover section you will be able to access all the educational video content, save your progress and win medals. The benefits section has exclusive discounts in gastronomy and fashion, and in the games section you can play some awesome games.",
            "In the wallet section, you will access the summary of all your expenses for the month, you will see who gave you money, where you spent it and you will be able to generate savings to buy things or to go on vacation.",
            "In your profile you will have control of the app: you can change your nickname, your photo, your password, see your progress and your awards and learn more about financial education. If you are a tutor you can manage all the other teens, change your payment methods and more.",
          ],
        },
        {
          heading: "The final look",
          paragraphs: [
            "Our high-fidelity mockups showcase the app's visual elements, designed for an intuitive user experience.",
          ],
          images: [{ src: ui, alt: "The final look" }],
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "TeenGo is not just a financial app. It's not just a virtual wallet. TeenGo is a meeting place for teenagers and young adults who want to control their money, manage their finances, know what they spend, how to save, learn about crypto and chat with their friends. With this redesign we raised the application to modern standards, studied the preferences of our target audience and achieved an intuitive interface, familiar and fun at the same time.",
          ],
        },
      ]}
    />
  );
}
