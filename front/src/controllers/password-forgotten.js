import { isEmail } from 'validator';
import ViewPasswordForgot from '../views/password-forgotten';

const PasswordForgot = class PasswordForgot {
  constructor(content) {
    this.el = document.body;
    this.content = content;
    this.run();
  }

  onClickForgotPassword() {
    const elInput = document.querySelector('#forgot-password input');
    const elBtn = document.querySelector('#forgot-password button');

    elBtn.addEventListener('click', () => {
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
};

export default PasswordForgot;
