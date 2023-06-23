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

  saveNews() {
    const newsTitleInput = document.querySelector('#floatingTextareaTitle');
    const newsTextInput = document.querySelector('#floatingTextareaTexte');
    const newsImgInput = document.querySelector('#formFileImage');
    const newsImg = newsImgInput.files[0];
    // on récupere la clef étrangere idAsso stocker dans l'url
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
      axios.post(`${config.IP_API}/news`, formData)
        .then(() => {
          // Vider les champs de saisie
          newsTitleInput.value = '';
          newsTextInput.value = '';
          const newFileInput = document.createElement('input');
          newFileInput.id = 'formFileImage';
          newFileInput.type = 'file';
          newsImgInput.parentNode.replaceChild(newFileInput, newsImgInput);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  }

  runCreate() {
    const postNews = document.querySelector('.postNewsButton');
    postNews.addEventListener('click', () => {
      this.saveNews();
    });
  }

  run() {
    new ControllerPage(ViewCreatearticle(this.data));
    setTimeout(() => {
      this.runCreate();
    }, 500);
  }
};

export default Createarticle;
