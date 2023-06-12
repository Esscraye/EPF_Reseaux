import ViewPage from '../views/page';

const Page = class Page {
  constructor(content) {
    this.el = document.body;
    this.content = content;

    this.run();
  }

  onClickSearch() {
    const elButton = document.querySelector('.nav-search button');

    elButton.addEventListener('click', (e) => {
      e.preventDefault();

      const elInput = document.querySelector('.nav-search input');

      if (elInput.value) {
        console.log(elInput.value);

        elInput.value = '';
      }
    });
  }

  run() {
    this.el.innerHTML = ViewPage(this.content);
    this.onClickSearch();
  }
};

export default Page;
