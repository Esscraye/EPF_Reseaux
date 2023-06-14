import ControllerPage from './page';
import ViewAssoSuperAdmin from '../views/asso-super-admin';

const AssoSuperAdmin = class AssoSuperAdmin {
  constructor() {
    this.el = document.body;
    this.data = {
      assoc: {
        name: 'My Assoc',
        campus: '',
        image_header: '',
        logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d3/Logo_FAGE.svg/langfr-1920px-Logo_FAGE.svg.png',
        description: 'Description de l\'asso',
        text: 'lorem ipsum',
        mail: 'youpi@gmail.com',
        phone: '0605040302',
        socialNetworks: {
          instagram: 'https://www.instagram.com/',
          discord: 'https://discord.com/',
          twitter: 'https://twitter.com/',
          facebook: 'https://fr-fr.facebook.com/',
          linkedin: 'https://fr.linkedin.com/'
        }
      },
      usersPermissions: {
        founder: {
          news: {
            delete: true,
            update: true
          },
          assoc: {
            delete: true,
            manage: true,
            update: true,
            follow: false
          },
          team: {
            update: true
          },
          ajoutActu: {
            create: true
          }
        },
        member: {
          news: {
            delete: false,
            update: false
          },
          assoc: {
            delete: false,
            manage: false,
            update: false,
            follow: true
          },
          team: {
            update: false
          },
          ajoutActu: {
            create: false
          }
        }
      },
      news: [{
        title: 'Titre de l\'actu',
        text: 'lorem ipsum',
        img: 'https://picsum.photos/207/300',
        date: 'depuis 2 jours',
        link: '#'
      }, {
        title: 'Titre de l\'actu',
        text: 'lorem ipsum',
        img: 'https://picsum.photos/207/300',
        date: 'depuis 2 jours',
        link: '#'
      }]
    };

    this.run();
  }

  onClickFollow() {
    const elButton = document.querySelector('.followAsso');

    if (!elButton) {
      return;
    }

    elButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (elButton.textContent === 'Suivre') {
        alert('Association suivie');
        elButton.textContent = 'Ne plus suivre';
      } else {
        alert('Association non suivie');
        elButton.textContent = 'Suivre';
      }
    });
  }

  onClickDel() {
    const elButton = document.querySelector('.delAsso');

    if (!elButton) {
      return;
    }

    elButton.addEventListener('click', (e) => {
      e.preventDefault();
      const dialog = confirm('Supprimer l\'association ?');
      if (dialog) {
        alert('association supprimée');
        document.location.href = '../homeAssos';
      } else {
        alert('annulation de la demande');
      }
    });
  }

  onClickChange() {
    const elButton = document.querySelector('.changeAsso');

    if (!elButton) {
      return;
    }

    elButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (elButton.textContent === 'Modifier') {
        elButton.textContent = 'Valider Modification';
      } else {
        elButton.textContent = 'Modifier';
      }
    });
  }
  /*  BoutonModifierAsso() {
    const elButton = document.querySelector('.ModifierAsso');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
  BoutonAjouterActu() {
    const elButton = document.querySelector('.AjouterActu');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
  BoutonSupprimerActu() {
    const elButton = document.querySelector('.SupprimerActu');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
  BoutonModifierActu() {
    const elButton = document.querySelector('.ModifierActu');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
  BoutonVoirActu() {
    const elButton = document.querySelector('.VoirActu');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
  BoutonModifierDescription() {
    const elButton = document.querySelector('.ModifierDescription');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
  BoutonModifierEquipe() {
    const elButton = document.querySelector('.ModifierEquipe');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
  BoutonModifierContact() {
    const elButton = document.querySelector('.ModifierContact');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
*/

  run() {
    new ControllerPage(ViewAssoSuperAdmin(this.data));
    this.onClickFollow();
    this.onClickDel();
    this.onClickChange();
  }
};

export default AssoSuperAdmin;
