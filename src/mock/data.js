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
  subtitle: 'The Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'My name is Cristian Spinelli, graduated as Technologist in Management Process, an enthusiastic individual and Certified Web Developer. Experienced working with front-end javascript ES6 React, GraphQL, back-end Node and Express, SQL database PostgresQL.',
  paragraphTwo:
    'Self-taught developer, read Documentation and debugging to solve code problems was an important part of the process! I love to build apps from scratch with React, Node Express, from development to production, connecting front-end to the back-end and the database. ',
  paragraphThree:
    'If your company has a need to use Junior developer to help Senior developers, I can be a good fit.',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'weather.png',
    title: 'Weather App',
    info:
      'This is a new weather app I built. Had build another one recently, and with this one was an improvement, on the coding by myself and on the styling. Used WeatherAPI.com API to have access to all information I needed. Among millions of choices to have the design influenced, I did based on Google.',
    info2:
      'You can change location by click the + LOCATION button and typing another city, anywhere in the world.',
    url: 'https://cvspinelli09.github.io/spinelli-my-weather/',
    repo: 'https://github.com/cvspinelli09/spinelli-my-weather',
  },
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
    img: 'buy-tickets.png',
    title: 'Buy-Tickets CSS Section',
    info:
      'Built in React only to display styling features for this LNER Railway Co., tickets purchase piece of section. Used SASS and construction techniques where I find more appropriate',
    info2: 'There is no interaction here, only practice of styling techniques',
    url: 'https://cvspinelli09.github.io/buy-tickets-component/',
    repo: 'https://github.com/cvspinelli09/buy-tickets-component/',
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
