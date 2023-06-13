import { isEmail } from 'validator';
import ControllerPage from './page';
import ViewCreateAssos from '../views/create-associations';

const Home = class Home {
  constructor() {
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
        console.log({
          nameassos: elInputNameassos.value,
          firstname: elInputChoicecampus.value,
          description: elInputDescription.value,
          mailassos: elInputMailAssos
        });
      } else {
        console.log({
          result: 'Problem'
        });
      }
    });
  }

  run() {
    new ControllerPage(ViewCreateAssos());
    this.onClickAjouter();
  }
};

export default Home;
