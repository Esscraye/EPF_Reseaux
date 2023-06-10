import ViewPagemainassos from '../views/page_main_assos';

const pagemainassos = class pagemainassos {
  constructor() {
    this.el = document.body;

    this.run();
  }

  run() {
    this.el.innerHTML = ViewPagemainassos();
  }
};

export default pagemainassos;
