import axios from 'axios';
import config from '../../config';
import ViewAddGroup from '../views/add-group';
import ControllerPage from './page';

const AddGroup = class AddGroup {
  constructor() {
    this.el = document.body;

    this.run();
  }

  onClickSearch() {
    const addButton = document.querySelector('#addgroupbtn');
    addButton.addEventListener('click', (e) => {
      e.preventDefault();
      const addInputid = document.querySelector('#identifiant_input');
      const addInputname = document.querySelector('#nom_groupe_input');
      if (addInputid.value && addInputname.value) {
        const body = {
          idgroup: addInputid.value,
          namegroup: addInputname.value
        };
        console.log(body);
        axios.post(`${config.IP_API}/group`, body)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        addInputid.value = ' ';
        addInputname.value = ' ';
      } else {
        console.log('Veuillez réessayer !');
      }
    });
  }

  run() {
    new ControllerPage(ViewAddGroup(this.data));
    this.onClickSearch();
  }
};

export default AddGroup;
