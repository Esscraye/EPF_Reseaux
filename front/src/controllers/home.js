import ControllerPage from './page';
import ViewHome from '../views/home';

const Home = class Home {
  constructor() {
    this.el = document.body;

    this.run();
  }

  run() {
    new ControllerPage(ViewHome());
  }
};

export default Home;
