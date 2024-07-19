import { Icon } from "@iconify/react";

export default function SocialMedia() {
  function GloveIcon(props) {
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
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
      </svg>
    );
  }

  return (
    <div>
      <h2 className="flex justify-center text-base font-semibold text-zinc-900 dark:text-zinc-100">
        <GloveIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">My social networks</span>
      </h2>
      <div className="iconos mt-8">
        <a href="mailto:nico@nicocalvo.com" target={"_blank"} rel={"noreferrer"}>
          <Icon className="redes" icon="bi:envelope" color="var(--redsocial-email)" height="24" />
        </a>
        {/* <a href="https://linkedin.com/in/nicolascalvo" target={"_blank"} rel={"noreferrer"}>
          <Icon className="redes" icon="bi:linkedin" color="var(--redsocial-linkedin)" height="24" />
        </a> */}
        {/* <a href="https://behance.net/calvonico" target={"_blank"} rel={"noreferrer"} >
          <Icon className="redes" icon="bi:behance" color="var(--redsocial-behance)" height="28" />
        </a> */}
        <a href="https://instagram.com/calvonico" target={'_blank'} rel={'noreferrer'} ><Icon className="redes" icon="bi:instagram" color='var(--redsocial-instagram)' height="24" /></a>
        <a href="https://dribbble.com/calvonico" target={'_blank'} rel={'noreferrer'} >
          <Icon icon="bi:dribbble" className="redes" height="24" color="var(--redsocial-dribbble)" />
        </a>
        {/* <a href="https://twitter.com/calvonico" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:twitter" color='var(--redsocial-twitter)' height="28" /></a> */}
        <a href="https://github.com/calvonico" target={'_blank'} rel={'noreferrer'}><Icon icon="bi:github" className="redes" height="24" color="var(--redsocial-github)" /></a>
        {/* <a href="https://twitch.tv/calvonico" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:twitch" color='var(--redsocial-twitch)' height="24" /></a> */}
      </div>
    </div>
  );
}