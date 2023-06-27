import { isEmail, isEmpty } from 'validator';
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
      // const Description = document.querySelector('.Description');
      if (isEmpty(AcutalPassword.value)) {
        alert('Veuillez saisir votre mot de passe.');
      }

      if (isEmpty(NewPassword.value)) {
        alert('Veuillez saisir votre nouveau mot de passe.');
      }

      if (isEmpty(ConfirmNewMdp.value)) {
        alert('Veuillez confirmer votre nouveau mot de passe.');
      }
      if (NewPassword.value !== ConfirmNewMdp.value) {
        alert('Les mots de passe ne correspondent pas.');
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
    setTimeout(() => {
      this.onHandleClick();
    }, 500);
  }
};

export default ChangeProfile;
