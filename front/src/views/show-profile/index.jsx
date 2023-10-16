import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config';

const getemailuser = () => {
  const token = sessionStorage.getItem('token');
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
  return JSON.parse(jsonPayload).email;
};

function ViewShowProfile() {
  const [infoPerso, setInfoPerso] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const queryString = window.location.search;
  const url = new URLSearchParams(queryString);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const emailToSearch = url.get('email') || getemailuser();
        sessionStorage.setItem('emailsearch', emailToSearch);

        const response = await axios.get(`${config.IP_API}/user/${encodeURIComponent(emailToSearch)}`);
        setInfoPerso(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <section className="profil-intro">
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-3 container-info-prof">
            <img src={`${infoPerso.image}`} alt="Utilisateur" className="rounded-circle imageprof image-prof" id="affprofimage" />
            <div className="text-gras">
              {infoPerso.firstname}
              {' '}
              {infoPerso.lastname}
            </div>
            <div>
              <Link to="/change-profile" className="btn  btn-danger mr-2" role="button" id="btnmodifprofil">Modifier profil</Link>
            </div>
          </div>
          <div className="col-6">
            <div className="border shadow-manuelle container-profil" id="affprofborder">
              <div className="text-gras">
                Informations personnelles
              </div>
              <div className="info-profil">
                Prénom :
                {infoPerso.firstname}
              </div>
              <div className="info-profil">
                Nom :
                {infoPerso.lastname}
              </div>
              <div className="info-profil">
                Email :
                {infoPerso.email}
              </div>
              <div className="info-profil">
                Description :
                {infoPerso.description}
              </div>
            </div>
            <div className="border shadow-manuelle container-profil">
              <div className="text-gras">
                Groupes
              </div>
              <div className="info-profil">
                Promo :
                {infoPerso.promo}
              </div>
              <div className="info-profil">
                Classe :
                {infoPerso.class}
              </div>
              <div className="info-profil">
                Groupe de TP :
                {infoPerso.grouptp}
              </div>
              <div className="info-profil">
                Associations :
                {infoPerso.associations}
              </div>
            </div>
          </div>
          <div className="col-3" />
        </div>
      </div>
    </section>
  );
}

export default ViewShowProfile;