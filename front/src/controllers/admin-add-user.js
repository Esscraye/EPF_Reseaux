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

      const elInputLastname = document.querySelector('#lastname');
      const elInputFirstname = document.querySelector('#firstname');
      const elInputEmail = document.querySelector('#email');
      const elInputDescription = document.querySelector('#description');
      const elInputPromo = document.querySelector('#promo');
      const elInputClass = document.querySelector('#class');
      const elInputGrouptp = document.querySelector('#grouptp');
      if (elInputEmail.value && isEmail(elInputEmail.value)) {
        console.log({
          lastname: elInputLastname.value,
          firstname: elInputFirstname.value,
          description: elInputDescription.value,
          promo: elInputPromo.value,
          class: elInputClass.value,
          groupetp: elInputGrouptp.value,
          email: elInputEmail.value
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
