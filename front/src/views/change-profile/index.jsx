import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import Admin from './Admin';
import Eleve from './Eleve';

const getemailuser = () => {
  const token = localStorage.getItem('token');
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
  return JSON.parse(jsonPayload).email;
};

function ViewChangeProfile() {
  const [infoUser, setInfoUser] = useState({});
  const [role, setRole] = useState('');

  useEffect(() => {
    const getroleuser = async () => {
      const varmail = getemailuser();
      const response = await axios.get(`${config.IP_API}/user/${varmail}`);
      setInfoUser(response.data); // à changer en fonction du user affiché
      setRole(response.data.role); // à changer
    };
    getroleuser();
  }, []);

  /* const handleSubmit = async (e) => {
    e.preventDefault();
    const AcutalPassword = document.querySelector('.AcutalPassword');
    const NewPassword = document.querySelector('.NewPassword');
    const ConfirmNewMdp = document.querySelector('.ConfirmNewMdp');
    // const Description = document.querySelector('.Description');
    if (!AcutalPassword.value) {
      alert('Veuillez saisir votre mot de passe.');
    }

    if (!NewPassword.value) {
      alert('Veuillez saisir votre nouveau mot de passe.');
    }

    if (!ConfirmNewMdp.value) {
      alert('Veuillez confirmer votre nouveau mot de passe.');
    }
    if (NewPassword.value !== ConfirmNewMdp.value) {
      alert('Les mots de passe ne correspondent pas.');
    } // need to recode alert()
  }; */

  return (
    role === 'admin' ? <Admin /> : <Eleve infoUser={infoUser} />
  );
}

export default ViewChangeProfile;
