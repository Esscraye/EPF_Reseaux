import { isEmail } from 'validator';
import ControllerPage from './page';
import ViewAdminAddUser from '../views/admin-add-user';

const AdminAddUser = class AdminAddUser {
  constructor() {
    this.el = document.body;

    this.run();
  }

  onClickAjouter() {
    const elInput = document.querySelector('email');
    const elBtn = document.querySelector('ajouter');

    elBtn.addEventListener('click', () => {
      if (elInput.value && isEmail(elInput.value)) {
        // console.log({
        // email: elInput.value
        // });
        elInput.value = '';
      } else {
        // alert('Problem');
      }
    });
  }

  run() {
    new ControllerPage(ViewAdminAddUser());
    this.onClickAjouter();
  }
};

export default AdminAddUser;
