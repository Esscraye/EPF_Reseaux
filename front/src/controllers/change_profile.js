// import validator from 'validator';

import ControllerPage from './page';
import ViewChangeProfile from '../views/change_profile';

const ChangeProfile = class ChangeProfile {
  constructor() {
    this.run();
  }

  onHandleClick() {
    const elButton = document.querySelector('.submit');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
      const AcutalPassword = document.querySelector('.AcutalPassword');
      const NewPassword = document.querySelector('.NewPassword');
      const ConfirmNewMdp = document.querySelector('.ConfirmNewMdp');
      const Description = document.querySelector('.Description');
      console.log({
        pwd: AcutalPassword.value,
        newpwd: NewPassword.value,
        confpwd: ConfirmNewMdp.value,
        descr: Description.value
      });
    });
  }

  run() {
    new ControllerPage(ViewChangeProfile());
    this.onHandleClick();
  }
};

export default ChangeProfile;
