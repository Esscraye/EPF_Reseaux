import ControllerPage from './page';
import ViewAdminModifyUser from '../views/admin-modify-user';

const AdminModifyUser = class AdminModifyUser {
  constructor() {
    this.el = document.body;

    this.run();
  }

  run() {
    new ControllerPage(ViewAdminModifyUser());
  }
};

export default AdminModifyUser;
