import cookie from 'js-cookie';
import barreDiscuGroup from './barre_discu_groupe';
import barreDiscuPerso from './barre_discu_solo';
import block from './choix_discu';

const token = cookie.get('token');
let mailUserConnected = 'maxence.juery@epfedu.fr';
if (token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
  mailUserConnected = JSON.parse(jsonPayload).email;
}

const hour = (hourData) => (`
  <p class="fw-lighter fst-italic text-center m-0">${hourData}</p>
`);

// message_gauche.js //

const messG = (messageData) => (`
${hour(messageData.times)}
<div class="row justify-content-start text-start">
    <div class="position-mess">
    <div class="fw-lighter fst-italic">${messageData.author.firstName} ${messageData.author.lastName}</div>
    <div class="message-txt-gauche">
        ${messageData.text}  
    </div>
    </div>
</div>
`);

// message_droite.js //

const messD = (messageData) => (`
${hour(messageData.times)}
<div class="row justify-content-end me-1 text-end">
    <div class="position-mess">
    <div class="fw-lighter fst-italic">${messageData.author.firstName} ${messageData.author.lastName}</div>
    <div class="message-txt-droite">
        ${messageData.text} 
    </div>
    </div>
</div>
`);

// --- messages --- //

export default (data, idChat) => {
  const { conversations, messages } = data;

  // selection.js //
  const groupChoices = data.conversations.filter((conv) => conv.type === 'group');
  const individualChoices = data.conversations.filter((conv) => (conv.type === 'individual' && conv.censure === false));

  const groupChoicesHTML = groupChoices.map((conversation) => block(conversation)).join('');
  const individualChoicesHTML = individualChoices.map((conversation) => block(conversation)).join('');

  const selection = `
    <div class="row mt-1">
      <h4 class="text-white text-center mt-2 mb-2 py-2">Groupes</h4>
      ${groupChoicesHTML}
    </div>
    <div class="row mt-3">
      <h4 class="text-white text-center py-2">Individuel</h4>
      ${individualChoicesHTML}
    </div>`;
  // --- selection --- //

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
            ${selection}
          </div>
        </div>
        <div class="contener-chat-d messages-container">
          ${barreDiscuComponent}
          <div class="messages messages-size">
            ${messagesHTML}
          </div>
          <div class="row border border-secondary border-3 mt-2 me-1">
            <div class="hstack gap-3 my-2 send-message-bar">
              <input class="form-control me-auto" type="text" placeholder="Écrit ton message ici ..." aria-label="Écrit ton message ici ...">
              <button type="button" class="btn btn-secondary">Envoyer</button>
              <div class="vr"></div>
            </div>
          </div>
        </div>
      </div>
    `);
  }

  return "Aucune conversation de type 'group' ou 'individual' n'est disponible.";
};
