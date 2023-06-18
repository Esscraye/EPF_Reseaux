import axios from 'axios';
import ViewDelGroup from '../views/delete-group';
import ControllerPage from './page';

const DelGroup = class DelGroup {
  constructor() {
    this.el = document.body;

    this.run();
  }

  onClickSearch() {
    const delButton = document.querySelector('#addgroupbtn');
    delButton.addEventListener('click', (e) => {
      e.preventDefault();
      const delInputid = document.querySelector('#nom_groupe_input');
      const delInputname = document.querySelector('#nom_groupe_input');
      if (delInputid.value && delInputname.value) {
        const body = {
          iddelgroup: delInputid.value,
          namedelgroup: delInputname.value
        };
        axios.post('http://127.0.0.1:3000/group', body)
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
    this.onClickSearch();
  }
};

export default DelGroup;
