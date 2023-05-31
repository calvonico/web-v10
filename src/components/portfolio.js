import imgTeengo from "../img/work/teengo-600x380.jpg";
import imgDonation from "../img/work/donapp-600x380.jpg";
import imgVenmo from "../img/work/venmo-600x380.jpg";
import imgApple from "../img/work/apple-600x380.jpg";
import imgDespegar from "../img/work/despegar-600x380.jpg";
import imgApple2 from "../img/work/apple_11reasons.jpg";
import imgApple3 from "../img/work/Apple_work.jpg";
import imgApple4 from "../img/work/Apple_mac.jpg";
import imgApple5 from "../img/work/Apple_education.jpg";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Portfolio() {
  function BrushIcon(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
      </svg>
    );
  }

  const work = [
    {
      name: "Wallet App",
      description: "UX/UI redesign of a digital wallet",
      imageUrl: imgTeengo,
      url: (
        <a
          href="https://www.behance.net/gallery/156573117/Wallet-App-UIUX-Redesign"
          className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-teal-100 dark:bg-slate-700 dark:ring-slate-600 dark:text-zinc-100 dark:hover:bg-teal-700 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          View
        </a>
      ),
    },
    {
      name: "NGO Donation App",
      description: "UX/UI design of an app for donation",
      imageUrl: imgDonation,
      url: (
        <a
          href="https://www.behance.net/gallery/122906011/DonApp-UXUI-Design"
          className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-teal-100 dark:bg-slate-700 dark:ring-slate-600 dark:text-zinc-100 dark:hover:bg-teal-700 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          View
        </a>
      ) ,
    },
    {
      name: "Venmo",
      description: "Design of graphic and email mkt assets",
      imageUrl: imgVenmo,
      url: (
        <a
          href="https://www.behance.net/gallery/143438131/Venmo-Graphic-UI-Design"
          className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-teal-100 dark:bg-slate-700 dark:ring-slate-600 dark:text-zinc-100 dark:hover:bg-teal-700 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          View
        </a>
      ),
    },
    {
      name: "Ingram Apple",
      description: "Development of Ingram Apple websites",
      imageUrl: imgApple,
      boton: (
        <button
          className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-teal-100  dark:bg-slate-700 dark:ring-slate-600 dark:text-zinc-100 dark:hover:bg-teal-700 transition-colors"
          onClick={() => setIsOpen(true)}
        >
          view
        </button>
      ),
    },
    {
      name: "Despegar",
      description: "Design of marketing graphic assets",
      imageUrl: imgDespegar,
      url: (
        <a
          href="https://www.behance.net/gallery/96941755/Despegar-APP-web"
          className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-teal-100 dark:bg-slate-700 dark:ring-slate-600 dark:text-zinc-100 dark:hover:bg-teal-700 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          View
        </a>
      ),
    },
  ];

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ')
  // }

  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div>
        <h2 className="flex justify-center text-base font-semibold text-zinc-900 dark:text-zinc-100">
          <BrushIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Some of my work</span>
        </h2>

        <div>
          <div className="mt-6 flow-root">
            <ul
              role="list"
              className="-my-5 divide-y divide-gray-200 dark:divide-gray-600"
            >
              {work.map((portfolio) => (
                <li
                  key={portfolio.description}
                  className="items-center justify-between gap-x-6 py-4 "
                >
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src={portfolio.imageUrl}
                      alt=""
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {portfolio.name}
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-zinc-400">
                        {portfolio.description}
                      </p>
                    </div>
                    <div>
                      {portfolio.boton}
                      {portfolio.url}
                      
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-slate-900 shadow-xl">
                      <div className="px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 dark:text-zinc-100">
                            Ingram Apple websites
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md  text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="columns-1 lg:columns-2">
                        <div>
                          <div className="relative h-40 sm:h-56">
                            <img
                              className="absolute h-full w-full object-cover"
                              src={imgApple3}
                              alt="Ingram Apple"
                            />
                          </div>
                          <div className="relative mt-6 flex-1 px-4 sm:px-6">
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-zinc-100">
                                  Apple at Work
                                </h3>
                              </div>
                            </div>
                            <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                              <a
                                type="button"
                                href="https://latam.ingrammicro.com/apple_at_work"
                                target="_blank"
                                className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:flex-1"
                              >
                                Visit website
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <div className="relative h-40 sm:h-56">
                            <img
                              className="absolute h-full w-full object-cover"
                              src={imgApple2}
                              alt="Ingram Apple"
                            />
                          </div>
                          <div className="relative mt-6 flex-1 px-4 sm:px-6">
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-zinc-100">
                                  Apple 11 Reasons
                                </h3>
                              </div>
                            </div>
                            <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                              <a
                                type="button"
                                href="https://latam.ingrammicro.com/apple_colombia"
                                target="_blank"
                                className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:flex-1"
                              >
                                Visit website
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <div className="relative h-40 sm:h-56">
                            <img
                              className="absolute h-full w-full object-cover"
                              src={imgApple4}
                              alt="Ingram Apple"
                            />
                          </div>
                          <div className="relative mt-6 flex-1 px-4 sm:px-6">
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-zinc-100">
                                  Apple Mac
                                </h3>
                              </div>
                            </div>
                            <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                              <a
                                type="button"
                                href="https://partner-apac.ingrammicro.com/apple_mac"
                                target="_blank"
                                className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:flex-1"
                              >
                                Visit website
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="my-6">
                          <div className="relative h-40 sm:h-56">
                            <img
                              className="absolute h-full w-full object-cover"
                              src={imgApple5}
                              alt="Ingram Apple"
                            />
                          </div>
                          <div className="relative mt-6 flex-1 px-4 sm:px-6">
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-zinc-100">
                                  Apple Education
                                </h3>
                              </div>
                            </div>
                            <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                              <a
                                type="button"
                                href="https://latam.ingrammicro.com/apple_education"
                                target="_blank"
                                className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:flex-1"
                              >
                                Visit website
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
