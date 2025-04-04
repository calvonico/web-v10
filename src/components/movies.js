import poster2 from '../img/films/intensamente2.jpg'
import poster3 from '../img/films/pikachu.jpg'
import poster1 from '../img/films/sustancia.jpg'


import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/animations/shift-toward.css';
import 'tippy.js/themes/light-border.css';

export default function Movies() {

  function MovieIcon(props) {
    return (
        <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path    
          d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
      </svg>
    );
  }



      // fetch('https://www.reddit.com/top/.json?limit=3')
      // .then(response => response.json())
      // .then(data => {
      //   const postsData = data.data.children;
      //   const postListDiv = document.getElementById('postlist');
      //   const postTemplate = postsData.map(post => {
      //     return `<div class="toppost">
      //         <div class="postimage"><img src="${post.data.thumbnail}" width="200px"></div>
      //         <div class="posttitle">${post.data.title}</div>
      //         <div class="postauthor">por: ${post.data.author}</div>
      //         <div class="postcomment">${post.data.num_comments}</div>
      //       </div>
      //     `
      //   });
      //   postListDiv.innerHTML = postTemplate;
      // })

  return (
    <div>
      <h2 className="flex justify-center text-base font-semibold text-zinc-900 dark:text-zinc-100">
        <MovieIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Last films I've watched</span>
      </h2>
      <div className="mt-6">
        <div className="carrusel-posters">
          <a href="https://letterboxd.com/calvonico/films/diary/" target='_blank' rel='noopener noreferrer'>
          <div className="posters poster-1 shadow-xl z-10">
              <Tippy content="The Substance &ndash; ★★★1/2" theme={'light-border'} arrow={false} animation={'shift-toward'}>
                <img src={poster1} alt="movie" />
              </Tippy>
            </div>
            <div className="posters poster-2 shadow-2xl -rotate-5">
              <Tippy content="Inside Out 2 &ndash; ★★★★" theme={'light-border'} arrow={false} animation={'shift-toward'} >
                <img src={poster2} alt="movie" />
              </Tippy>
            </div>
            <div className="posters poster-3 shadow-2xl rotate-4">
              <Tippy content="Pokemon Detective Pikachu &ndash; ★★★★" theme={'light-border'} arrow={false} animation={'shift-toward'} >
                <img src={poster3} alt="movie" />
              </Tippy>              
            </div>
          </a>
        </div>
      </div>
      <h5 className="flex pt-2 justify-center text-xs font-normal text-zinc-900 dark:text-zinc-100">Movies last update: March 2025</h5>
    </div>
    
  );
}
