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

  onClickCreateGroup() {
    const addButton = document.querySelector('.create-group-btn');
    addButton.addEventListener('click', (e) => {
      e.preventDefault();
      const addInputtype = document.querySelector('.type-addgroup-input');
      const addInputname = document.querySelector('.name-addgroup-input');
      if (addInputtype.value && addInputname.value) {
        const body = {
          typegroup: addInputtype.value,
          namegroup: addInputname.value,
          members: []
        };
        axios.post(`${config.IP_API}/group`, body)
          .then(() => {
          })
          .catch((error) => {
            throw new Error(error);
          });
        addInputtype.value = ' ';
        addInputname.value = ' ';
      }
      /* else {
        console.log('Veuillez réessayer !');
      } */
    });
  }

  /// Fonction actuellement non fonctionnelle !
  onClickAjouter() {
    const elButton = document.querySelector('#ajouter');
    elButton.addEventListener('click', (e) => {
      e.preventDefault();

      const elInputLastname = document.querySelector('.lastname');
      const elInputFirstname = document.querySelector('.firstname');
      const elInputEmail = document.querySelector('.email');
      const elInputDescription = document.querySelector('.description');
      const elInputPromo = document.querySelector('.promo');
      // const elInputGroupTd = document.querySelector('.grouptd');
      // const elInputGrouptp = document.querySelector('.grouptp');
      if (elInputEmail.value && isEmail(elInputEmail.value)
      && elInputLastname.value
      && elInputFirstname.value
      && elInputDescription.value
      && elInputPromo.value) {
        const body = {
          lastname: elInputLastname.value,
          firstname: elInputFirstname.value,
          email: elInputEmail.value,
          description: elInputDescription.value,
          role: elInputEmail.value
        };
        axios.post(`${config.IP_API}/user`, body, {
          headers: {
            authorization: cookie.get('token')
          }
        })
          .then(() => { // get the id of the user to create the group after.
            // const groupPromo = elInputPromo.options[elInputPromo.selectedIndex].text
            // const groupTd = elInputGroupTd.options[elInputGroupTd.selectedIndex].text
            // const groupeTp = elInputGrouptp.options[elInputGrouptp.selectedIndex].text
            // find each group then push the user in there.
          })
          .catch((error) => {
            throw new Error(error);
          });
        elInputLastname.value = '';
        elInputFirstname.value = '';
        elInputEmail.value = '';
        elInputDescription.value = '';
      }
      /* else {
        console.log('Problem');
      } */
    });
  }

  onClickDel() {
    const delButton = document.querySelector('#delgroupbtn');
    delButton.addEventListener('click', (e) => {
      e.preventDefault();
      const delInputid = document.querySelector('.id-delgroup');
      const delInputname = document.querySelector('.name-delgroup');
      if (delInputid.value) {
        const idgr = delInputid.value;
        axios.delete(`${config.IP_API}/group/${idgr}`)
          .then(() => {
          })
          .catch((error) => {
            throw new Error(error);
          });
        delInputid.value = '';
        delInputname.value = '';
      }
      /* else {
        console.log('Veuillez réessayer !');
      } */
    });
  }

  run() {
    new ControllerPage(ViewGenProfile(this.data));
    setTimeout(() => {
      this.onClickCreateGroup();
      this.onClickAjouter();
      this.onClickDel();
    }, 1000);
    // this.onHandleClick();
  }
};

export default GenProfile;
