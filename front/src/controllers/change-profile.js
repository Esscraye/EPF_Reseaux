import { isEmail, isEmpty } from 'validator';
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
        description: Description.value
      });
      if (!isEmpty(AcutalPassword.value)) {
        console.log({
          pwd: AcutalPassword.value
        });
      } else {
        alert('Veuillez saisir votre mot de passe.');
      }

      if (!isEmpty(NewPassword.value)) {
        console.log({
          new_pwd: NewPassword.value
        });
      } else {
        alert('Veuillez saisir votre nouveau mot de passe.');
      }

      if (!isEmpty(ConfirmNewMdp.value)) {
        console.log({
          confirm_new_pwd: ConfirmNewMdp.value
        });
      } else {
        alert('Veuillez confirmer votre nouveau mot de passe.');
      }
    });

    const elOtherButton = document.querySelector('.delete-profile');
    elOtherButton.addEventListener('click', (e) => {
      e.preventDefault();
      const ConfirmEmail = document.querySelector('.confirm-email');
      if (isEmail(ConfirmEmail.value)) {
        console.log({
          email: ConfirmEmail.value
        });
      } else {
        ConfirmEmail.value = null;
        alert('Veuillez rentrer une adresse mail valide.');
      }
    });
  }

  run() {
    new ControllerPage(ViewChangeProfile());
    this.onHandleClick();
  }
};

export default ChangeProfile;
