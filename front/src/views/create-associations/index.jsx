import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import isEmail from 'validator/lib/isEmail';
import config from '../../../config';

async function onClickAjouter() {
  const elInputNameassos = document.querySelector('#assosname');
  const elInputChoicecampus = document.querySelector('#choicecampus');
  const elInputDescription = document.querySelector('#description');
  const tempo = '@epfedu.fr';
  const elInputMailAssos = document.querySelector('#mailassos').value + tempo;
  if (isEmail(elInputMailAssos)) {
    const body = {
      name: elInputNameassos.value,
      campus: elInputChoicecampus.value,
      image_header: '',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d3/Logo_FAGE.svg/langfr-1920px-Logo_FAGE.svg.png',
      descriptionAsso: elInputDescription.value,
      descriptionTeam: 'none',
      mail: elInputMailAssos,
      phone: '+33 6.00.00.00.00.',
      socialNetworks: {
        instagram: 'none',
        discord: 'none',
        twitter: 'none',
        facebook: 'none',
        linkedin: 'none'
      }
    };

    axios.post(
      `${config.IP_API}/assoc`,
      body,
      {
        headers: {
          authorization: cookie.get('token')
        }
      }
    )
      .then(() => {
        // Vider les champs de saisie
        elInputNameassos.value = '';
        elInputChoicecampus.value = '';
        elInputDescription.value = '';
        document.querySelector('#mailassos').value = '';
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  /* else {
    console.log({
      result: 'Problem'
    });
  } */
}

function ViewCreateAssociations() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await onClickAjouter();
  };

  return (
    <div className="container text-center border my-3 border-dark p-3">
      <form onSubmit={handleSubmit}>
        <h2 className="pt-2">{'Création d\'une association'}</h2>
        <div className="input-group mb-3">
          <input type="text" className="form-control" id="assosname" placeholder="nom de l'association" aria-label="nom de l'association" aria-describedby="basic-addon2" />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="choicecampus">
            Campus
            <select className="form-select" id="choicecampus">
              <option selected>Sélectionnez...</option>
              <option value="Cachan">Cachan</option>
              <option value="Troyes">Troyes</option>
              <option value="Montpellier">Montpellier</option>
              <option value="Saint-Nazaire">Saint-Nazaire</option>
              <option value="Multicampus">Multicampus</option>
            </select>
          </label>
        </div>
        <div className="input-group mb-3">
          <textarea className="form-control h-25" rows="3" id="description" placeholder="description de l'association" aria-label="description de l'association" aria-describedby="basic-addon2" />
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" id="mailassos" placeholder="email de l'association" aria-label="email de l'association" aria-describedby="basic-addon2" />
          <span className="input-group-text" id="basic-addon2">@epfedu.fr</span>
        </div>
        <div className="row">
          <div className="col-5" />
          <div className="col-2">
            <button className="btn btn-danger" type="submit" id="valider">Valider</button>
          </div>
          <div className="col-5" />
        </div>
      </form>
    </div>
  );
}

export default ViewCreateAssociations;
