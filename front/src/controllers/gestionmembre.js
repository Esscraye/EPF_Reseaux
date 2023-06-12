import ViewHome from '../views/gestionmembre';

const Home = class Home {
  constructor() {
    this.el = document.body;
    this.run();
  }

  run() {
    this.el.innerHTML = ViewHome();
  }
};
export default Home;
