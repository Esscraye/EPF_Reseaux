import ViewShowProfile from '../views/show-profile';
import ControllerPage from './page';

const ShowProfile = class ShowProfile {
  constructor() {
    this.el = document.body;
    this.data = {
      infoPerso: {
        picture: 'https://static.vecteezy.com/ti/vecteur-libre/t2/550980-utilisateur-icone-vecteur-gratuit-vectoriel.jpg',
        firstName: 'Augustin',
        lastName: 'Nadiedjoa',
        email: 'Email',
        description: 'Description',
        promo: 'Promo',
        class: 'Classe',
        groupTp: 'Groupe de TP',
        associations: 'Associations'
      }
    };
    this.run();
  }

  run() {
    new ControllerPage(ViewShowProfile(this.data));
  }
};

export default ShowProfile;
