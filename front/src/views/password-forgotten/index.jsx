import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import config from '../../../config';

function generateRandomPassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';

  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

function sendEmail(email, password) {
  const serviceId = config.EMAILJS_SERVICE_ID;
  const templateId = config.EMAILJS_TEMPLATE_ID;
  const publicKey = config.EMAILJS_PUBLIC_KEY;
  const templateParams = {
    to_email: email,
    to_name: email.split('@')[0].replace('.', ' '),
    message: password
  };
  emailjs.send(serviceId, templateId, templateParams, publicKey);
}

function ViewPasswordForgotten() {
  const [email, setMail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && email.endwith('@epfedu.fr')) {
      const password = generateRandomPassword(16);
      sendEmail(email, password);
    }

    // await axios.post('/api/password-forgotten', { email })
  };

  return (
    <main className="password-section">
      <div className="sect-2 conn-border shadow-manuelle box-mdp">
        <div className="bottom-space">
          <h2>Mot de passe oublié</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5"
        >
          <label htmlFor="exampleFormControlInput" className="form-label ecart">
            Veuillez renseigner votre adresse e-mail epf
            <input
              type="email"
              id="exampleFormControlInput"
              className="form-control"
              placeholder="Votre email"
              onChange={(e) => setMail(e.target.value)}
            />
          </label>
          <button id="btnmdp" type="button" className="btn bt">Valider</button>
        </form>
        <Link Link to="/login" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Revenir à la page de connexion</Link>
      </div>
    </main>
  );
}

export default ViewPasswordForgotten;
