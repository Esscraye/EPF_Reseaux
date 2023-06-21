import axios from 'axios';
import cookie from 'js-cookie';
import config from '../../config';
import ViewShowProfile from '../views/show-profile';
import ControllerPage from './page';

const ShowProfile = class ShowProfile {
  getemailuser() {
    const token = cookie.get('token');
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
    return JSON.parse(jsonPayload).email;
  }

  constructor() {
    this.el = document.body;
    this.data = {};

    this.run();
  }

  async fetchProfilData() {
    const queryString = window.location.search;
    const url = new URLSearchParams(queryString);
    const mailurl = url.get('email');
    if (mailurl) {
      try {
        const response = await axios.get(`${config.IP_API}/user/${mailurl}`);
        this.data.infoPerso = response.data;
        // new ControllerPage(ViewShowProfile(this.data));
      } catch (error) {
        console.log('perdu');
        // Gérer l'erreur
      }
    } else {
      const mail = this.getemailuser();
      const response = await axios.get(`${config.IP_API}/user/${encodeURIComponent(mail)}`);
      this.data.infoPerso = response.data;
    }
  }

  async run() {
    await this.fetchProfilData();
    new ControllerPage(ViewShowProfile(this.data));
  }
};

export default ShowProfile;
