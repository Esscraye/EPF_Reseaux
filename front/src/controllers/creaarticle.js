import ViewHome from '../views/creaarticle';

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
