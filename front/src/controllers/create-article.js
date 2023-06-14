import ViewCreatearticle from '../views/create-article';
import ControllerPage from './page';

const Createarticle = class Createarticle {
  constructor(router) {
    this.router = router;
    this.data = {
      assoc: {
        name: 'Blank',
        logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d3/Logo_FAGE.svg/langfr-1920px-Logo_FAGE.svg.png',
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

    this.newNews = {
      title: '',
      text: '',
      img: ''
    };

    this.run();
  }

  initializeFileInput() {
    const fileInput = document.querySelector('#formFileImage');
    fileInput.addEventListener('change', (event) => {
      const selectedFile = event.target.files[0];

      if (selectedFile.value) {
        selectedFile.value = '';
      }
    });
  }

  saveText() {
    const newsTitle = document.getElementById('floatingTextareaTitle');
    this.newNews.title = newsTitle.value;
    const newsText = document.getElementById('floatingTextareaTexte');
    this.newNews.text = newsText.value;
  }

  handlePostNews() {
    console.log('Posted news:', this.newNews);
  }

  run() {
    this.initializeFileInput();
    const button = document.querySelector('.postbutton');
    button.addEventListener('click', () => {
      this.saveText();
      this.handlePostNews();
    });
    new ControllerPage((ViewCreatearticle(this.data)));
  }
};

export default Createarticle;
