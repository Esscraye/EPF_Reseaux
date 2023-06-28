import axios from 'axios';
import ViewPage from '../views/page';
import messD from '../views/discussion/message_droite';
import config from '../../config';

let conversationId = localStorage.getItem('conversationId') || '1';
let val = localStorage.getItem('val') || 1;
let headerSelect = localStorage.getItem('head') || 1;

const token = localStorage.getItem('token');
let UserId = '1';
if (token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
  UserId = JSON.parse(jsonPayload).sub;
}

const Page = class Page {
  constructor(content) {
    this.el = document.body;
    this.content = content;
    this.idChat = localStorage.getItem('conversationId') || '649ae40d37cf658836fdb6ee';
    this.data = {};
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
          .then(() => {
            // this.data.infoPerso = response.data;
            window.location.replace(`${config.IP_FRONT}/profil?email=${emailsearch}`);
          })
          .catch((error) => {
            throw new Error(error);
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
        const message = {
          content: messageText,
          fromDiscussion: conversationId,
          author: UserId
        };

        elInput.value = '';

        const conversation = this.data.conversations.find((conv) => conv.id === conversationId);
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
          const message = {
            content: messageText,
            fromDiscussion: conversationId,
            author: UserId
          };

          elInput.value = '';

          const conversation = this.data.conversations.find((cv) => cv.id === conversationId);
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
      }
    });

    const conversation = this.data.conversations.find((conv) => conv.id === conversationId);
    if (conversation && conversation.members.lenght === 2) {
      const elBlock = conversation.members.lenght === 2 ? document.querySelector('.bloquer button') : null;
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

    if (closeModal) {
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
    const convs = await fetch(`${config.IP_API}/conversation/`).then((res) => res.json());
    const conversations = await convs.filter((conv) => conv.members.includes(UserId));
    const idConvs = await conversations.map((conv) => conv.id);
    const messages = idConvs.map((conv) => fetch(`${config.IP_API}/message/${conv}`).then((res) => res.json()));
    const allMessages = await Promise.all(messages);
    this.data.conversations = conversations;
    this.data.messages = allMessages.flat();
  }

  async run() {
    await this.getConversations();
    console.log('userId', UserId);
    this.el.innerHTML = ViewPage(this.content, this.data, this.idChat, UserId);
    this.onClickSearch();
    this.OpenChat();
    this.ResponsiveNav();
    this.keppOpenNav();
    this.slectedPage();
    this.slectedPagefooter();
  }
};

export default Page;
