import { isEmail } from 'validator';
import ViewPasswordForgot from '../views/password-forgotten';

function generateRandomPassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';

  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

const PasswordForgot = class PasswordForgot {
  constructor(content) {
    this.el = document.body;
    this.content = content;
    this.run();
  }

  onClickForgotPassword() {
    const elInput = document.querySelector('#exampleFormControlInput');
    const elBtn = document.querySelector('#btnmdp');

    elBtn.addEventListener('click', () => {
      if (elInput.value && isEmail(elInput.value)) {
        const email = elInput.value;

        // Génération d'un mot de passe temporaire
        const temporaryPassword = generateRandomPassword(8);

        // Construction du contenu de l'email
        const emailSubject = 'Mot de passe temporaire';
        const emailBody = `Votre mot de passe temporaire est : ${temporaryPassword}`;
        const emailContent = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        // Ouvre le client de messagerie par défaut avec l'email pré-rempli
        window.location.href = emailContent;

        elInput.value = '';
      } else {
        console.log('Veuillez fournir une adresse email valide.');
      }
    });
  }

  run() {
    this.el.innerHTML = ViewPasswordForgot(this.content);
    this.onClickForgotPassword();
  }
};

export default PasswordForgot;
