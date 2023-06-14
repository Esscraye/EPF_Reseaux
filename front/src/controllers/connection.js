import { isEmail } from 'validator';
import ViewConnection from '../views/connection';

const Connection = class Connection {
  constructor(content) {
    this.el = document.body;
    this.content = content;
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
    this.el.innerHTML = ViewConnection(this.content);
    this.onClickConnection();
  }
};

export default Connection;
