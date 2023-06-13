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
      const addInputid = document.querySelector('#nom_groupe_input');
      const addInputname = document.querySelector('#nom_groupe_input');
      if (addInputid.value && addInputname.value) {
        console.log({
          identifiant: addInputid.value,
          nomgroupe: addInputname.value
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
