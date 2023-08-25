import axios from 'axios';
import cookie from 'js-cookie';
import { isEmail } from 'validator';
import config from '../../config';
import ControllerPage from './page';
import ViewGenProfile from '../views/general_profile';

const GenProfile = class GenProfile {
  constructor() {
    this.run();
    this.data = { infoPerso: {} };
  }

  onClickSearch() {
    const addButton = document.querySelector('#addgroup');
    addButton.addEventListener('click', (e) => {
      e.preventDefault();
      const addInputid = document.querySelector('#id-input');
      const addInputname = document.querySelector('#nom-group-input');
      if (addInputid.value && addInputname.value) {
        const body = {
          idgroup: Number(addInputid.value),
          namegroup: addInputname.value
        };
        axios.post(`${config.IP_API}/group`, body)
          .then(() => {
          })
          .catch((error) => {
            throw new Error(error);
          });
        addInputid.value = ' ';
        addInputname.value = ' ';
      } else {
        console.log('Veuillez réessayer !');
      }
    });
  }

  onClickAjouter() {
    const elButton = document.querySelector('#ajouter');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();

      const elInputLastname = document.querySelector('.lastname');
      const elInputFirstname = document.querySelector('.firstname');
      const elInputEmail = document.querySelector('.email');
      const elInputDescription = document.querySelector('.description');
      const elInputPromo = document.querySelector('.promo');
      const elInputClass = document.querySelector('.class');
      const elInputGrouptp = document.querySelector('.grouptp');
      if (elInputEmail.value && isEmail(elInputEmail.value)
      && elInputLastname.value
      && elInputFirstname.value
      && elInputDescription.value
      && elInputPromo.value
      && elInputClass.value
      && elInputGrouptp.value) {
        const body = {
          lastname: elInputLastname.value,
          firstname: elInputFirstname.value,
          email: elInputEmail.value,
          description: elInputDescription.value,
          promo: elInputPromo.options[elInputPromo.selectedIndex].text,
          class: elInputClass.options[elInputClass.selectedIndex].text,
          groupetp: elInputGrouptp.options[elInputGrouptp.selectedIndex].text
        };
        axios.post(`${config.IP_API}/user`, body, {
          headers: {
            authorization: cookie.get('token')
          }
        })
          .then(() => {
          })
          .catch((error) => {
            throw new Error(error);
          });
        elInputLastname.value = '';
        elInputFirstname.value = '';
        elInputEmail.value = '';
        elInputDescription.value = '';
        elInputPromo.options[elInputPromo.selectedIndex].text = '';
        elInputClass.options[elInputClass.selectedIndex].text = '';
        elInputGrouptp.options[elInputGrouptp.selectedIndex].text = '';
      } else {
        console.log('Problem');
      }
    });
  }

  onClickDel() {
    const delButton = document.querySelector('#delgroupbtn');
    delButton.addEventListener('click', (e) => {
      e.preventDefault();
      const delInputid = document.querySelector('#id-input');
      const delInputname = document.querySelector('#nom-groupe-input');
      if (delInputid.value && delInputname.value) {
        const idgr = delInputid.value;
        const namegr = delInputname.value;
        axios.delete(`${config.IP_API}/group/?idgroup=${idgr}&namegroup=${namegr}`)
          .then(() => {
          })
          .catch((error) => {
            throw new Error(error);
          });
        delInputid.value = ' ';
        delInputname.value = ' ';
      } else {
        console.log('Veuillez réessayer !');
      }
    });
  }

  run() {
    new ControllerPage(ViewGenProfile(this.data));
    setTimeout(() => {
      this.onClickSearch();
      this.onClickAjouter();
      this.onClickDel();
    }, 500);
    // this.onHandleClick();
  }
};

export default GenProfile;
