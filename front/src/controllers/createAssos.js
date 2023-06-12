import ControllerPage from './page';
import ViewHome from '../views/creaassos';

const Home = class Home {
  constructor() {
    this.run();
  }

  run() {
    new ControllerPage(ViewHome());
  }
};

export default Home;
router.add('createAssos', () => {
  new ControllerPage(ViewHome());
});
