import ViewPage from '../views/page';

const Page = class Page {
  constructor(content) {
    this.el = document.body;
    this.content = content;

    this.run();
  }

  run() {
    this.el.innerHTML = ViewPage(this.content);
  }
};

export default Page;
