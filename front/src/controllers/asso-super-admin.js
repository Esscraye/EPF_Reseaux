import axios from 'axios';
import ControllerPage from './page';
import ViewAssoSuperAdmin from '../views/asso-super-admin';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const AssoSuperAdmin = class AssoSuperAdmin {
  constructor() {
    this.el = document.body;
    this.data = {
      assoc: {},
      follower: {
        assoc: true
      },
      userPermission: {
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
      news: []
    };

    this.run();
  }

  async fetchAssociationDataAsso() {
    const queryString = window.location.search;
    const url = new URLSearchParams(queryString);
    const id = url.get('id');
    console.log(id);
    // console.log(window.location);
    try {
      const response = await axios.get(`http://172.25.56.114:3000/assoc/${id}`);
      this.data.assoc = response.data;
      // console.log(response);
      // console.log(this.data.assoc);
    } catch (error) {
      console.log('perdu');
      // Gérer l'erreur
    }
  }

  async fetchAssociationDataNews(id) {
    try {
      const response = await axios.get('http://172.25.56.114:3000/news');
      // console.log(response);
      // console.log(id);
      // console.log(news.idAsso);
      // console.log(response.data.news.idAsso);
      console.log(response.data.idAsso);
      const filteredNews = response.data.filter((news) => news.idAsso === id);
      console.log('news filtrer');
      console.log(filteredNews);
      // const CachanCards = cards.filter((assoc) => assoc.campus === 'Cachan');
      this.data.news = filteredNews;
    } catch (error) {
      console.log(error);
      // Gérer l'erreur
    }
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
    // fonction pour update la page avec les images quand on clique la validation dans le popup
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
      // il faut qu'on trouve comment récup l'info de l'actu pour l'injecter dans la page
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

  onClickChangeContact() {
    const myModal = document.querySelector('.changeContact');
    const myInput = document.querySelector('#contact-form');

    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus();
    });
  }

  /* onClickConfirm() {
    // fonction pour update les contact en validant dans le pop-up
    const elButton = document.querySelector('#confirm-contact');

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

  async run() {
    await this.fetchAssociationDataAsso();
    console.log(this.data.assoc.id);
    await this.fetchAssociationDataNews(this.data.assoc.id);
    new ControllerPage(ViewAssoSuperAdmin(this.data));
    console.log(this.data);
    this.onClickFollow();
    this.onClickDel();
    this.onClickChange();
    this.onClickChangeActu();
    this.onClickChangeDesc();
    this.onClickChangeTeam();
    this.onClickChangeContact();
  }
};

export default AssoSuperAdmin;
