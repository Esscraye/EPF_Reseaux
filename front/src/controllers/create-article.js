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

    this.run();
  }

  onClickSearch() {
    const elButton = document.querySelector('.nav-search button');

    elButton.addEventListener('click', (e) => {
      e.preventDefault();

      const elInput = document.querySelector('.nav-search input');

      if (elInput.value) {
        elInput.value = '';
      }
    });
  }

  run() {
    new ControllerPage(ViewCreatearticle(this.data));
  }
};

export default Createarticle;
