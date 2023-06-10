import ViewAssoSuperAdmin from '../views/asso_super_admin';

const AssoSuperAdmin = class AssoSuperAdmin {
  constructor() {
    this.el = document.body;

    this.run();
  }

  run() {
    this.el.innerHTML = ViewAssoSuperAdmin();
  }
};

export default AssoSuperAdmin;
