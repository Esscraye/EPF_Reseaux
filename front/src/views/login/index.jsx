import axios from 'axios';
import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { isEmail } from 'validator';
import config from '../../../config';

async function loginUser(credentials) {
  try {
    await axios.post(`${config.IP_API}/login`, credentials, {
      withCredentials: true,
      credentials: 'include'
    }).then((response) => {
      if (response.status === 200) {
        const { xsrfToken, accessToken } = response.data;
        sessionStorage.setItem('xsrfToken', JSON.stringify(xsrfToken));
        sessionStorage.setItem('token', JSON.stringify(accessToken));
        window.location.replace(`${config.IP_FRONT}/`);
      }
    });
  } catch (error) {
    throw new Error(error);
  }
}

function ViewLogin() {
  const [email, setMail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && isEmail(email) && password) {
      await loginUser({
        email,
        password
      });
    }
  };

  return (
    <main className="password-section">
      <div className="sect-2 conn-border shadow-manuelle">
        <div>
          <img src="/assets/logo.png" alt="logo epf" width="100" height="100" />
        </div>
        <form className="formconnection" onSubmit={handleSubmit}>
          <div className="mb-3 mt-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              E-mail
              <input
                type="email"
                className="form-control emailInput"
                placeholder="Votre email"
                onChange={(e) => setMail(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Mot de passe
              <input
                type="password"
                className="form-control passwordInput"
                placeholder="Votre mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button type="submit" className="btn bt connection">Connexion</button>
          </div>
        </form>
        <Link to="/password-forgot" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Mot de passe oublié ?</Link>
      </div>
    </main>
  );
}

export default ViewLogin;
