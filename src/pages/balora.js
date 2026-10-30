import CaseStudy from "../components/CaseStudy";
import hero from "../img/work/balora/balora-hero.png?as=webp&width=1600";
import today from "../img/work/balora/enmarcadas/01-hoy.png?as=webp&width=480";
import mealDetail from "../img/work/balora/enmarcadas/03-detalle.png?as=webp&width=480";
import mealReview from "../img/work/balora/enmarcadas/04-valoracion.png?as=webp&width=480";
import training from "../img/work/balora/enmarcadas/05-entreno.png?as=webp&width=480";
import workout from "../img/work/balora/enmarcadas/06-entreno-detalle.png?as=webp&width=480";
import share from "../img/work/balora/enmarcadas/10-compartir.png?as=webp&width=480";
import trends from "../img/work/balora/enmarcadas/07-tendencias.png?as=webp&width=480";
import charts from "../img/work/balora/enmarcadas/08-graficos.png?as=webp&width=480";
import weekly from "../img/work/balora/enmarcadas/09-resumen-semana.png?as=webp&width=480";

export default function Balora() {
  return (
    <CaseStudy
      title="Balora"
      subtitle="Food & training tracker for iPhone"
      hero={hero}
      overview="I couldn't find an app that connected two worlds: tracking what I eat and tracking my progress at the gym. So I built my own, gave it a personality and designed it for my needs first, pretty sure I'm not the only one who needs this. I designed the interface and I'm building it myself, and every idea gets tested on my own phone first."
      role="Designer & developer"
      responsibilities="Product - UI design - iOS development"
      sections={[
        {
          heading: "Food",
          paragraphs: [
            "Logging food is boring, so the app has to give you something back right away. Each day gets a score out of 100, and right under it, one thing to fix. Not ten warnings, just the next move: fiber is what would help you most right now, you're 21 g short.",
            "Every meal gets its own score too, plus a short AI review that says what's good about it and what's missing. Usually it's something small, like adding a piece of fruit.",
          ],
          screens: [
            { src: today, alt: "Today screen with the daily score and macros" },
            { src: mealDetail, alt: "Meal detail with calories, macros and score" },
            { src: mealReview, alt: "AI review and nutrition breakdown of a meal" },
          ],
          framed: true,
        },
        {
          heading: "Training",
          paragraphs: [
            "Most gym apps assume your phone is in your hand between sets, with timers and rest counters everywhere. Mine stays in the locker. So Balora is built for logging after the workout: each exercise shows what I lifted last time, so filling in the session takes a couple of minutes and I can see right away if I improved.",
            "Every time I beat a previous mark, Balora logs it as a record. The month fills up with dots for every day I trained, and at the end of the week the records turn into a card I can share. It's a small thing, but it makes it a lot harder to skip a Monday.",
          ],
          screens: [
            { src: training, alt: "Training screen with consistency calendar and workouts" },
            { src: workout, alt: "Workout detail with sets and reps" },
            { src: share, alt: "Weekly share card with personal records" },
          ],
          framed: true,
        },
        {
          heading: "Trends",
          paragraphs: [
            "This is where food and training meet. How far I am from my goal weight and, at this pace, when I'll get there. How the week went in calories and score.",
            "And instead of another chart, a summary that reads like a friend catching you up: you broke 10 records this week, including bench press.",
          ],
          screens: [
            { src: trends, alt: "Trends screen with weight goal progress" },
            { src: charts, alt: "Weekly calories and score charts" },
            { src: weekly, alt: "Weekly summary" },
          ],
          framed: true,
        },
        {
          heading: "What's next",
          paragraphs: [
            "Balora is in active development and the list keeps growing. Next up: a caffeine counter, monthly reviews, and a nutrition plan that adapts as I go.",
          ],
        },
      ]}
    />
  );
}
