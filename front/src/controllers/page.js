import ViewPage from '../views/page';
import ViewDiscu from '../views/discussion';

const Page = class Page {
  constructor(content) {
    this.el = document.body;
    this.content = content;
    this.data = {
      conversations: [{
        participants: ['victor.marchand@epfedu.fr', 'maxence.juery@epfedu.fr'],
        type: 'individual',
        name: 'Victor Marchand',
        icone: 'https://tse4.mm.bing.net/th?id=OIP.AENl1AC1hSURPNEUwarSawHaHa&pid=Api&P=0&h=180',
        censure: false,
        convId: '1',
        messages: [{
          text: 'Hello !',
          times: '13h52',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          text: 'Comment va ?',
          times: '13h54',
          author: {
            firstName: 'Victor',
            lastName: 'Marchand',
            email: 'victor.marchand@epfedu.fr'
          }
        },
        {
          text: '???',
          times: '13h55',
          author: {
            firstName: 'Victor',
            lastName: 'Marchand',
            email: 'victor.marchand@epfedu.fr'
          }
        },
        {
          text: 'Oui',
          times: '13h57',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          text: 'Oui',
          times: '13h57',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          text: 'Oui',
          times: '13h57',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          text: 'Oui',
          times: '13h57',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        }
        ]
      }, {
        participants: ['victor.marchand@epfedu.fr', 'maxence.juery@epfedu.fr', 'leo.leboss@epfedu.fr'],
        type: 'group',
        name: 'Projet intranet',
        icone: 'https://tse3.mm.bing.net/th?id=OIP.-xJE4WTayjrJUhukEsN1VwHaHa&pid=Api&P=0&h=180',
        censure: false,
        convId: '2',
        messages: [{
          text: 'Hello',
          times: '13h52',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          text: 'Comment va ?',
          times: '13h54',
          author: {
            firstName: 'Victor',
            lastName: 'Marchand',
            email: 'victor.marchand@epfedu.fr'
          }
        },
        {
          text: '???',
          times: '13h55',
          author: {
            firstName: 'Leo',
            lastName: 'Le Boss',
            email: 'victor.marchand@epfedu.fr'
          }
        },
        {
          text: 'Oui',
          times: '13h57',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        }
        ]
      }]

    };
    this.discu = ViewDiscu(this.data);
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

  OpenChat() {
    const modal = document.querySelector('#modal');
    const openModal = document.querySelector('.open-button');
    const clasDialog = document.getElementById('modal');
    const closeModal = document.querySelector('.btn-close');

    openModal.addEventListener('click', () => {
      clasDialog.classList.add('modal-add');
      modal.showModal();
    });

    closeModal.addEventListener('click', () => {
      clasDialog.classList.remove('modal-add');
      modal.close();
    });

    closeModal.addEventListener('click', () => {
      modal.setAttribute('closing', '');
      modal.addEventListener('animationend', () => {
        modal.removeAttribute('closing');
        clasDialog.classList.remove('modal-add');
        modal.close();
      }, { once: true });
    });
  }

  run() {
    this.el.innerHTML = ViewPage(this.content, this.discu);
    this.onClickSearch();
    this.styleNav();
    this.OpenChat();
  }
};

export default Page;
