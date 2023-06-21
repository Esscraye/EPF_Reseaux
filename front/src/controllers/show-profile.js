import axios from 'axios';
import cookie from 'js-cookie';
import config from '../../config';
import ViewShowProfile from '../views/show-profile';
import ControllerPage from './page';

const queryString = window.location.search;
const url = new URLSearchParams(queryString);
let emailsearch = url.get('email');

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
    this.data = {
      // infoPerso: {
      // delete: false
      // }
    };
    if (!emailsearch) {
      emailsearch = this.getemailuser();
    }
    localStorage.setItem('emailsearch', emailsearch);
    console.log('localestorage', emailsearch);
    this.run();
  }

  async fetchProfilData() {
    if (emailsearch) {
      try {
        const response = await axios.get(`${config.IP_API}/user/${emailsearch}`);
        this.data.infoPerso = response.data;
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

  onClickModifProfil() {
    const modifprofilButton = document.querySelector('#btnmodifprofil');
    modifprofilButton.addEventListener('click', (e) => {
      e.preventDefault();
      try {
        console.log('efominzbielbu');
        console.log('loca sorage', emailsearch);
        const response = axios.get(`${config.IP_API}/user/${emailsearch}`);
        console.log(response);
        this.data.infoPerso = response.data;
        console.log(this.data.infoPerso);
        window.location.href = `${config.IP_FRONT}/changeUser`;
      } catch (error) {
        console.log('perdu');
        // Gérer l'erreur
      }
    });
  }

  async run() {
    await this.fetchProfilData();
    new ControllerPage(ViewShowProfile(this.data));
    this.onClickModifProfil();
  }
};

export default ShowProfile;
