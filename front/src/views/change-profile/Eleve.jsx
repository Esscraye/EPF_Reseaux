import React from 'react';
import propTypes from 'prop-types';

function Eleve(props) {
  const { infoUser } = props;
  const { firstname, lastname } = infoUser;
  return (
    <>
      <div className="recherche-profil">
        <section className="shadow-manuelle contener-show-profile">
          <img src="" className="image-proportionnelle" alt="profil" />
          <button className="btn btn-outline-success modif-profil" type="submit">Modifier</button>
          <h1 className="info-profil">
            {firstname}
            {' '}
            {lastname}
          </h1>
          <h1 className="info-profil">Promo</h1>
          <button className="btn btn-outline-success modif-profil" type="submit">Profil</button>
        </section>
        <section className="shadow-manuelle p-2 contener-show-profile2">
          <div className="taille-modif">
            Mot de passe actuel
            <input className="form-control me-2 AcutalPassword" type="search" aria-label="Search" />
          </div>
          <div className="taille-modif">
            Nouveau mot de passe
            <input className="form-control me-2 NewPassword" type="search" aria-label="Search" />
          </div>
          <div className="taille-modif">
            Confirmation du mot de passe
            <input className="form-control me-2 ConfirmNewMdp" type="search" aria-label="Search" />
          </div>
          <div className="form-floating taille-modif">
            <label htmlFor="floatingTextarea">
              Description
              <textarea className="form-control Description" placeholder="Leave a comment here" id="floatingTextarea" />
            </label>
            <div className="position-btn-modif">
              <button className="btn btn-outline-success enregistrer-modif submit" type="submit">Enregistrer vos modifications</button>
            </div>
          </div>
        </section>
      </div>
      <div className="recherche-profil2">
        <section className="shadow-manuelle contener-show-profile3 ">
          <p>
            Confirmez
            {" l'email :"}
          </p>
          <div className="form-taille"><input className="form-control confirm-email" type="search" aria-label="Search" /></div>
          <div><button className="btn btn-outline-success delete-profile" type="submit">Supprimer le profil</button></div>
        </section>
      </div>
    </>
  );
}

Eleve.propTypes = {
  infoUser: propTypes.shape({
    firstname: propTypes.string.isRequired,
    lastname: propTypes.string.isRequired
  }).isRequired
};

export default Eleve;
