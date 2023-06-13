import ControllerPage from './page';
import ViewDiscu from '../views/discussion';

const now = new Date();

const Discu = class Discu {
  constructor() {
    this.el = document.body;
    this.data = {
      choicesG: [{
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 1
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 16
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 5
      }],
      choicesP: [{
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 1
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 0
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 2
      }, {
        photo: 'https://tse1.mm.bing.net/th?id=OIP.EUZ-YXYEdyEPpxXyuV6_ZAHaHa&pid=Api&P=0&h=180',
        name: 'a list item',
        notif: 8
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

    };

    this.run();
  }

  onClickSearch() {
    const elButton = document.querySelector('.send-message-bar button');

    elButton.addEventListener('click', (e) => {
      const elInput = document.querySelector('.send-message-bar input');
      const message = {
        id: '1',
        text: elInput.value,
        times: `${now.getHours()}h${now.getMinutes()}`,
        author: {
          firstName: 'Maxence',
          lastName: 'Juery',
          email: 'maxence.juery@epfedu.fr'
        }
      };
      e.preventDefault();

      if (elInput.value) {
        elInput.value = '';
      }
      this.data.messages.push(message);
    });
  }

  run() {
    new ControllerPage(ViewDiscu(this.data));
    this.onClickSearch();
  }
};

export default Discu;
