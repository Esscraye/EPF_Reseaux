import axios from 'axios';
import config from '../../config';
import ViewDelGroup from '../views/delete-group';
import ControllerPage from './page';

const DelGroup = class DelGroup {
  constructor() {
    this.el = document.body;

    this.run();
  }

  onClickDel() {
    const delButton = document.querySelector('#addgroupbtn');
    delButton.addEventListener('click', (e) => {
      e.preventDefault();
      const delInputid = document.querySelector('#identifiant_input');
      const delInputname = document.querySelector('#nom_groupe_input');
      if (delInputid.value && delInputname.value) {
        const idgr = delInputid.value;
        const namegr = delInputname.value;
        console.log(idgr);
        console.log(namegr);
        axios.delete(`${config.IP_API}/group/?idgroup=${idgr}&namegroup=${namegr}`)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        delInputid.value = ' ';
        delInputname.value = ' ';
      } else {
        console.log('Veuillez réessayer !');
      }
    });
  }

  run() {
    new ControllerPage(ViewDelGroup(this.data));
    this.onClickDel();
  }
};

export default DelGroup;
