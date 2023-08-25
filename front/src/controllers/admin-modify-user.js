import { isEmail } from 'validator';
import ControllerPage from './page';
import ViewAdminModifyUser from '../views/admin-modify-user';

const AdminModifyUser = class AdminModifyUser {
  constructor() {
    this.el = document.body;

    this.run();
  }

  onClickModifier() {
    const elButton = document.querySelector('#modifier');
    // let emailprofile = localStorage.getItem('emailsearch') || 1;
    // mettre cet email pour modifier le profil
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
      const elInputLastname = document.querySelector('.lastname');
      const elInputFirstname = document.querySelector('.firstname');
      const elInputEmail = document.querySelector('.email');
      const elInputDescription = document.querySelector('.description');
      // const elInputPromo = document.querySelector('.promo');
      // const elInputClass = document.querySelector('.class');
      // const elInputGrouptp = document.querySelector('.grouptp');
      const body = {};
      if (elInputEmail.value && isEmail(elInputEmail.value)) {
        body.email = elInputEmail.value;
      }
      if (elInputLastname.value) {
        body.lastname = elInputLastname.value;
      }
      if (elInputFirstname.value) {
        body.firstname = elInputFirstname.value;
      }
      if (elInputDescription.value) {
        body.description = elInputDescription.value;
      }
      /* if (elInputPromo.value) {
        body.promo = elInputPromo.options[elInputPromo.selectedIndex].text;
      }
      if (elInputClass.value) {
        body.class = elInputClass.options[elInputClass.selectedIndex].text;
      }
      if (elInputGrouptp.value) {
        body.groupetp = elInputGrouptp.options[elInputGrouptp.selectedIndex].text;
      } */
      // localStorage.getItem('emailsearch'));
      /* else {
        console.log('Problem');
      } */
    });
  }

  run() {
    new ControllerPage(ViewAdminModifyUser());
    this.onClickModifier();
  }
};

export default AdminModifyUser;
