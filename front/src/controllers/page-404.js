import View404 from '../views/page_404';

const page404 = class pagem404 {
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

export default page404;
