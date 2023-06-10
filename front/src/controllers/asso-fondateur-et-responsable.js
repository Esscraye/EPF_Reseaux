import ViewAssoFondateurEtresponsable from '../views/asso_fondateur_et_responsable';

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
