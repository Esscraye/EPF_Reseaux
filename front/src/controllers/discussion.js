import ControllerPage from './page';
import ViewDiscu from '../views/discussion';
import messD from '../views/discussion/message_droite';

const convParameter = require('../views/discussion/index');

console.log(convParameter);

const Discu = class Discu {
  constructor() {
    this.el = document.body;
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

    this.run();
  }

  onClickSearch() {
    const elButton = document.querySelector('.send-message-bar button');
    const elInput = document.querySelector('.send-message-bar input');

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

        const conversationId = '2'; // Remplacez '1' par l'ID de la conversation appropriée
        const conversation = this.data.conversations.find((conv) => conv.convId === conversationId);
        if (conversation) {
          conversation.messages.push(message);

          const conversationElement = document.querySelector(`.conv-${conversationId}`);
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

          const conversationId = convParameter;
          const conversation = this.data.conversations
            .find((conv) => conv.convId === conversationId);
          if (conversation) {
            conversation.messages.push(message);

            const conversationElement = document.querySelector(`.conv-${conversationId}`);
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

  run() {
    new ControllerPage(ViewDiscu(this.data));
    this.onClickSearch();
  }
};

export default Discu;
