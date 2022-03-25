import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'hammedtiamiyu', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'HAMMED TIAMIYU',
  subtitle: 'Front-End Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'passport.jpg',
  paragraphOne:
    'Hi, I am Hammed Tiamiyu and I am a web developer.  I live and work in Abuja, Nigeria. I spend most of my time experimenting  HTML, CSS and javascript (and many of its frameworks). I love coding and am a very open person to new work challenge(s)',
  paragraphTwo:
    'As a tech savy individual, am always exited about many technologies which man have built to make life easier. Web development, as a form modern technology, has greately changed and improved how we live and carry out our everyday activities. ',
  paragraphThree:
    'I hope to have my contributions in making the world a better place through technology',
  resume: 'https://drive.google.com/file/d/12MEOXmQGX1bAeBmHUhh-flE4tosTTy15/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pagination_screenshot.png',
    title: 'Github Users Front-end Pagination',
    info: 'In this project, with datas coming from github API some github users were rendered with front-end pagination',
    info2: 'The project was built with the knowledge of API data fetch, useEffect,useState, react Router, some Math logics',
    url: 'https://react-pagination-display.netlify.app/',
    repo: 'https://github.com/hammedTiamiyu/react-pagination', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cocktails_menu.png',
    title: 'Cocktails',
    info: 'In this (react-app) project, a third party API was used to fetch different cocktails datas. At initial loading of the app, just some few details are rendered - like display image, name, glass description - along with a  button ( for details). Then the detail button button route the app to the detail page and then fetch a particular drinks details such as the recipes and method of preparation ',
    info2: 'The project was built with the knowledge of API data fetch, useEffect,useState, react Router ',
    url: 'https://react-cocktails-menu.netlify.app/',
    repo: 'https://github.com/hammedTiamiyu/react-projects-cocktails-menu', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'amazhon-clone.png',
    title: 'Fake-Amazon-Clone',
    info: 'In this (react-app) project, a copy amazon website was built using tech react context API, reducer etc. And this web app includes many great features  like user authentication ( using google firebase ), carting, payment etc',
    info2: '',
    url: 'https://amazhon-clone-v1.web.app/',
    repo: 'https://github.com/hammedTiamiyu/amazon-clone-v1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react-menu.png',
    title: 'Menu',
    info: 'Another small yet beautiful react project that i practised. Many food items were displayed with some catchy image. There are few categories buttons which are dynamically added to filter the menu.',
    info2: '',
    url: 'https://react-menu-display.netlify.app/',
    repo: 'https://github.com/hammedTiamiyu/react-menu', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'grocery-bud.png',
    title: 'Grocey Bud',
    info: 'This is a simple grocery bud app built with react. It has i/o logic that allows one to create a list of some grocery items (stored in the browser local storage) which can then be editted or deleted. A simple project with CRUDE functionalities. ',
    info2: '',
    url: 'https://react-grocerybuds.netlify.app/',
    repo: 'https://github.com/hammedTiamiyu/react-grocerybud', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react-moviedb.png',
    title: 'Movie DB',
    info: 'Another exciting react project built the knowldege of data fetching with third party API, useEffect, react Context API, react Router, query string paramas ',
    info2: '',
    url: 'https://react-movie-database1.netlify.app/',
    repo: 'https://github.com/hammedTiamiyu/react-movieDB', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '2347065072820',
  btn: 'Email',
  email: 'hammedtiamiyu18@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/HammedTiamiyu4',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hammed-tiamiyu-92b02a203',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hammedTiamiyu/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
