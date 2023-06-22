import axios from 'axios';
import cookie from 'js-cookie';
import { isEmail } from 'validator';
import ControllerPage from './page';
import ViewCreateAssos from '../views/create-associations';
import config from '../../config';

const Home = class Home {
  constructor() {
    this.el = document.body;
    this.run();
  }

  onClickAjouter() {
    const elButton = document.querySelector('#valider');

    elButton.addEventListener('click', (e) => {
      e.preventDefault();

      const elInputNameassos = document.querySelector('#assosname');
      const elInputChoicecampus = document.querySelector('#choicecampus');
      const elInputDescription = document.querySelector('#description');
      const tempo = '@epfedu.fr';
      const elInputMailAssos = document.querySelector('#mailassos').value + tempo;
      if (isEmail(elInputMailAssos)) {
        const body = {
          name: elInputNameassos.value,
          campus: elInputChoicecampus.value,
          image_header: '',
          logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d3/Logo_FAGE.svg/langfr-1920px-Logo_FAGE.svg.png',
          descriptionAsso: elInputDescription.value,
          descriptionTeam: 'none',
          mail: elInputMailAssos,
          phone: '+33 6.00.00.00.00.',
          socialNetworks: {
            instagram: 'none',
            discord: 'none',
            twitter: 'none',
            facebook: 'none',
            linkedin: 'none'
          }
        };

        axios.post(
          `${config.IP_API}/assoc`,
          body,
          {
            headers: {
              authorization: cookie.get('token')
            }
          }
        )
          .then((response) => {
            console.log(response);
            // Vider les champs de saisie
            elInputNameassos.value = '';
            elInputChoicecampus.value = '';
            elInputDescription.value = '';
            document.querySelector('#mailassos').value = '';
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log({
          result: 'Problem'
        });
      }
    });
  }

  async run() {
    new ControllerPage(ViewCreateAssos());
    await setTimeout(() => {
      this.onClickAjouter();
    }, 500);
  }
};

export default Home;
