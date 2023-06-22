import axios from 'axios';
import cookie from 'js-cookie';
import ViewPage from '../views/page';
import ViewDiscu from '../views/discussion';
import messD from '../views/discussion/message_droite';
import config from '../../config';

let conversationId = localStorage.getItem('conversationId') || '1';
let val = localStorage.getItem('val') || 1;
let headerSelect = localStorage.getItem('head') || 1;
const censure = [];

const token = cookie.get('token');
let mailUserConnected = 'maxence.juery@epfedu.fr';
if (token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
  mailUserConnected = JSON.parse(jsonPayload).email;
}

const Page = class Page {
  constructor(content) {
    this.el = document.body;
    this.content = content;
    this.idChat = localStorage.getItem('conversationId') || '1';
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
      }, {
        participants: ['alban.lauby@epfedu.fr', 'maxence.juery@epfedu.fr'],
        type: 'individual',
        name: 'Alban Lauby',
        icone: 'https://tse4.mm.bing.net/th?id=OIP.AENl1AC1hSURPNEUwarSawHaHa&pid=Api&P=0&h=180',
        censure: false,
        convId: '3',
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
            firstName: 'Alban',
            lastName: 'Lauby',
            email: 'alban.lauby@epfedu.fr'
          }
        },
        {
          text: '???',
          times: '13h55',
          author: {
            firstName: 'Alban',
            lastName: 'Lauby',
            email: 'alban.lauby@epfedu.fr'
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
      }]
    };
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
        const emailsearch = elInputSearch.value;
        axios.get(`${config.IP_API}/user/${encodeURIComponent(emailsearch)}`)
          .then((response) => {
            console.log(response);
            // this.data.infoPerso = response.data;
            window.location.replace(`${config.IP_FRONT}/profil?email=${emailsearch}`);
          })
          .catch((error) => {
            console.log(error);
          });
        elInputSearch.value = ' ';
      } else {
        console.log('Veuillez réessayer !');
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
          idconv: conversationId,
          author: {
            firstName: mailUserConnected.split('.')[0],
            lastName: mailUserConnected.split('.')[1],
            email: mailUserConnected
          }
        };

        elInput.value = '';

        const conversation = this.data.conversations.find((conv) => conv.convId === conversationId);
        if (conversation) {
          axios.post(`${config.IP_API}/message`, message).then();
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

    const conversation = this.data.conversations.find((conv) => conv.convId === conversationId);

    if (conversation.type === 'individual') {
      const elBlock = conversation.type === 'individual' ? document.querySelector('.bloquer button') : null;
      console.log(elBlock);
      elBlock.addEventListener('click', () => {
        const { id } = conversation;
        axios.put(`${config.IP_API}/conversation/${id}`, { censure: true })
          .then(() => {
            localStorage.setItem('conversationId', '2');
            location.reload();
          });
      });
    }
  }

  OpenChat() {
    const modal = document.querySelector('#modal');
    const openModal = document.querySelector('.open-button');
    const clasDialog = document.getElementById('modal');
    const closeModal = document.querySelector('.close-btn');

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

  slectedPage() {
    const Accueil = document.querySelector('#ACC');
    const Profile = document.querySelector('#PRO');
    const Asso = document.querySelector('#ASS');
    const Admin = document.querySelector('#ADM');

    Accueil.addEventListener('click', () => {
      headerSelect = 1;
      localStorage.setItem('head', headerSelect);
    });
    Profile.addEventListener('click', () => {
      headerSelect = 2;
      localStorage.setItem('head', headerSelect);
    });
    Asso.addEventListener('click', () => {
      headerSelect = 3;
      localStorage.setItem('head', headerSelect);
    });
    Admin.addEventListener('click', () => {
      headerSelect = 4;
      localStorage.setItem('head', headerSelect);
    });
    // eslint-disable-next-line eqeqeq
    if (localStorage.getItem('head') == 1) {
      Accueil.classList.add('slected');
    }
    // eslint-disable-next-line eqeqeq
    if (localStorage.getItem('head') == 2) {
      Profile.classList.add('slected');
    }
    // eslint-disable-next-line eqeqeq
    if (localStorage.getItem('head') == 3) {
      Asso.classList.add('slected');
    }
    // eslint-disable-next-line eqeqeq
    if (localStorage.getItem('head') == 4) {
      Admin.classList.add('slected');
    }
  }

  slectedPagefooter() {
    const Accueil = document.querySelector('#ACC2');
    const Profile = document.querySelector('#PRO2');
    const Asso = document.querySelector('#ASS2');
    const Admin = document.querySelector('#ADM2');

    Accueil.addEventListener('click', () => {
      headerSelect = 1;
      localStorage.setItem('head', headerSelect);
    });
    Profile.addEventListener('click', () => {
      headerSelect = 2;
      localStorage.setItem('head', headerSelect);
    });
    Asso.addEventListener('click', () => {
      headerSelect = 3;
      localStorage.setItem('head', headerSelect);
    });
    Admin.addEventListener('click', () => {
      headerSelect = 4;
      localStorage.setItem('head', headerSelect);
    });
  }

  async getConversations() {
    const convs = await fetch(`${config.IP_API}/conversation/`);
    const conversations = await convs.json();
    const mess = await fetch(`${config.IP_API}/message/`);
    const messages = await mess.json();
    this.data.conversations = conversations;
    this.data.messages = messages;
  }

  async run() {
    await this.getConversations();
    this.discu = ViewDiscu(this.data, this.idChat, censure);
    this.el.innerHTML = ViewPage(this.content, this.discu);
    // conversationId = localStorage.getItem('conversationId') || '1';
    // new ControllerPage(ViewDiscu(this.data), conversationId);
    this.onClickSearch();
    this.OpenChat();
    this.ResponsiveNav();
    this.keppOpenNav();
    this.slectedPage();
    this.slectedPagefooter();
  }
};

export default Page;
