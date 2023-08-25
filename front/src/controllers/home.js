import axios from 'axios';
import ControllerPage from './page';
import ViewHome from '../views/home';
import config from '../../config';

const Home = class Home {
  constructor() {
    this.data = {
      assoc: {},
      news: {}
    };

    this.run();
  }

  async fetchAssociationDataNews() {
    try {
      const response = await axios.get(`${config.IP_API}/news`);
      this.data.news = response.data;
    } catch (error) {
      throw new Error('Error fetching news data:', error);
    }
  }

  async fetchAssociationData() {
    try {
      const associationIds = this.data.news.map((newsItem) => newsItem.idAsso);
      const uniqueAssociationIds = [...new Set(associationIds)];
      const associationDataPromises = uniqueAssociationIds.map(async (associationId) => {
        const response = await axios.get(`${config.IP_API}/assoc/${associationId}`);
        this.data.assoc[associationId] = response.data;
      });
      await Promise.all(associationDataPromises);
    } catch (error) {
      throw new Error('Error fetching association data:', error);
    }
  }

  async run() {
    await this.fetchAssociationDataNews();
    await this.fetchAssociationData();
    new ControllerPage(ViewHome(this.data));
  }
};

export default Home;
