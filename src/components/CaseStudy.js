import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Reusable template for a project case-study page (see pages/walletApp.js for
// a fully filled-out example). `sections` is an ordered list of content
// blocks: { heading, paragraphs: string[], images: { src, alt }[] }.
export default function CaseStudy({
  title,
  subtitle,
  hero,
  overview,
  role,
  responsibilities,
  sections = [],
  backTo = "/work",
  backLabel = "Work",
}) {
  return (
    <>
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
        <Link to={backTo}>
          <p className="ms-1 dark:text-white">{backLabel}</p>
        </Link>
      </div>

      <div className="css2">
        <div className="columnas-contenido">
          <div className="cuadro-bio dark:bg-slate-950">
            <div className="px-6 py-12 lg:px-8">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
                exit={{ opacity: 0 }}
              >
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-white">
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    {title}
                  </h1>
                  {subtitle && (
                    <p className="mt-6 text-xl leading-8 text-slate-400">
                      {subtitle}
                    </p>
                  )}

                  {hero && (
                    <figure className="mt-12">
                      <img
                        className="w-full rounded-xl bg-gray-50 shadow-2xl"
                        src={hero}
                        alt={title}
                      />
                    </figure>
                  )}

                  {(overview || role) && (
                    <div className="mt-16 max-w-full">
                      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-sm leading-5 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {overview && (
                          <div>
                            <dt className="font-semibold text-gray-900 dark:text-white">
                              Overview
                            </dt>
                            <dd className="mt-1 text-gray-600 dark:text-white">
                              {overview}
                            </dd>
                          </div>
                        )}
                        {role && (
                          <div>
                            <dt className="font-semibold text-gray-900 dark:text-white">
                              Role
                            </dt>
                            <dd className="mt-1 text-gray-600 dark:text-white">
                              {role}
                            </dd>
                            {responsibilities && (
                              <>
                                <dt className="font-semibold mt-5 text-gray-90 dark:text-white">
                                  Responsibilities
                                </dt>
                                <dd className="mt-1 text-gray-600 dark:text-white">
                                  {responsibilities}
                                </dd>
                              </>
                            )}
                          </div>
                        )}
                      </dl>
                    </div>
                  )}

                  {(overview || role) && sections.length > 0 && (
                    <div className="relative bg-gray-100 overflow-hidden flex-auto h-0.5 w-full mt-14"></div>
                  )}

                  {sections.map((section, i) => (
                    <div key={i}>
                      {(section.heading || section.paragraphs?.length > 0) && (
                        <div className="mt-14 max-w-2xl">
                          {section.heading && (
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {section.heading}
                            </h2>
                          )}
                          {(section.paragraphs || []).map((p, j) => (
                            <p key={j} className="mt-6">
                              {p}
                            </p>
                          ))}
                        </div>
                      )}
                      {(section.images || []).map((img, j) => (
                        <figure key={j} className="mt-12">
                          <img
                            className="aspect-auto rounded-xl bg-gray-50 object-cover"
                            src={img.src}
                            alt={img.alt || ""}
                            loading="lazy"
                            decoding="async"
                          />
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
