import { motion } from "framer-motion";
import hero from '../img/work/TG/teengo_hero.png'
import grafico1 from '../img/work/TG/grafico-1.png'
import grafico2 from '../img/work/TG/grafico-2.png'
import empathy from '../img/work/TG/empathy.png'
import userpersona from '../img/work/TG/user-persona.png'
import benchmark from '../img/work/TG/benchmark.png'
import arquitectura from '../img/work/TG/arquitectura.png'
import sistema from '../img/work/TG/sistema.png'
import ui from '../img/work/TG/ui.png'

export default function walletApp() {
  return (
    <>
    {/* boton home */}
      <div className="flex items-center absolute top-4 left-4 text-gray-500 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <a href="/">
          <p className="ms-1 dark:text-white">Home</p>
        </a>
      </div>
      {/* fin boton home  */}
      <div className="css2">
        <div className="columnas-contenido">
          <div className="cuadro-bio dark:bg-slate-950">
            <div className=" px-6 py-12 lg:px-8">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: [0.6, -0.05, 0.01, 0.99],
                }}
                exit={{ opacity: 0 }}
              >
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-white">
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Wallet App - TeenGo
                  </h1>
                  <p className="mt-6 text-xl leading-8 text-slate-400">
                  Digital wallet, community and financial education geared towards teenagers
                  </p>
                  <figure className="mt-12">
                    <img
                      className="aspect-video rounded-xl bg-gray-50 object-cover shadow-2xl"
                      src={hero}
                      alt=""
                    />
                  </figure>

                  <div className="mt-16 max-w-full">
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-sm leading-5 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div>
                          <dt className="font-semibold text-gray-900">Overview</dt>
                          <dd className="mt-1 text-gray-600">With the purpose of building the financial well-being of the new generations in Latin America, we created a solution to turn our children into financial specialists.</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-gray-900">Role</dt>
                          <dd className="mt-1 text-gray-600">Product Designer</dd>
                          <dt className="font-semibold mt-5 text-gray-900">Responsibilities</dt>
                          <dd className="mt-1 text-gray-600">User research - Design - Prototyping</dd>
                        </div>
                    </dl>
                  </div>

                  <div className="relative bg-gray-100 overflow-hidden flex-auto h-0.5 w-full mt-14"></div>

                  <div className="mt-14 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      The Objective
                    </h2>
                    <p className="mt-6">
                    Incorporate new features and fixes previously identified. <br />
                    Design a new UX for teens and implement UI improvements. <br />
                    To work on UX for teens we need to research and understand the pain and context in depth.
                    </p>
                  </div>

                  <div className="mt-14 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Knowing our users
                    </h2>
                    <p className="mt-6">
                    With the intention of improving the UX, we started by understanding the money management of 11-17 year olds, their main pains in financial issues, the link with their peers when using money, their knowledge of concepts such as virtual wallets, saving and investing. We also presented the main screens of the application to get their opinions and feedback on certain elements, layout, design and interpretation of the functionalities.
                    </p>
                    <p className="mt-6">
                    With this objective in mind, we created a survey of 32 questions: 4 to capture demographic information, 18 regarding the relationship with money, and 10 focused on the application. Some of the questions were closed-ended, some were open-ended, and some were to rank concepts from most to least relevant, for example.
                    </p>
                  </div>
                  <figure className="mt-12">
                    <img
                      className="aspect-auto rounded-xl bg-gray-50 object-cover "
                      src={grafico1}
                      alt="age and genre"
                    />
                  </figure>
                  <div className="mt-14 max-w-2xl">
                    <p>
                    To address the understanding of respondents' relationship with money, we began by asking them in what ways they receive money in their daily lives.
                    </p>
                  </div>
                  <figure className="mt-12">
                    <img
                      className="aspect-auto rounded-xl bg-gray-50 object-cover "
                      src={grafico2}
                      alt="query"
                    />
                  </figure>
                  <figure className="mt-12">
                    <img
                      className="aspect-auto rounded-xl bg-gray-50 object-cover "
                      src={empathy}
                      alt="empathy map"
                    />
                  </figure>

                  <div className="mt-14 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      Some Conclusions
                    </h2>
                    <p className="mt-6">
                    After the analysis performed, we can deduce that the age range targeted by Teengo is highly dependent on their parents in terms of money management. We note this as a positive finding, as it tends to indicate to us that the spending control that their parents could do through the application would not be an impediment to use.
                    </p>
                    <p className="mt-6">
                    In relation to the means of payment used, we identified that cash continues to be the protagonist among the youngest children, with 59% of the sample indicating it as the preferred means of payment. This opens the door for us, given that in many cases this is due to the fact that there is no accessible digital payment alternative for them. We identified that the use of debit cards not only depends on age, but is also associated with the fact of living in big cities or close to them. Something similar happens with QR payments.
                    </p>
                    <p className="mt-6">
                    Two-thirds of the respondents indicate that their income is on demand. In relation to expenses, they are higher than $1000 per week across the entire spectrum of the sample, evidencing an increase in spending in teenagers aged 14 and older, marked by the increase in social events and autonomy. Such consumption is mainly oriented towards social events with friends, food consumption in educational institutions and the purchase of clothing.
                    </p>
                    <p className="mt-6">On the other hand, we found that the concept of savings is widespread among most young people, highlighting that more than 70% have savings, and 86% are willing to learn how to invest.</p>
                  </div>

                  <figure className="mt-12">
                    <img
                      className="aspect-auto rounded-xl bg-gray-50 object-cover "
                      src={userpersona}
                      alt="User persona"
                    />
                  </figure>
                  <figure className="mt-12">
                    <img
                      className="aspect-auto rounded-xl bg-gray-50 object-cover "
                      src={benchmark}
                      alt="embenchmark"
                    />
                  </figure>
                  <figure className="mt-12">
                    <img
                      className="aspect-auto rounded-xl bg-gray-50 object-cover "
                      src={arquitectura}
                      alt="Information Architecture"
                    />
                  </figure>
                  <figure className="mt-12">
                    <img
                      className="aspect-auto rounded-xl bg-gray-50 object-cover "
                      src={sistema}
                      alt="Design System"
                    />
                  </figure>

                  <div className="mt-14 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      What's in each section
                    </h2>
                    <p className="mt-6">
                    In Discover section you will be able to access all the educational video content, save your progress and win medals. The benefits section has exclusive discounts in gastronomy and fashion, and in the games section you can play some awesome games.
                    </p>
                    <p className="mt-6">
                    In the wallet section, you will access the summary of all your expenses for the month, you will see who gave you money, where you spent it and you will be able to generate savings to buy things or to go on vacation.
                    </p>
                    <p className="mt-6">
                    In your profile you will have control of the app: you can change your nickname, your photo, your password, see your progress and your awards and learn more about financial education. If you are a tutor you can manage all the other teens, change your payment methods and more.
                    </p>                    
                  </div>
                  <div className="mt-14 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      The final look
                    </h2>
                    <p className="mt-6">
                    Our high-fidelity mockups showcase the app's visual elements, designed for an intuitive user experience.
                    </p>                  
                  </div>

                  <figure className="mt-12">
                    <img
                      className="aspect-auto rounded-xl bg-gray-50 object-cover "
                      src={ui}
                      alt="The final look"
                    />
                  </figure>

                  <div className="mt-14 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      Conclusion
                    </h2>
                    <p className="mt-6">
                    TeenGo is not just a financial app. It's not just a virtual wallet. TeenGo is a meeting place for teenagers and young adults who want to control their money, manage their finances, know what they spend, how to save, learn about crypto and chat with their friends.
With this redesign we raised the application to modern standards, studied the preferences of our target audience and achieved an intuitive interface, familiar and fun at the same time.
                    </p>                  
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
