import barreDiscuGroup from './barre_discu_groupe';
import barreDiscuPerso from './barre_discu_solo';
import block from './choix_discu';

// message_gauche.js //

const messG = (messageData) => (`
<p class="fw-lighter fst-italic text-center m-0">${messageData.createdAt}</p>
<div class="row justify-content-start text-start">
    <div class="position-mess">
    <div class="fw-lighter fst-italic">${messageData.author.firstname} ${messageData.author.lastname}</div>
    <div class="message-txt-gauche">
        ${messageData.content}
    </div>
    </div>
</div>
`);

// message_droite.js //

const messD = (messageData) => (`
<p class="fw-lighter fst-italic text-center m-0">${messageData.createdAt}</p>
<div class="row justify-content-end me-1 text-end">
    <div class="position-mess">
    <div class="fw-lighter fst-italic">${messageData.author.firstname} ${messageData.author.lastname}</div>
    <div class="message-txt-droite">
        ${messageData.content} 
    </div>
    </div>
</div>
`);

// --- messages --- //

export default (data, idChat, userId) => {
  const { conversations, messages } = data;

  // selection.js //
  const groupChoices = conversations.filter((conv) => conv.members.length > 2);
  const individualChoices = conversations.filter((conv) => (conv.members.length === 2));

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

  const convParameter = idChat || '649ae40d37cf658836fdb6ee';

  const conversation = conversations.find((conv) => conv.id === convParameter);
  const convMessages = messages.filter((mess) => mess.fromDiscussion.id === convParameter);

  if (convMessages && conversation) {
    const messagesHTML = convMessages.map((message) => (message.author.id === userId ? messD(message) : messG(message))).join('');
    console.log(convMessages);
    console.log(userId);

    let barreDiscuComponent;
    if (conversation.members.length > 2) {
      barreDiscuComponent = barreDiscuGroup(conversation.name, conversation.icon);
    } else if (conversation.members.length === 2) {
      barreDiscuComponent = barreDiscuPerso(conversation.name, conversation.icon);
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
