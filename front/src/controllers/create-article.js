import axios from 'axios';
import config from '../../config';
import ViewCreatearticle from '../views/create-article';
import ControllerPage from './page';

const Createarticle = class Createarticle {
  constructor(router) {
    this.router = router;
    this.data = {
      assoc: {
        name: 'EPF Aventure',
        logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d3/Logo_FAGE.svg/langfr-1920px-Logo_FAGE.svg.png',
        back: 'https://altereo.fr/wp-content/uploads/2019/04/ENV-generique-99-Redimentionne-web.jpg',
        description: '',
        mail: '',
        phone: '',
        socialNetworks: {
          instagram: '',
          discord: '',
          twitter: '',
          facebook: '',
          linkedin: ''
        }
      },
      userPermission: {
        founders: {
          news: {
            create: true,
            delete: true,
            update: true
          },
          assoc: {
            update: true
          },
          team: {
            create: true,
            delete: true
          }
        },
        member: {
          create: false,
          delete: false,
          update: false
        },
        assoc: {
          update: false
        },
        team: {
          create: false,
          delete: false
        }
      }
    };

    this.run();
  }

  runCreate() {
    const postNews = document.querySelector('.postNewsButton');
    postNews.addEventListener('click', () => {
      const newsTitleInput = document.querySelector('#floatingTextareaTitle');
      const newsTextInput = document.querySelector('#floatingTextareaTexte');
      const newsImgInput = document.querySelector('#formFileImage');
      const newsImg = newsImgInput.files[0];
      console.log('newsImgInput.files', newsImgInput);
      const queryString = window.location.search;
      const url = new URLSearchParams(queryString);
      const id = url.get('id');
      // on récupere la date
      const currentDate = new Date();
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = currentDate.toLocaleDateString('fr-FR', options);
      if (newsTitleInput.value === '' || newsTextInput.value === '' || newsImgInput.files[0] === null) {
        alert('Il faut remplir tous les champs');
      } else {
        const allowedExtensions = /(\.jpg|\.jpeg)$/i;
        if (!allowedExtensions.test(newsImg.name)) {
          alert('Seuls les fichiers JPEG sont autorisés.');
          return;
        }

        const formData = {
          title: newsTitleInput.value,
          text: newsTextInput.value,
          date: formattedDate,
          img: newsImgInput.files[0],
          idAsso: id
        };

        if (id) {
          axios.put(`${config.IP_API}/news/${id}`, formData)
            .then((response) => {
              console.log(response);
              // Mise à jour réussie, effectuer les actions nécessaires
            })
            .catch((error) => {
              console.log(error);
              // Gérer l'erreur lors de la mise à jour
            });
        } else {
          axios.post(`${config.IP_API}/news`, formData)
            .then((response) => {
              console.log(response);
              // Publication réussie, effectuer les actions nécessaires
            })
            .catch((error) => {
              console.log(error);
              // Gérer l'erreur lors de la publication
            });
        }
        // Vider les champs de saisie
        newsTitleInput.value = '';
        newsTextInput.value = '';
        const newFileInput = document.createElement('input');
        newFileInput.id = 'formFileImage';
        newFileInput.type = 'file';
        newsImgInput.parentNode.replaceChild(newFileInput, newsImgInput);
      }
    });
  }

  async fetchAssociationDataNews() {
    const queryString = window.location.search;
    const url = new URLSearchParams(queryString);
    const id = url.get('id'); // id de la news
    console.log('idNews', id);
    try {
      const response = await axios.get(`${config.IP_API}/news/${id}`);
      this.data.news = response.data;
      console.log('coucou les loulous je suis dans le constructeur du front', this.data.news);
    } catch (error) {
      console.log('perdu');
      // Gérer l'erreur
    }
  }

  async fetchAssociationDataAsso() {
    const queryString = window.location.search;
    const url = new URLSearchParams(queryString);
    const id = url.get('id');
    try {
      const response = await axios.get(`${config.IP_API}/assoc/${id}`);
      this.data.assoc = response.data;
    } catch (error) {
      console.log('perdu');
      // Gérer l'erreur
      console.log('coucou les asso', this.data.assoc);
    }
  }

  async run() {
    await this.fetchAssociationDataNews(); // Fetch news data first
    await this.fetchAssociationDataAsso();
    const { assoc, news } = this.data; // Destructure assoc and news from this.data
    new ControllerPage(ViewCreatearticle({ assoc, news }));
    setTimeout(() => {
      this.runCreate();
    }, 1000);
  }
};

export default Createarticle;
