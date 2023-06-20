import axios from 'axios';
import ControllerPage from './page';
import ViewPageMainAssos from '../views/association-page';

class PageMainAssos {
  constructor() {
    this.data = { cards: [] };

    this.run();
  }

  // get the cards of the associations and put it in this.data
  async fetchAssociationData() {
    try {
      const response = await axios.get('http://127.0.0.1:3000/assoc');
      this.data.cards = response.data;
      console.log(this.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      // Gérer l'erreur
    }
  }

  async run() {
    await this.fetchAssociationData();
    new ControllerPage(ViewPageMainAssos(this.data));
  }
}

export default PageMainAssos;
