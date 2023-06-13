import selection from './selction';
import barreDiscuSolo from './barre_discu_solo';
import barreDiscuGroup from './barre_discu_groupe';
import barreEnvoiMess from './barre_envoie_mess';
import messG from './message_gauche';
import messD from './message_droite';

import './index.scss';

export default (data) => {
  const {
    choicesG, choicesP, soloBar, groupBar, conversations
  } = data;

  const conversationId = '21';
  const conversation = conversations.find((conv) => conv.convId === conversationId);

  return (`
    <div class="row">
      <div class="col-3 liste-conv bg-danger">
        ${selection(choicesG, choicesP)}  
      </div>
      <div class="col-9 messages-container">
        ${conversationId === '12' ? barreDiscuGroup(groupBar) : barreDiscuSolo(soloBar)}
        <div class="messages">
        ${conversation.messages
      .map((message) => (message.author.email === 'maxence.juery@epfedu.fr' ? messD(message) : messG(message)))
      .join('')}
        </div>
        ${barreEnvoiMess()}
      </div>
    </div>
  `);
};
