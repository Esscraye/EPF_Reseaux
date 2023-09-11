import React from 'react';

/* const onHandleClick = () => {
  const elOtherButton = document.querySelector('.delete-profile');
  elOtherButton.addEventListener('click', (e) => {
    e.preventDefault();
    const ConfirmEmail = document.querySelector('.confirm-email');
    if (isEmail(ConfirmEmail.value)) {
      console.log({
        email: ConfirmEmail.value
      });
    } else {
      ConfirmEmail.value = null;
      // alert('Veuillez rentrer une adresse mail valide.'); // need to be changed
    }
  });
}; */

/* const onClickModifier = () => {
  const elButton = document.querySelector('#modifier');
  // let emailprofile = localStorage.getItem('emailsearch') || 1;
  // mettre cet email pour modifier le profil
  elButton.addEventListener('click', (e) => {
    e.preventDefault();
    const elInputLastname = document.querySelector('.lastname');
    const elInputFirstname = document.querySelector('.firstname');
    const elInputEmail = document.querySelector('.email');
    const elInputDescription = document.querySelector('.description');
    // const elInputPromo = document.querySelector('.promo');
    // const elInputClass = document.querySelector('.class');
    // const elInputGrouptp = document.querySelector('.grouptp');
    const body = {};
    if (elInputEmail.value && isEmail(elInputEmail.value)) {
      body.email = elInputEmail.value;
    }
    if (elInputLastname.value) {
      body.lastname = elInputLastname.value;
    }
    if (elInputFirstname.value) {
      body.firstname = elInputFirstname.value;
    }
    if (elInputDescription.value) {
      body.description = elInputDescription.value;
    }
    /* if (elInputPromo.value) {
      body.promo = elInputPromo.options[elInputPromo.selectedIndex].text;
    }
    if (elInputClass.value) {
      body.class = elInputClass.options[elInputClass.selectedIndex].text;
    }
    if (elInputGrouptp.value) {
      body.groupetp = elInputGrouptp.options[elInputGrouptp.selectedIndex].text;
    }
    // localStorage.getItem('emailsearch'));
    else {
      console.log('Problem');
    }
  });
}; */

function Admin() {
  return (
    <div className="container">
      <div className="row">
        <h2>Modifier un utilisateur</h2>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="mb-4">
            <label className="form-label" htmlFor="lastname">
              Nom
              <input type="text" className="form-control lastname" placeholder="Saisir le nom" />
            </label>
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="firstname">
              Prénom
              <input type="text" className="form-control border-black firstname" placeholder=" Saisir le prénom" />
            </label>
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="email">
              Email
              <input type="email" className="form-control border-black email" placeholder="Saisir l'email" />
            </label>
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="description">
              Description
              <input type="text" className="form-control border-black description" placeholder="Saisir la description" />
            </label>
          </div>
        </div>
        <div className="col-6">
          <div className="mb-4">
            <label className="form-label" htmlFor="promo">
              Promo
              <select className="form-select promo">
                <option selected>Sélectionner...</option>
                <option value="1">1A</option>
                <option value="2">2A</option>
                <option value="3">3A</option>
                <option value="4">4A</option>
                <option value="5">5A</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="class">
              Groupe de TD
              <select className="form-select class">
                <option selected>Sélectionner...</option>
                <option value="1">TD E</option>
                <option value="2">TD F</option>
                <option value="3">TD G</option>
                <option value="4">TD H</option>
                <option value="5">TD I</option>
                <option value="5">TD J</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="grouptp">
              Groupe de TP
              <select className="form-select grouptp">
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
          </div>
          <div className="mb-4 d-grid ">
            <p className="form-label" htmlFor="grouptp">
              Finalisation
            </p>
            <button type="button" className="btn" id="modifier">Modifier</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
