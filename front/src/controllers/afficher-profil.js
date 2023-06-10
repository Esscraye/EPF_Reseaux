import ViewAssoFondateurEtresponsable from '../views/afficher-profil';

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
