import axios from 'axios';
import config from '../../config';
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
      const response = await axios.get(`${config.IP_API}/assoc`);
      this.data.cards = response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async run() {
    await this.fetchAssociationData();
    new ControllerPage(ViewPageMainAssos(this.data));
  }
}

export default PageMainAssos;
