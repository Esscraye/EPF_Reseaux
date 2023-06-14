import { isEmail } from 'validator';
import ControllerPage from './page';
import ViewAdminAddUser from '../views/admin-add-user';

const AdminAddUser = class AdminAddUser {
  constructor() {
    this.el = document.body;

    this.run();
  }

  onClickAjouter() {
    const elButton = document.querySelector('#ajouter');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();

      const elInputLastname = document.querySelector('.lastname');
      const elInputFirstname = document.querySelector('.firstname');
      const elInputEmail = document.querySelector('.email');
      const elInputDescription = document.querySelector('.description');
      const elInputPromo = document.querySelector('.promo');
      const elInputClass = document.querySelector('.class');
      const elInputGrouptp = document.querySelector('.grouptp');
      if (elInputEmail.value && isEmail(elInputEmail.value) && elInputLastname.value && elInputFirstname && 
      elInputDescription && elInputPromo && elInputClass && elInputGrouptp) {
        console.log({
          lastname: elInputLastname.value,
          firstname: elInputFirstname.value,
          email: elInputEmail.value,
          description: elInputDescription.value,
          promoTemp: elInputPromo.options[elInputPromo.selectedIndex].value,
          promo: elInputPromo.options[elInputPromo.selectedIndex].text,
          classTemp: elInputClass.options[elInputClass.selectedIndex].value,
          class: elInputClass.options[elInputClass.selectedIndex].text,
          groupetpTemp: elInputGrouptp.options[elInputGrouptp.selectedIndex].value,
          groupetp: elInputGrouptp.options[elInputGrouptp.selectedIndex].text

        });
      } else {
        console.log('Problem');
      }
    });
  }

  run() {
    new ControllerPage(ViewAdminAddUser());
    this.onClickAjouter();
  }
};

export default AdminAddUser;
