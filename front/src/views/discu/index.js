import selection from './selction';
// import barreDiscuGroupe from './barre_discu_groupe';
import barreDiscuSolo from './barre_discu_solo';
import barreEnvoiMess from './barre_envoie_mess';
import heure from './heure_envoi';
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
        ${messG(messages)}
        ${heure(messages)}
        ${messD(messages)}
        ${messD(messages)}
        ${heure(messages)}
        ${messG(messages)}
        ${messG(messages)}
        ${messG(messages)}
        ${heure(messages)}
        ${messD(messages)}
      </div>
      ${barreEnvoiMess()}
    </div>
  </div>
  `);
};
