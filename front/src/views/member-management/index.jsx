import React from 'react';
import Member from './Member';
import Respo from './Respo';

/* const onClickSearch = () =>{
  const elButtonAddMembre = document.querySelector('.addMember');
  const elButtonAddRespo = document.querySelector('.addRespo');
  const resultat = document.querySelector('.labelResultat'); // membre
  const response = document.querySelector('.labelResponse'); // respo

  elButtonAddMembre.addEventListener('click', (e) => {
    e.preventDefault();
    const elInputSearch = document.querySelector('.searchInput');
    // console.log('resultat', resultat);
    // console.log('elInputSearch', elInputSearch);
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
} */

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

function ViewMemberManagement(data) {
  const resultat = data;
  return (
    <>
      <div className="container text-center">
        <h2 className="pt-2">Indiquez nom, prénom ou adresse mail.</h2>
        <form className="d-flex" role="search">
          <input className="form-control me-2 searchInput" style={{ 'background-color': 'white' }} type="search" placeholder="Recherche" aria-label="Search" />
        </form>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="pt-4">Liste des Responsables</h4>
            <Respo data={resultat} />
            <Respo data={resultat} />
            <Respo data={resultat} />
          </div>
          <div className="col">
            <h4 className="pt-4">Liste des Membres</h4>
            <Member data={resultat} />
            <Member data={resultat} />
            <Member data={resultat} />
          </div>
        </div>
        <div className="row">
          <div className="col-8" />
          <div className="col-4" />
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary addMember">Ajouter Membre</button>
              <button type="button" className="btn btn-primary addRespo">Ajouter Responsable</button>
            </div>
            <div className="col-6" />
            <button type="button" className="btn btn-primary">Supprimer Membre/Responsable</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewMemberManagement;
