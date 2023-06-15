import 'bootstrap/dist/js/bootstrap.bundle.min';
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
        description: 'lorem ipsum, lorem ipsum, lorem ipsum',
        team: 'ipsum lorem ipsum',
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
      follower: {
        assoc: true
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
    const btn = document.querySelector('.follow-assoc');

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        if (btn.classList.contains('btn-assoc-follow')) {
          btn.textContent = 'Ne plus suivre';
          e.target.classList.add('btn-assoc-unfollow');
          e.target.classList.remove('btn-assoc-follow');

          return;
        }

        e.target.classList.remove('btn-assoc-unfollow');
        e.target.classList.add('btn-assoc-follow');

        btn.textContent = 'Suivre';
      });
    }
  }

  onClickDel() {
    const elButton = document.querySelector('.delAsso');
    const elButtonActu = document.querySelector('.delActu');

    if (!elButton) {
      return;
    }
    if (!elButtonActu) {
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

    elButtonActu.addEventListener('click', (e) => {
      e.preventDefault();
      const dialog = confirm('Supprimer l\'actualité ?');
      if (dialog) {
        alert('actualité supprimée');
      } else {
        alert('annulation de la demande');
      }
    });
  }

  onClickChange() {
    const myModal = document.querySelector('.change');
    const myInput = document.querySelector('#staticBackdrop');

    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus();
    });
  }

  /* onClickConfirm() {
    const elButton = document.querySelector('#confirm');

    if (!elButton) {
      return;
    }
    elButton.addEventListener('click', (e) => {
      const logo = document.querySelector('#logo');
      const image = document.querySelector('#image');

      if (logo.value){
        const logoPlace = document.querySelector('#logo-img');
        var change = logoPlace.getAttribute('src');
        change = logo.value;
        logoPlace.setAttribute('src', change);
      }
    });
  } */

  onClickChangeActu() {
    const elButton = document.querySelector('.changeActu');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
      document.location.href = '../createActu';
      // il faut qu'on trouve comment récup l'info de l'actu pour l'ingecter dans la page
    });
  }

  onClickChangeDesc() {
    const elButton = document.querySelector('.changeDesc');
    let editable = false;
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
      const paragraph = document.querySelector('#textDesc');
      editable = !paragraph.isContentEditable;
      paragraph.contentEditable = editable;
      if (editable) {
        elButton.textContent = 'Valider';
        return;
      }
      elButton.textContent = 'Modifier';
    });
  }

  onClickChangeTeam() {
    const elButton = document.querySelector('.changeTeam');
    let editable = false;
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
      const paragraph = document.querySelector('#textTeam');
      editable = !paragraph.isContentEditable;
      paragraph.contentEditable = editable;
      if (editable) {
        elButton.textContent = 'Valider';
        return;
      }
      elButton.textContent = 'Modifier';
    });
  }

  run() {
    new ControllerPage(ViewAssoSuperAdmin(this.data));
    this.onClickFollow();
    this.onClickDel();
    this.onClickChange();
    this.onClickChangeActu();
    this.onClickChangeDesc();
    this.onClickChangeTeam();
  }
};

export default AssoSuperAdmin;
