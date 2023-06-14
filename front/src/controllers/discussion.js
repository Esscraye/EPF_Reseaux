import ControllerPage from './page';
import ViewDiscu from '../views/discussion';

const Discu = class Discu {
  constructor() {
    this.el = document.body;
    this.data = {
      soloBar: {
        name: 'Mathieu :',
        icone: 'https://tse4.mm.bing.net/th?id=OIP.AENl1AC1hSURPNEUwarSawHaHa&pid=Api&P=0&h=180'
      },
      groupBar: {
        name: 'Groupe de promo :',
        icone: 'https://tse3.mm.bing.net/th?id=OIP.-xJE4WTayjrJUhukEsN1VwHaHa&pid=Api&P=0&h=180'
      },
      conversations: [{
        participants: ['victor.marchand@epfedu.fr', 'maxence.juery@epfedu.fr'],
        type: 'individual',
        name: 'Victor Marchand',
        icone: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        censure: false,
        convId: '21',
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
        icone: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        censure: false,
        convId: '12',
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

    elButton.addEventListener('click', (e) => {
      const elInput = document.querySelector('.send-message-bar input');
      const messageText = elInput.value;

      e.preventDefault();

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
        const conversation = this.data.conversations.find((conv) => (conv.convId === '21'));
        if (conversation) {
          conversation.messages.push(message);
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
