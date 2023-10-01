import { motion } from "framer-motion";

import { CheckCircleIcon } from "@heroicons/react/20/solid";

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
                  <p className="text-base font-semibold leading-7 text-teal-600">
                    Introducing
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    JavaScript for Beginners
                  </h1>
                  <p className="mt-6 text-xl leading-8">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                    sem. At arcu, sit dui mi, nibh dui, diam eget aliquam.
                    Quisque id at vitae feugiat egestas ac. Diam nulla orci at
                    in viverra scelerisque eget. Eleifend egestas fringilla
                    sapien.
                  </p>
                  <figure className="mt-12">
                    <img
                      className="aspect-video rounded-xl bg-gray-50 object-cover shadow-2xl"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                      alt=""
                    />
                  </figure>
                  <div className="mt-10 max-w-2xl">
                    <p>
                      Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                      eget risus enim. Mattis mauris semper sed amet vitae sed
                      turpis id. Id dolor praesent donec est. Odio penatibus
                      risus viverra tellus varius sit neque erat velit. Faucibus
                      commodo massa rhoncus, volutpat. Dignissim sed eget risus
                      enim. Mattis mauris semper sed amet vitae sed turpis id.
                    </p>
                    <ul
                      role="list"
                      className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-gray-400"
                    >
                      <li className="flex gap-x-3">
                        <CheckCircleIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900 dark:text-white">
                            Data types.
                          </strong>{" "}
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <CheckCircleIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Loops.
                          </strong>{" "}
                          Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                          irure qui lorem cupidatat commodo.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <CheckCircleIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Events.
                          </strong>{" "}
                          Ac tincidunt sapien vehicula erat auctor pellentesque
                          rhoncus. Et magna sit morbi lobortis.
                        </span>
                      </li>
                    </ul>
                    <p className="mt-8">
                      Et vitae blandit facilisi magna lacus commodo. Vitae
                      sapien duis odio id et. Id blandit molestie auctor
                      fermentum dignissim. Lacus diam tincidunt ac cursus in
                      vel. Mauris varius vulputate et ultrices hac adipiscing
                      egestas. Iaculis convallis ac tempor et ut. Ac lorem vel
                      integer orci.
                    </p>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                      From beginner to expert in 3 hours
                    </h2>
                    <p className="mt-6">
                      Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                      consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                      euismod vitae interdum mauris enim, consequat vulputate
                      nibh. Maecenas pellentesque id sed tellus mauris, ultrices
                      mauris. Tincidunt enim cursus ridiculus mi. Pellentesque
                      nam sed nullam sed diam turpis ipsum eu a sed convallis
                      diam.
                    </p>
                  </div>

                  <div className="mt-16 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      Everything you need to get up and running
                    </h2>
                    <p className="mt-6">
                      Purus morbi dignissim senectus mattis adipiscing. Amet,
                      massa quam varius orci dapibus volutpat cras. In amet eu
                      ridiculus leo sodales cursus tristique. Tincidunt sed
                      tempus ut viverra ridiculus non molestie. Gravida quis
                      fringilla amet eget dui tempor dignissim. Facilisis auctor
                      venenatis varius nunc, congue erat ac. Cras fermentum
                      convallis quam.
                    </p>
                    <p className="mt-8">
                      Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                      eget risus enim. Mattis mauris semper sed amet vitae sed
                      turpis id. Id dolor praesent donec est. Odio penatibus
                      risus viverra tellus varius sit neque erat velit.
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
