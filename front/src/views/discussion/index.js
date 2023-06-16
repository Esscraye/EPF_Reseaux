import selection from './selection';
import barreDiscuGroup from './barre_discu_groupe';
import barreDiscuPerso from './barre_discu_solo';
import barreEnvoiMess from './barre_envoie_mess';
import messG from './message_gauche';
import messD from './message_droite';

import './index.scss';

let convParameter = '1';

function handleConversationClick(event) {
  const convClass = event.target.classList[0];
  const convNumber = convClass.split('-')[1];
  convParameter = convNumber;
  console.log(convParameter);
}

const conversationLinks = document.querySelectorAll('a[data-conv-id]');

conversationLinks.forEach((link) => {
  link.addEventListener('click', handleConversationClick);
});

export default (data) => {
  const { conversations } = data;

  const conversation = conversations.find((conv) => conv.convId === convParameter);

  if (conversation) {
    const messagesHTML = conversation.messages.map((message) => (message.author.email === 'maxence.juery@epfedu.fr' ? messD(message) : messG(message))).join('');

    let barreDiscuComponent;
    if (conversation.type === 'group') {
      barreDiscuComponent = barreDiscuGroup(conversation.name, conversation.icone);
    } else if (conversation.type === 'individual') {
      barreDiscuComponent = barreDiscuPerso(conversation.name, conversation.icone);
    }

    return (`
      <div class="row">
        <div class="col-3 liste-conv bg-danger">
          ${selection(conversations)}  
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
