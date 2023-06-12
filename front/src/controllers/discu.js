import ControllerPage from './page';
import ViewDiscu from '../views/discu';

const now = new Date();

const Discu = class Discu {
  constructor() {
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
        notif: 6
      }],
      soloBar: {
        name: 'Mathieu :',
        icone: 'https://tse4.mm.bing.net/th?id=OIP.AENl1AC1hSURPNEUwarSawHaHa&pid=Api&P=0&h=180'
      },
      hour: {
        times: `${now.getHours()}h${now.getMinutes()}`
      },
      rightMess: {
        message: 'This is a message'
      },
      leftMess: {
        message: 'This is an answer'
      },
      sender: {
        name: 'My name'
      }
    };

    this.run();
  }

  run() {
    new ControllerPage(ViewDiscu(this.data));
  }
};

export default Discu;
