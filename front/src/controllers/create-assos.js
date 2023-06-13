import ControllerPage from './page';
import ViewCreateAssos from '../views/create-assos';

const Home = class Home {
  constructor() {
    this.run();
  }

  run() {
    new ControllerPage(ViewCreateAssos());
  }
};

export default Home;
