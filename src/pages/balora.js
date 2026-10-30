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
      overview="Balora brings food, training and progress together in one iPhone app. Instead of counting every calorie, it gives each day a simple score and tells you the one thing that would improve it the most."
      role="Product Designer & Developer"
      responsibilities="Product design - UI design - iOS development"
      sections={[
        {
          heading: "Food",
          paragraphs: [
            "The day starts with a score out of 100 and a single, concrete tip, followed by calories and macros against your goal. Every meal gets its own score and an AI review that explains what's good about it and what would make it better.",
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
            "Workouts are logged set by set, with the last session as a reference so it's easy to know what to beat. Consistency is shown as a monthly calendar, personal records are highlighted as they happen, and each week can be shared as a card.",
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
            "Trends connect both sides: progress toward a weight goal, weekly calories and scores, and a written weekly summary that turns the numbers into a few plain sentences.",
          ],
          screens: [
            { src: trends, alt: "Trends screen with weight goal progress" },
            { src: charts, alt: "Weekly calories and score charts" },
            { src: weekly, alt: "Weekly summary" },
          ],
          framed: true,
        },
      ]}
    />
  );
}
