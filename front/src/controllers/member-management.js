// import axios from 'axios';
import ControllerPage from './page';
import ViewHome from '../views/member-management';

const Home = class Home {
  constructor() {
    this.el = document.body;
    this.run();
  }

  onClickSearch() {
    const elButtonAddMembre = document.querySelector('.addMember');
    const elButtonAddRespo = document.querySelector('.addRespo');
    const resultat = document.querySelector('.labelResultat'); // membre
    const response = document.querySelector('.labelResponse'); // respo

    elButtonAddMembre.addEventListener('click', (e) => {
      e.preventDefault();
      const elInputSearch = document.querySelector('.searchInput');
      console.log('resultat', resultat);
      console.log('elInputSearch', elInputSearch);
      if (elInputSearch.value) {
        resultat.textContent = elInputSearch.value;
        elInputSearch.value = '';
      }
    });

    elButtonAddRespo.addEventListener('click', (e) => {
      e.preventDefault();
      const elInputSearch = document.querySelector('.searchInput');
      if (elInputSearch.value) {
        response.textContent = elInputSearch.value;
        elInputSearch.value = '';
      }
    });
  }

  /* async ajouterMembre() {
    const elButtonsAddMember = document.querySelectorAll('.addMember');
    console.log(elButtonsAddMember);
    console.log(elButtonsAddMember.length);
    if (elButtonsAddMember && elButtonsAddMember.length) {
      Array.from(elButtonsAddMember).forEach((button) => {
        button.addEventListener('click', async (e) => {
          e.preventDefault();
          console.log('je suis la');
          const idUser = button.getAttribute('id');
          console.log(`${config.IP_API}/user/${idUser}`);
          if (dialog) {
            try {
              // Supprimer l'association
              await axios.put(`${config.IP_API}/user/${idUser}`);
              // Supprimer toutes les actualités associées
              const response = await axios.get(`${config.IP_API}/user`);
              const filteredUser = response.data.filter((user) => user.idAsso === idUser );
              const userIds = filteredUser.map((user) => user.id);
      await Promise.all(userIds.map((userId) => axios.put(`${config.IP_API}/user/${userId}`)));
              alert('Association et actualités supprimées');
            } catch (error) {
              throw new Error("Erreur lors de la suppression de l'association et des actualités");
            }
          } else {
            alert('annulation de la demande');
          }
        });
      });
    }
  }
*/
  run() {
    new ControllerPage(ViewHome(''));
    setTimeout(() => {
      this.onClickSearch();
    }, 500);
  }
};
export default Home;
