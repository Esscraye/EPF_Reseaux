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
      }],
      soloBar: {
        name: 'Mathieu :',
        icone: 'https://tse4.mm.bing.net/th?id=OIP.AENl1AC1hSURPNEUwarSawHaHa&pid=Api&P=0&h=180'
      },
      messages: [{
        id: '12',
        text: 'Hello',
        times: `${now.getHours()}h${now.getMinutes()}`,
        author: {
          firstName: 'Maxence',
          lastName: 'Juery'
        }
      },
      {
        id: '11',
        text: 'This is an answer',
        times: `${now.getHours()}h${now.getMinutes()}`,
        author: {
          firstName: 'Victor',
          lastName: 'Marchand'
        }
      }
      ]

    };

    this.run();
  }

  onClickSearch() {
    const elButton = document.querySelector('.send-message-bar button');
    const elInput = document.querySelector('.send-message-bar input');

    elButton.addEventListener('click', (e) => {
      const message = {
        id: '1',
        text: elInput.value,
        times: `${now.getHours()}h${now.getMinutes()}`,
        author: {
          firstName: 'Maxence',
          lastName: 'Juery'
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
