import axios from 'axios';
import cookie from 'js-cookie';
import { isEmail } from 'validator';
import ViewConnection from '../views/connection';
import config from '../../config';

const Connection = class Connection {
  constructor() {
    this.el = document.body;
    this.run();
  }

  onClickConnection() {
    const elBtn = document.querySelector('.connection');

    elBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const elInputEmail = document.querySelector('.emailInput');
      const elInputPassword = document.querySelector('.passwordInput');

      if (elInputEmail.value && isEmail(elInputEmail.value) && elInputPassword.value) {
        console.log({
          email: elInputEmail.value,
          mdp: elInputPassword.value
        });
        const data = {
          email: elInputEmail.value,
          password: elInputPassword.value
        };
        try {
          axios.post(`${config.IP_API}/login`, data).then((response) => {
            cookie.set('token', response.data.token);
            if (response.status === 200) {
              window.location.replace(`${config.IP_FRONT}/`);
            }
          });
        } catch (error) {
          console.error('Error fetching association data:', error);
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
