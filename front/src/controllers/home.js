import ControllerPage from './page';
import ViewHome from '../views/home';

const Home = class Home {
  constructor() {
    this.data = {
      articles: [{
        assoc: {
          name: 'EPF BDE',
          logo: 'https://picsum.photos/240/300'
        },
        content: {
          title: 'Titre de l\'article',
          text: 'lorem ipsum',
          img: 'https://picsum.photos/207/300',
          link: '#',
          date: 'depuis 2 jours'
        }
      }, {
        assoc: {
          name: 'EPF BDE',
          logo: 'https://picsum.photos/240/300'
        },
        content: {
          title: 'Titre de l\'article',
          text: 'lorem ipsum',
          img: 'https://picsum.photos/207/300',
          link: '#',
          date: 'depuis 2 jours'
        }
      }, {
        assoc: {
          name: 'EPF BDE',
          logo: 'https://picsum.photos/240/300'
        },
        content: {
          title: 'Titre de l\'article',
          text: 'lorem ipsum',
          img: 'https://picsum.photos/207/300',
          link: '#',
          date: 'depuis 2 jours'
        }
      }]
    };

    this.run();
  }

  run() {
    new ControllerPage(ViewHome(this.data));
  }
};

export default Home;
