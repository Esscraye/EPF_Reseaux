import ViewPage from '../views/page';
import ViewDiscu from '../views/discussion';
import messD from '../views/discussion/message_droite';

let conversationId = localStorage.getItem('conversationId') || '2';
let val = localStorage.getItem('val') || 1;

const Page = class Page {
  constructor(content) {
    this.el = document.body;
    this.content = content;
    this.idChat = localStorage.getItem('conversationId') || '2';
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
    this.discu = ViewDiscu(this.data, this.idChat);
    this.run();
  }

  onClickSearch() {
    const elButton = document.querySelector('.send-message-bar button');
    const elInput = document.querySelector('.send-message-bar input');
    const elChoices = document.querySelectorAll('.discu-choice');
    const elButtonSearch = document.querySelector('.nav-search button');

    elButtonSearch.addEventListener('click', (e) => {
      e.preventDefault();

      const elInputSearch = document.querySelector('.nav-search input');

      if (elInputSearch.value) {
        elInputSearch.value = '';
      }
    });

    elChoices.forEach((elChoice) => {
      elChoice.addEventListener('click', () => {
        // Vérification si l'élément existe
        if (elChoice) {
          // Accès à la valeur de l'attribut id
          const valeurId = elChoice.id;
          console.log(valeurId);
          conversationId = valeurId;
          localStorage.setItem('conversationId', conversationId);
          location.reload();
        } else {
          console.log("L'élément avec cet ID n'existe pas.");
        }
      });
    });

    elButton.addEventListener('click', (e) => {
      e.preventDefault();

      const messageText = elInput.value;

      if (messageText) {
        const now = new Date();
        const message = {
          text: messageText,
          times: `${now.getHours()}h${now.getMinutes()}`,
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        };

        elInput.value = '';

        const conversation = this.data.conversations.find((conv) => conv.convId === conversationId);
        if (conversation) {
          conversation.messages.push(message);

          const conversationElement = document.getElementById(`${conversationId}`);
          const messageCountElement = conversationElement.querySelector('[data-message-count]');
          if (messageCountElement) {
            const currentMessageCount = parseInt(messageCountElement.textContent, 10);
            const updatedMessageCount = currentMessageCount + 1;
            messageCountElement.textContent = updatedMessageCount;
          }

          const messagesContainer = document.querySelector('.messages');
          messagesContainer.innerHTML += messD(message);
        }
      }
    });

    elInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();

        const messageText = elInput.value;

        if (messageText) {
          const now = new Date();
          const message = {
            text: messageText,
            times: `${now.getHours()}h${now.getMinutes()}`,
            author: {
              firstName: 'Maxence',
              lastName: 'Juery',
              email: 'maxence.juery@epfedu.fr'
            }
          };

          elInput.value = '';

          const conversation = this.data.conversations
            .find((conv) => conv.convId === conversationId);
          if (conversation) {
            conversation.messages.push(message);

            const conversationElement = document.getElementById(`${conversationId}`);
            const messageCountElement = conversationElement.querySelector('[data-message-count]');
            if (messageCountElement) {
              const currentMessageCount = parseInt(messageCountElement.textContent, 10);
              const updatedMessageCount = currentMessageCount + 1;
              messageCountElement.textContent = updatedMessageCount;
            }

            const messagesContainer = document.querySelector('.messages');
            messagesContainer.innerHTML += messD(message);
          }
        }
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
      val = 2;
      localStorage.setItem('val', val);
    });

    closeModal.addEventListener('click', () => {
      clasDialog.classList.remove('modal-add');
      modal.close();
      val = 1;
      localStorage.setItem('val', val);
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

  ResponsiveNav() {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navLinks = document.querySelector('.nav-links');

    menuHamburger.addEventListener('click', () => {
      if (navLinks.classList.contains('mobile-menu')) {
        navLinks.classList.remove('mobile-menu');
      } else {
        navLinks.classList.add('mobile-menu');
      }
    });
  }

  keppOpenNav() {
    const dial = document.querySelector('#modal');
    // eslint-disable-next-line eqeqeq
    if (localStorage.getItem('val') == 2) {
      dial.classList.add('modal-add');
      dial.showModal();
    }
  }

  run() {
    this.el.innerHTML = ViewPage(this.content, this.discu);
    // conversationId = localStorage.getItem('conversationId') || '1';
    // new ControllerPage(ViewDiscu(this.data), conversationId);
    this.onClickSearch();
    this.OpenChat();
    this.ResponsiveNav();
    this.keppOpenNav();
  }
};

export default Page;
