import selection from './selection';
import barreDiscuGroup from './barre_discu_groupe';
import barreDiscuPerso from './barre_discu_solo';
import barreEnvoiMess from './barre_envoie_mess';
import messG from './message_gauche';
import messD from './message_droite';

import './index.scss';

export default (data, idChat) => {
  const { conversations, messages } = data;

  const convParameter = idChat || '1';

  const conversation = conversations.find((conv) => conv.convId === convParameter);
  const convMessages = messages.filter((mess) => mess.idconv === convParameter);
  console.log(convMessages);

  if (convMessages) {
    const messagesHTML = convMessages.map((message) => (message.author.email === 'maxence.juery@epfedu.fr' ? messD(message) : messG(message))).join('');

    let barreDiscuComponent;
    if (conversation.type === 'group') {
      barreDiscuComponent = barreDiscuGroup(conversation.name, conversation.icone);
    } else if (conversation.type === 'individual') {
      barreDiscuComponent = barreDiscuPerso(conversation.name, conversation.icone);
    }

    return (`
      <div class="row">
        <div class="col-3 liste-conv bg-danger">
          ${selection(data)}
        </div>
        <div class="col-9 messages-container">
          ${barreDiscuComponent}
          <div class="messages">
            ${messagesHTML}
          </div>
          ${barreEnvoiMess()}
        </div>
      </div>
    `);
  }

  return "Aucune conversation de type 'group' ou 'individual' n'est disponible.";
};
