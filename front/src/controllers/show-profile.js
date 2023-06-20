import axios from 'axios';
import config from '../../config';
import ViewShowProfile from '../views/show-profile';
import ControllerPage from './page';

const ShowProfile = class ShowProfile {
  constructor() {
    this.el = document.body;
    this.data = {};
    axios.get(`${config.IP_API}/user/augustin.nadiedjoa@epfedu.fr`)
      .then((response) => {
        console.log(response);
        this.data.infoPerso = response.data;
        this.run();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  run() {
    new ControllerPage(ViewShowProfile(this.data));
  }
};

export default ShowProfile;
