import ViewAssoUtilisateur from '../views/asso_utilisateur';

const AssoUtilisateur = class AssoUtilisateur {
  constructor() {
    this.el = document.body;

    this.run();
  }

  run() {
    this.el.innerHTML = ViewAssoUtilisateur();
  }
};

export default AssoUtilisateur;
