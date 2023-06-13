import { isEmail } from 'validator';
import ControllerPage from './page';
import ViewConnection from '../views/connection';

const Connection = class Connection {
  constructor() {
    this.run();
  }

  onClickConnection() {
    const elBtn = document.querySelector('#connection button');

    elBtn.addEventListener('click', () => {
      const elInput1 = document.querySelector('#exampleFormControlInput1');
      const elInput2 = document.querySelector('#exampleFormControlInput2');

      if (elInput1.value && isEmail(elInput1.value) && elInput2.value) {
        console.log({
          email: elInput1.value,
          mdp: elInput2.value
        });
        elInput1.value = '';
        elInput2.value = '';
      }
    });
  }

  run() {
    new ControllerPage(ViewConnection());
    this.onClickConnection();
    console.log('hello');
  }
};

export default Connection;
