import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Cristian Spinelli | Full Stack Developer',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Cristian Spinelli,',
  subtitle: 'The New Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'My name is Cristian Spinelli, graduated in Technological Management Processes, enthusiastic Certified Junior Full Stack Web Developer. I have experience working with front-end javascript ES6 React, GraphQL, back-end Node and Express, SQL database PostgresQL.',
  paragraphTwo:
    'Self-taught developer, read Documentation and debugging to solve code problems is an important part of the process! I love to build apps from scratch with React, Node Express, from development to production, connecting front-end to the back-end and the database. ',
  paragraphThree:
    'If your company has a need to use Junior developers to help Senior developers, I can be a good fit.',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'demographr.png',
    title: 'DemographR',
    info:
      'Using Clarifai API to identify demographics information from an image url, you can have information displayed as gender, age and multicultural appearances.  ',
    info2:
      'This is very much usefull for companies that wish to deliver a personalized experience for their customers.',
    url: 'https://cvspinelli09.github.io/demographics/',
    repo: 'https://github.com/cvspinelli09/demographics',
  },
  {
    id: uuidv1(),
    img: 'classic-car.png',
    title: 'Classic-Car-Guide',
    info:
      'Web App I build and transform it to Progressive Web App. I used Google Firebase to work as database manager, so you can use your Google account to log in or create a new user, in either ways, data will get stored in Firebase',
    info2: 'That was a great opportunity to practice React Router Dom, Switch and Route.',
    url: 'https://cvspinelli09.github.io/classic-car/',
    repo: 'https://github.com/cvspinelli09/classic-car',
  },
  {
    id: uuidv1(),
    img: 'ecom-clothing.png',
    title: 'Ecom-Clothing',
    info:
      'Ecommerce built using React and React-Redux to manage state and props. Firebase to manage users data and login.',
    info2:
      'Used Redux Persist so the cart items do not refresh when user log out and log in again. Used Stripe API for test payments placed in backend for safety reasons and mock payments.',
    url: 'https://crwn-09-live.herokuapp.com/',
    repo: 'https://github.com/cvspinelli09/ecom-clothing',
  },
  {
    id: uuidv1(),
    img: 'robofriends.png',
    title: 'Robofriends',
    info:
      'Progressive Web App built using fetch API to distribute random images to specific agents',
    info2:
      'Built in React, using Redux to manage states and props, and created sinergy between search field with displayed Cards by fetching API.',
    url: 'https://cvspinelli09.github.io/robofriends2/',
    repo: 'https://github.com/cvspinelli09/robofriends2/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'cvillaverde09@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/cristian-spinelli-villaverde/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/cvspinelli09',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
