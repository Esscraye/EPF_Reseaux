import ControllerPage from './page';
import ViewHome from '../views/mdp-oubli';

const Home = class Home {
  constructor() {
    this.run();
  }

  run() {
    new ControllerPage(ViewHome());
  }
};
export default Home;
