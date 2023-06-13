import View404 from '../views/404-page';

const Page404 = class Page404 {
  constructor() {
    this.el = document.body;

    this.run();
  }

  controlback() {
    const container = document.getElementById('container');
    window.onmousemove = function slide(e) {
      const x = -e.clientX / 5;
      const y = -e.clientY / 5;
      container.style.backgroundPositionX = `${x}px`;
      container.style.backgroundPositionY = `${y}px`;
    };
  }

  run() {
    this.el.innerHTML = View404();
    this.controlback();
  }
};

export default Page404;
