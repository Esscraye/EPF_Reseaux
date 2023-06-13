import { isEmail } from 'validator';

import ControllerPage from './page';
import ViewPasswordForgot from '../views/password-forgotten';

const PasswordForgot = class PasswordForgot {
  constructor() {
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
    new ControllerPage(ViewPasswordForgot());
    this.onClickForgotPassword();
  }
};

export default PasswordForgot;
