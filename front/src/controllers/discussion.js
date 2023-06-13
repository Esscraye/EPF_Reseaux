import ControllerPage from './page';
import ViewDiscu from '../views/discussion';

const Discu = class Discu {
  constructor() {
    this.el = document.body;
    this.data = {
      choicesG: [{
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 1,
        IdConv: '1'
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 16,
        IdConv: '1'
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 5,
        IdConv: '1'
      }],
      choicesP: [{
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 1,
        IdConv: '1'
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 0,
        IdConv: '1'
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 2,
        IdConv: '1'
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 8,
        IdConv: '1'
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 8
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 15
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 7
      }],
      soloBar: {
        name: 'Mathieu :',
        icone: 'https://tse4.mm.bing.net/th?id=OIP.AENl1AC1hSURPNEUwarSawHaHa&pid=Api&P=0&h=180'
      },
      groupBar: {
        name: 'Groupe de promo :',
        icone: 'https://tse3.mm.bing.net/th?id=OIP.-xJE4WTayjrJUhukEsN1VwHaHa&pid=Api&P=0&h=180'
      },
      conversations: [{
        convId: '21',
        messages: [{
          id: '11',
          text: 'Hello',
          times: '13h52',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          id: '12',
          text: 'Comment va ?',
          times: '13h54',
          author: {
            firstName: 'Victor',
            lastName: 'Marchand',
            email: 'victor.marchand@epfedu.fr'
          }
        },
        {
          id: '13',
          text: '???',
          times: '13h55',
          author: {
            firstName: 'Victor',
            lastName: 'Marchand',
            email: 'victor.marchand@epfedu.fr'
          }
        },
        {
          id: '14',
          text: 'Oui',
          times: '13h57',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          id: '14',
          text: 'Oui',
          times: '13h57',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          id: '14',
          text: 'Oui',
          times: '13h57',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          id: '14',
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
        convId: '12',
        messages: [{
          id: '11',
          text: 'Hello',
          times: '13h52',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          id: '12',
          text: 'Comment va ?',
          times: '13h54',
          author: {
            firstName: 'Victor',
            lastName: 'Marchand',
            email: 'victor.marchand@epfedu.fr'
          }
        },
        {
          id: '13',
          text: '???',
          times: '13h55',
          author: {
            firstName: 'Leo',
            lastName: 'Le Boss',
            email: 'victor.marchand@epfedu.fr'
          }
        },
        {
          id: '14',
          text: 'Oui',
          times: '13h57',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          id: '14',
          text: 'Oui',
          times: '13h57',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          id: '14',
          text: 'Oui',
          times: '13h57',
          author: {
            firstName: 'Maxence',
            lastName: 'Juery',
            email: 'maxence.juery@epfedu.fr'
          }
        },
        {
          id: '14',
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
          id: '1',
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
