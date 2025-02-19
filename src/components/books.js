import poster1 from '../img/books/redpurpura.jpg'


import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/animations/shift-toward.css';
import 'tippy.js/themes/light-border.css';

export default function Books() {

  function BookIcon(props) {
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
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
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
        <BookIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Book I'm reading</span>
      </h2>
      <div className="mt-6">
        <div className="carrusel-posters-books">
          <a href="https://oku.club/user/calvonico" target='_blank' rel='noopener noreferrer'>
            <div className="posters poster-1 shadow-xl z-10">
              <Tippy content="La Red Púrpura &ndash; Carmen Mola" theme={'light-border'} arrow={false} animation={'shift-toward'}>
                <img src={poster1} alt="book" />
              </Tippy>
            </div>
          </a>
        </div>
      </div>
      <h5 className="flex pt-2 justify-center text-xs font-normal text-zinc-900 dark:text-zinc-100">Last update: February 2025</h5>
    </div>
    
  );
}
