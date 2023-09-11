import axios from 'axios';
import cookie from 'js-cookie';
import config from '../../config';
import ControllerPage from './page';
import ViewAssoSuperAdmin from '../views/asso-super-admin';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

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
    try {
      const response = await axios.get(`${config.IP_API}/assoc/${id}`);
      this.data.assoc = response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchAssociationDataNews(id) {
    try {
      const response = await axios.get(`${config.IP_API}/news`);
      const filteredNews = response.data.filter((news) => news.idAsso === id);
      this.data.news = filteredNews;
    } catch (error) {
      throw new Error(error);
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

  async deleteAsso() {
    const elButtonsAsso = document.querySelectorAll('.delAsso');
    if (elButtonsAsso && elButtonsAsso.length) {
      Array.from(elButtonsAsso).forEach((button) => {
        button.addEventListener('click', async (e) => {
          e.preventDefault();
          const idAssoc = button.getAttribute('id');
          // const dialog = confirm("Supprimer l'association ?"); // need to recode confirm()
          const dialog = true; // need to recode our own confirm()
          if (dialog) {
            try {
              // Supprimer l'association
              await axios.delete(`${config.IP_API}/assoc/${idAssoc}`);
              // Supprimer toutes les actualités associées
              const response = await axios.get(`${config.IP_API}/news`);
              const filteredNews = response.data.filter((news) => news.idAsso === idAssoc);
              const newsIds = filteredNews.map((news) => news.id);
              await Promise.all(newsIds.map((newsId) => axios.delete(`${config.IP_API}/news/${newsId}`)));
              // alert('Association et actualités supprimées'); // need to recode our own alert
            } catch (error) {
              throw new Error("Erreur lors de la suppression de l'association et des actualités");
            }
          }
          /* else {
            alert('annulation de la demande'); // need to recode our own alert
          } */
        });
      });
    }
  }

  async deleteNews() {
    const elButtonsActu = document.querySelectorAll('.delActu'); // Move the querySelectorAll here
    // Check if elButtonsActu exists and is iterable
    if (elButtonsActu && elButtonsActu.length) {
      Array.from(elButtonsActu).forEach((elButtonActu) => {
        elButtonActu.addEventListener('click', async (e) => {
          e.preventDefault();
          const newsId = elButtonActu.getAttribute('id');
          // const dialog = confirm("Supprimer l'actualité ?"); // need to recode our own confirm()
          const dialog = true; // need to recode our own confirm()
          if (dialog) {
            try {
              await axios.delete(`${config.IP_API}/news/${newsId}`);
              // alert('actualité supprimée'); // need to recode our own alert
              location.reload();
            } catch (error) {
              throw new Error("Erreur lors de la suppression de l'actualité");
            }
          }
          /* else {
            alert('annulation de la demande'); // need to recode our own alert
          } */
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
        // const infoActu = elButton.getAttribute('data-actu');
        document.location.href = '../createArticle';
      });
    });
  }

  onClickChangeDesc() {
    const elButton = document.querySelector('.changeDesc');
    let editable = false;
    elButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const paragraph = document.querySelector('#textDesc');
      editable = !paragraph.isContentEditable;
      paragraph.contentEditable = editable;
      if (editable) {
        elButton.textContent = 'Valider';
        return;
      }
      elButton.textContent = 'Modifier';

      // Update the assoc.descriptionAsso value in the database
      const { id } = this.data.assoc;
      const newDescriptionAsso = paragraph.textContent.trim(); // Obtenir la nouvelle description
      try {
        await axios.put(`${config.IP_API}/assoc/${id}`, { descriptionAsso: newDescriptionAsso }, {
          headers: {
            authorization: cookie.get('token')
          }
        });
        this.data.assoc.descriptionAsso = newDescriptionAsso;
        location.reload();
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  onClickChangeTeam() {
    const elButton = document.querySelector('.changeTeam');
    let editable = false;
    elButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const paragraph = document.querySelector('#textTeam');
      editable = !paragraph.isContentEditable;
      paragraph.contentEditable = editable;
      if (editable) {
        elButton.textContent = 'Valider';
        return;
      }
      elButton.textContent = 'Modifier';

      // Update the assoc.descriptionTeam value in the database
      const { id } = this.data.assoc;
      const newDescriptionTeam = paragraph.textContent.trim(); // Obtenir la nouvelle description
      try {
        await axios.put(`${config.IP_API}/assoc/${id}`, { descriptionTeam: newDescriptionTeam }, {
          headers: {
            authorization: cookie.get('token')
          }
        });
        this.data.assoc.descriptionTeam = newDescriptionTeam;
        location.reload();
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  onClickChangeContact() {
    const social = document.querySelector('.validerReso');
    social.addEventListener('click', async () => {
      social.focus();
      const emailValue = document.querySelector('input[aria-describedby="basic-addon2"]').value;
      const newPhone = document.querySelector('input[aria-describedby="basic-addon3"]').value;
      const newInstagram = document.querySelector('input[aria-describedby="basic-addon4"]').value;
      const newDiscord = document.querySelector('input[aria-describedby="basic-addon5"]').value;
      const newTwitter = document.querySelector('input[aria-describedby="basic-addon6"]').value;
      const newFacebook = document.querySelector('input[aria-describedby="basic-addon7"]').value;
      const newLinkedin = document.querySelector('input[aria-describedby="basic-addon8"]').value;

      // Update the assoc.SocialNetwork value in the database
      const { id } = this.data.assoc;
      try {
        await axios.put(`${config.IP_API}/assoc/${id}`, {
          mail: emailValue,
          phone: newPhone,
          socialNetworks: {
            instagram: newInstagram,
            discord: newDiscord,
            twitter: newTwitter,
            facebook: newFacebook,
            linkedin: newLinkedin
          }
        }, {
          headers: {
            authorization: cookie.get('token')
          }
        });
        location.reload();
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  getemailuser() {
    const token = cookie.get('token');
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
    return JSON.parse(jsonPayload).email;
  }

  async run() {
    // const mail = this.getemailuser(); // récupérer le mail de la personne connecté.
    await this.fetchAssociationDataAsso();
    await this.fetchAssociationDataNews(this.data.assoc.id);
    new ControllerPage(ViewAssoSuperAdmin(this.data));
    await setTimeout(() => {
      this.onClickFollow();
      this.deleteNews();
      this.deleteAsso();
      this.onClickChange();
      this.onClickChangeActu();
      this.onClickChangeDesc();
      this.onClickChangeTeam();
      this.onClickChangeContact();
    }, 500);
  }
};

export default AssoSuperAdmin;
