import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import isEmail from 'validator/lib/isEmail';
import config from '../../../config';

async function onClickCreateGroup() {
  const addInputtype = document.querySelector('.type-addgroup-input');
  const addInputname = document.querySelector('.name-addgroup-input');
  if (addInputtype.value && addInputname.value) {
    const body = {
      typegroup: addInputtype.value,
      namegroup: addInputname.value,
      members: []
    };
    await axios.post(`${config.IP_API}/group`, body)
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
}

/// Fonction actuellement non fonctionnelle !
async function onClickAjouter() {
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
    await axios.post(`${config.IP_API}/user`, body, {
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
}

async function onClickDel() {
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
}

function ViewGeneralProfile() {
  const addUserSubmit = async (e) => {
    e.preventDefault();
    await onClickAjouter();
  };

  const addGroupSubmit = async (e) => {
    e.preventDefault();
    await onClickCreateGroup();
  };

  const delGroupSubmit = async (e) => {
    e.preventDefault();
    await onClickDel();
  };

  return (
    <>
      <section className="general-profile-form">
        <h2>Ajouter un utilisateur</h2>
        <form onSubmit={addUserSubmit}>
          <div>
            <label htmlFor="user-last-name" className="form-label">
              Nom
              <input type="text" id="user-last-name" className="form-control lastname mb-4" placeholder="Saisir le nom" />
            </label>
            <label htmlFor="user-first-name" className="form-label">
              Prénom
              <input type="text" id="user-first-name" className="form-control border-black firstname mb-4" placeholder=" Saisir le prénom" />
            </label>
            <label htmlFor="user-email" className="form-label">
              Email
              <input type="email" id="user-email" className="form-control border-black email mb-4" placeholder="Saisir l'email" />
            </label>
            <label htmlFor="user-descript" className="form-label">
              Description
              <input type="text" id="user-descript" className="form-control border-black description mb-4" placeholder="Saisir la description" />
            </label>
          </div>
          <div>
            <label htmlFor="user-promo" className="form-label">
              Promo
              <select id="user-promo" className="form-select promo mb-4">
                <option selected>Sélectionner...</option>
                <option value="1">1A</option>
                <option value="2">2A</option>
                <option value="3">3A</option>
                <option value="4">4A</option>
                <option value="5">5A</option>
              </select>
            </label>
            <label htmlFor="user-td" className="form-label">
              Groupe de TD
              <select id="user-td" className="form-select grouptd mb-4">
                <option selected>Sélectionner...</option>
                <option value="1">TD E</option>
                <option value="2">TD F</option>
                <option value="3">TD G</option>
                <option value="4">TD H</option>
                <option value="5">TD I</option>
                <option value="5">TD J</option>
              </select>
            </label>
            <label htmlFor="user-tp" className="form-label">
              Groupe de TP
              <select id="user-tp" className="form-select grouptp mb-4">
                <option selected>Sélectionner...</option>
                <option value="1">TP AA</option>
                <option value="2">TP AB</option>
                <option value="3">TP BA</option>
                <option value="4">TP BB</option>
                <option value="5">TP CA</option>
                <option value="6">TP CB</option>
                <option value="7">TP DA</option>
                <option value="8">TP DB</option>
              </select>
            </label>
            <div className="d-grid">
              <label htmlFor="ajouter" className="form-label">
                Finalisation
                <input type="submit" className="btn mb-4" id="ajouter" value="Ajouter" />
              </label>
            </div>
          </div>
        </form>
      </section>
      <section className="general-profile-form">
        <h2>Ajouter un groupe</h2>
        <form className="column-setting info-asso" onSubmit={addGroupSubmit}>
          <label htmlFor="id-adinput" className="form-label">
            Type de groupe (td, promo...)
            <input type="text" id="id-adinput" className="form-control border-black mb-4 type-addgroup-input" placeholder="Saisir l'identifiant" />
          </label>
          <label htmlFor="nom-adgroup-input" className="form-label">
            Nom du groupe
            <input type="text" id="nom-adgroup-input" className="form-control border-black mb-4 name-addgroup-input" placeholder="Saisir le nom du groupe" />
          </label>
          <input type="submit" className="btn mb-4 create-group-btn" value="Ajouter" />
        </form>
      </section>
      <section className="general-profile-form">
        <h2>Supprimer un groupe</h2>
        <form className="column-setting info-asso" onSubmit={delGroupSubmit}>
          <label htmlFor="id-delinput" className="form-label">
            Identifiant
            <input type="text" id="id-delinput" className="form-control border-black mb-4 id-delgroup" placeholder="Saisir l'identifiant" />
          </label>
          <label htmlFor="nom-delgroup-input" className="form-label">
            Nom du groupe
            <input type="text" id="nom-delgroupe-input" className="form-control border-black mb-4" placeholder="Saisir le nom du groupe" />
          </label>
          <input type="submit" className="btn mb-4 name-delgroup" id="delgroupbtn" value="Supprimer" />
        </form>
      </section>
    </>
  );
}

export default ViewGeneralProfile;
