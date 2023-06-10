import ViewAssoFondateurEtresponsable from '../views/admin-modifier-user';

const AssoFondateurEtResponsable = class AssoFondateurEtResponsable {
  constructor() {
    this.el = document.body;

    this.run();
  }

  run() {
    this.el.innerHTML = ViewAssoFondateurEtresponsable();
  }
};

export default AssoFondateurEtResponsable;
