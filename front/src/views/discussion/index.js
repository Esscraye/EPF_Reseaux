import cookie from 'js-cookie';
import selection from './selection';
import barreDiscuGroup from './barre_discu_groupe';
import barreDiscuPerso from './barre_discu_solo';
import barreEnvoiMess from './barre_envoie_mess';
import messG from './message_gauche';
import messD from './message_droite';

import './index.scss';

const token = cookie.get('token');
let mailUserConnected = 'maxence.juery@epfedu.fr';
if (token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
  mailUserConnected = JSON.parse(jsonPayload).email;
}

export default (data, idChat) => {
  const { conversations, messages } = data;

  const convParameter = idChat || '1';

  const conversation = conversations.find((conv) => conv.convId === convParameter);
  const convMessages = messages.filter((mess) => mess.idconv === convParameter);

  if (convMessages) {
    const messagesHTML = convMessages.map((message) => (message.author.email === mailUserConnected ? messD(message) : messG(message))).join('');

    let barreDiscuComponent;
    if (conversation.type === 'group') {
      barreDiscuComponent = barreDiscuGroup(conversation.name, conversation.icone);
    } else if (conversation.type === 'individual') {
      barreDiscuComponent = barreDiscuPerso(conversation.name, conversation.icone);
    }

    return (`
      <div class="contener-chat">
        <div class="contener-chat-g liste-conv">
          <div class="container-margin">
            ${selection(data)}
          </div>
        </div>
        <div class="contener-chat-d messages-container">
            ${barreDiscuComponent}
            <div class="messages messages-size">
              ${messagesHTML}
            </div>
            ${barreEnvoiMess()}
        </div>
      </div>
    `);
  }

  return "Aucune conversation de type 'group' ou 'individual' n'est disponible.";
};
