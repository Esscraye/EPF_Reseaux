import selection from './selction';
import barreDiscuSolo from './barre_discu_solo';
import barreEnvoiMess from './barre_envoie_mess';
// import heure from './heure_envoi';
import messG from './message_gauche';
import messD from './message_droite';

import './index.scss';

export default (data) => {
  const {
    choicesG, choicesP, soloBar, messages
  } = data;

  return (`
    <div class="row">
      <div class="col-3 liste-conv bg-danger">
        ${selection(choicesG, choicesP)}  
      </div>
      <div class="col-9 messages-container">
        ${barreDiscuSolo(soloBar)}
        <div class="messages">
          ${messages.map((message) => ((message.author.email === 'maxence.juery@epfedu.fr' ? messD(message) : messG(message)))).join('')}
        </div>
        ${barreEnvoiMess()}
      </div>
    </div>
  `);
};
