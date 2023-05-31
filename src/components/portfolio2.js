import imgTeengo from '../img/work/teengo-600x380.jpg'
import imgDonation from '../img/work/donapp-600x380.jpg'
import imgVenmo from '../img/work/venmo-600x380.jpg'
import imgApple from '../img/work/apple-600x380.jpg'
import imgDespegar from '../img/work/despegar-600x380.jpg'


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


  const posts = [
    {
      id: 1,
      title: 'Wallet App',
      href: 'https://www.behance.net/gallery/156573117/Wallet-App-UIUX-Redesign',
      description: 'UX/UI redesign of a digital wallet',
      imageUrl: imgTeengo,
      category: { title: 'UX/UI', },
    },
    {
      id: 2,
      title: 'NGO Donation App',
      href: 'https://www.behance.net/gallery/122906011/DonApp-UXUI-Design',
      description: 'UX/UI design of an app for donation',
      imageUrl: imgDonation,
      category: { title: 'UX/UI', },
    },
    {
      id: 3,
      title: 'Venmo',
      href: 'https://www.behance.net/gallery/143438131/Venmo-Graphic-UI-Design',
      description: 'Design of graphic and email mkt assets',
      imageUrl: imgVenmo,
      category: { title: 'Marketing', },
    },
    {
      id: 4,
      title: 'Ingram Apple',
      href: '#',
      description: 'Development of Ingram Apple websites',
      imageUrl: imgApple,
      category: { title: 'FrontEnd' },
    },
    {
      id: 5,
      title: 'Despegar',
      href: 'https://www.behance.net/gallery/96941755/Despegar-APP-web',
      description: 'UX/UI redesign of a digital wallet',
      imageUrl: imgDespegar,
      category: { title: 'Marketing' },
    },
  ]

  return (
    <>
    <div>
      <h2 className="flex justify-center text-base font-semibold text-zinc-900 dark:text-zinc-100">
        <BrushIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Some of my work</span>
      </h2>

    </div>
    <div >
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">

          <div className="mt-6 space-y-10 lg:mt-8 lg:space-y-6">
            {posts.map((post) => (
              <article key={post.id} className="relative isolate flex flex-col gap-6 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:w-28 lg:shrink-0">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-2 text-xs">
                    <span
                      // href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:bg-slate-700 dark:hover:bg-slate-800">
                      {post.category.title}
                    </span>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-zinc-100 group-hover:text-teal-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-zinc-400">{post.description}</p>
                  </div>
                  
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
