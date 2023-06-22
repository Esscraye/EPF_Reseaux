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

  async getroleuser() {
    const varmail = this.getemailuser();
    console.log('varmail', varmail);
    const responsevar = await axios.get(`${config.IP_API}/user/${varmail}`);
    this.data.infoPerso = responsevar.data;
    const { role } = this.data.infoPerso; // Récupération du rôle depuis les données
    console.log('fctrole', role);
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
    console.log('localestorage', emailsearch);
    this.run();
  }

  /* getrole() {
    try {
      const varmail2 = this.getemailuser();
      console.log('varmail2', varmail2);
      const responsevar2 = axios.get(`${config.IP_API}/user/${varmail2}`);
      this.data.infoPerso = responsevar2.data;
      const roleuser = this.data.infoPerso.role; // Récupération du rôle depuis les données
      return roleuser;
    } catch (error) {
      console.log('perdu');
      return ;
      // Gérer l'erreur
    }
  } */

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

  async onClickModifProfil() {
    const modifprofilButton = document.querySelector('#btnmodifprofil');
    console.log(modifprofilButton);
    modifprofilButton.addEventListener('click', async (e) => {
      e.preventDefault();
      console.log('efominzbielbu');
      console.log('loca sorage', emailsearch);
      const response = await axios.get(`${config.IP_API}/user/${emailsearch}`);
      console.log(response);
      this.data.infoPerso = response.data;
      console.log(this.data.infoPerso);
      const roleuser = await this.getroleuser();
      if (roleuser === 'admin') {
        window.location.href = `${config.IP_FRONT}/changeUser`;
        console.log('adminnnnnn');
      } else {
        window.location.href = `${config.IP_FRONT}/change-profile`;
        console.log('eleveeee');
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
