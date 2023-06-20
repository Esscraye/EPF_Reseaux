import axios from 'axios';
import config from '../../config';
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
      const response = await axios.get(`${config.IP_API}/assoc/${id}`);
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
      const response = await axios.get(`${config.IP_API}/news`);
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
    const elButtonsActu = document.querySelectorAll('.delActu');

    if (!elButton) {
      return;
    }
    if (!elButtonsActu.length) {
      return;
    }
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
      const dialog = confirm("Supprimer l'association ?");
      if (dialog) {
        alert('association supprimée');
        document.location.href = '../homeAssos';
      } else {
        alert('annulation de la demande');
      }
    });
  }

  async deleteNews() {
    const elButtonsActu = document.querySelectorAll('.delActu'); // Move the querySelectorAll here
    // Check if elButtonsActu exists and is iterable
    if (elButtonsActu && elButtonsActu.length) {
      Array.from(elButtonsActu).forEach((elButtonActu) => {
        elButtonActu.addEventListener('click', async (e) => {
          e.preventDefault();
          const newsId = elButtonActu.getAttribute('id');
          const dialog = confirm("Supprimer l'actualité ?");
          if (dialog) {
            try {
              await axios.delete(`${config.IP_API}/news/${newsId}`);
              alert('actualité supprimée');
            } catch (error) {
              throw new Error("Erreur lors de la suppression de l'actualité");
            }
          } else {
            alert('annulation de la demande');
          }
        });
      });
    }
  }

  onClickChange() {
    const myModal = document.querySelector('.change');
    const myInput = document.querySelector('#staticBackdrop');

    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus();
    });
  }

  onClickChangeActu() {
    const elButtons = document.querySelectorAll('.changeActu');
    elButtons.forEach((elButton) => {
      elButton.addEventListener('click', (e) => {
        e.preventDefault();
        const infoActu = elButton.getAttribute('data-actu');
        console.log(infoActu);
        document.location.href = '../createArticle';
      });
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

  async run() {
    await this.fetchAssociationDataAsso();
    await this.fetchAssociationDataNews(this.data.assoc.id);
    new ControllerPage(ViewAssoSuperAdmin(this.data));
    console.log(this.data);
    this.onClickFollow();
    this.onClickDel(this.data.assoc.id);
    this.deleteNews();
    this.onClickChange();
    this.onClickChangeActu();
    this.onClickChangeDesc();
    this.onClickChangeTeam();
    this.onClickChangeContact();
  }
};

export default AssoSuperAdmin;
