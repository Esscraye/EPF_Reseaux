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
        elInput.value = '';
      }
    });
  }

  styleNav() {
    document.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  run() {
    this.el.innerHTML = ViewPage(this.content);
    this.onClickSearch();
    this.styleNav();
  }
};

export default Page;
