import ViewAssoFondateurEtresponsable from '../views/ajouter-groupe';

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
