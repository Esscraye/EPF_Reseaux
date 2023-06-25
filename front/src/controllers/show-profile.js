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
    const token = cookie.get('access_token');
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
    return JSON.parse(jsonPayload).email;
  }

  async getroleuser() {
    const varmail = this.getemailuser();
    const responsevar = await axios.get(`${config.IP_API}/user/${varmail}`);
    this.data.infoPerso = responsevar.data;
    const { role } = this.data.infoPerso; // Récupération du rôle depuis les données
    return role;
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
    this.run();
  }

  async fetchProfilData() {
    if (emailsearch) {
      try {
        const response = await axios.get(`${config.IP_API}/user/${emailsearch}`);
        this.data.infoPerso = response.data;
      } catch (error) {
        throw new Error(error);
      }
    } else {
      const mail = this.getemailuser();
      const response = await axios.get(`${config.IP_API}/user/${encodeURIComponent(mail)}`);
      this.data.infoPerso = response.data;
    }
  }

  async onClickModifProfil() {
    const modifprofilButton = document.querySelector('#btnmodifprofil');
    modifprofilButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const response = await axios.get(`${config.IP_API}/user/${emailsearch}`);
      this.data.infoPerso = response.data;
      const roleuser = await this.getroleuser();
      if (roleuser === 'admin') {
        window.location.href = `${config.IP_FRONT}/changeUser`;
      } else {
        window.location.href = `${config.IP_FRONT}/change-profile`;
      }
    });
  }

  async run() {
    await this.fetchProfilData();
    new ControllerPage(ViewShowProfile(this.data));
    setTimeout(() => {
      this.onClickModifProfil();
    }, 500);
  }
};

export default ShowProfile;
