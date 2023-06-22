import { isEmail } from 'validator';
import ViewPasswordForgot from '../views/password-forgotten';

const PasswordForgot = class PasswordForgot {
  constructor(content) {
    this.el = document.body;
    this.content = content;
    this.run();
  }

  onClickForgotPassword() {
    const elInput = document.querySelector('#exampleFormControlInput');
    const elBtn = document.querySelector('#btnmdp');

    elBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (elInput.value && isEmail(elInput.value)) {
        console.log({
          email: elInput.value
        });
        elInput.value = '';
      }
    });
  }

  run() {
    this.el.innerHTML = ViewPasswordForgot(this.content);
    this.onClickForgotPassword();
  }
}

export default PasswordForgot;
