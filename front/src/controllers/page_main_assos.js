import ControllerPage from './page';
import ViewPageMainAssos from '../views/page_main_assos';

class PageMainAssos {
  constructor() {
    this.data = {
      cards: [
        {
          assoc: {
            logo: 'https://picsum.photos/240/300',
            name: 'Titre de l\'asso',
            description: 'lorem ipsum'
          }
        },
        {
          assoc: {
            logo: 'https://picsum.photos/240/300',
            name: 'Titre de l\'asso',
            description: 'lorem ipsum'
          }
        },
        {
          assoc: {
            logo: 'https://picsum.photos/240/300',
            name: 'Titre de l\'asso',
            description: 'lorem ipsum'
          }
        },
        {
          assoc: {
            logo: 'https://picsum.photos/240/300',
            name: 'Titre de l\'asso',
            description: 'lorem ipsum'
          }
        },
        {
          assoc: {
            logo: 'https://picsum.photos/240/300',
            name: 'Titre de l\'asso',
            description: 'lorem ipsum'
          }
        },
        {
          assoc: {
            logo: 'https://picsum.photos/240/300',
            name: 'Titre de l\'asso',
            description: 'lorem ipsum'
          }
        },
        {
          assoc: {
            logo: 'https://picsum.photos/240/300',
            name: 'Titre de l\'asso',
            description: 'lorem ipsum'
          }
        },
        {
          assoc: {
            logo: 'https://picsum.photos/240/300',
            name: 'Titre de l\'asso',
            description: 'lorem ipsum'
          }
        },
        {
          assoc: {
            logo: 'https://picsum.photos/240/300',
            name: 'Titre de l\'asso',
            description: 'lorem ipsum'
          }
        },
        {
          assoc: {
            logo: 'https://picsum.photos/240/300',
            name: 'Titre de l\'asso',
            description: 'lorem ipsum'
          }
        }
      ]
    };

    this.run();
  }

  run() {
    new ControllerPage(ViewPageMainAssos(this.data));
  }
}

export default PageMainAssos;
