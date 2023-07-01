import axios from 'axios';
import { isEmail } from 'validator';
import ViewConnection from '../views/connection';
import config from '../../config';

const Connection = class Connection {
  constructor() {
    this.el = document.body;
    this.run();
  }

  onClickConnection() {
    const form = document.querySelector('.formconnection');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const elInputEmail = document.querySelector('.emailInput');
      const elInputPassword = document.querySelector('.passwordInput');

      if (elInputEmail.value && isEmail(elInputEmail.value) && elInputPassword.value) {
        const data = {
          email: elInputEmail.value,
          password: elInputPassword.value
        };
        try {
          await axios.post(`${config.IP_API}/login`, data, {
            withCredentials: true,
            credentials: 'include'
          }).then((response) => {
            if (response.status === 200) {
              const { xsrfToken, accessToken } = response.data;
              localStorage.setItem('xsrfToken', JSON.stringify(xsrfToken));
              localStorage.setItem('token', JSON.stringify(accessToken));
              window.location.replace(`${config.IP_FRONT}/`);
            }
          });
        } catch (error) {
          throw new Error(error);
        }
      }
    });
  }

  run() {
    this.el.innerHTML = ViewConnection();
    this.onClickConnection();
  }
};

export default Connection;
