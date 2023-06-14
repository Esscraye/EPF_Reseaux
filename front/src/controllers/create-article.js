import ViewCreatearticle from '../views/create-article';
import ControllerPage from './page';

const Createarticle = class Createarticle {
  constructor(router) {
    this.router = router;
    this.data = {
      assoc: {
        name: 'Blank',
        logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d3/Logo_FAGE.svg/langfr-1920px-Logo_FAGE.svg.png',
        back: 'https://i.redd.it/qbkwy20nvoa61.jpg',
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
      userPermissions: {
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
    const newsTitle = newsTitleInput.value;
    const newsText = newsTextInput.value;
    const newsImg = newsImgInput.files[0];

    if (newsTitleInput.value === '' || newsTextInput.value === '' || newsImgInput.files[0] === '') {
      alert('Il faut remplir tous les champs');
    } else {
      newsTitleInput.value = '';
      newsTextInput.value = '';
      newsImgInput.files[0] = '';
    }

    return {
      title: newsTitle,
      text: newsText,
      img: newsImg
    };
  }

  runCreate() {
    const postNews = document.querySelector('.postNewsButton');
    postNews.addEventListener('click', () => {
      this.saveNews();
    });
  }

  run() {
    new ControllerPage((ViewCreatearticle(this.data)));
    this.runCreate();
  }
};

export default Createarticle;
