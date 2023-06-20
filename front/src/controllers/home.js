import axios from 'axios';
import ControllerPage from './page';
import ViewHome from '../views/home';

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
      const response = await axios.get('http://127.0.0.1:3000/news');
      this.data.news = response.data;
      await this.fetchAssociationData();
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  }

  async fetchAssociationData() {
    try {
      const associationIds = this.data.news.map((newsItem) => newsItem.idAsso);
      const uniqueAssociationIds = [...new Set(associationIds)];
      const associationDataPromises = uniqueAssociationIds.map(async (associationId) => {
        const response = await axios.get(`http://127.0.0.1:3000/assoc/${associationId}`);
        this.data.assoc[associationId] = response.data;
      });
      await Promise.all(associationDataPromises);
    } catch (error) {
      console.error('Error fetching association data:', error);
    }
  }

  async run() {
    await this.fetchAssociationDataNews();
    new ControllerPage(ViewHome(this.data));
  }
};

export default Home;
