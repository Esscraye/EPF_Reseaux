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
    choicesG, choicesP, soloBar, hour, rightMess, leftMess, sender
  } = data;

  return (`
  <div class="row">
    <div class="col-3 liste-conv bg-danger">
      ${selection(choicesG, choicesP)}  
    </div>
    <div class="col-9 messages-container">
      ${barreDiscuSolo(soloBar)}
      <div class="messages">
        ${messG(leftMess, sender)}
        ${heure(hour)}
        ${messD(rightMess, sender)}
        ${messD(rightMess, sender)}
        ${heure(hour)}
        ${messG(leftMess, sender)}
        ${messG(leftMess, sender)}
        ${messG(leftMess, sender)}
        ${heure(hour)}
        ${messD(rightMess, sender)}
      </div>
      ${barreEnvoiMess()}
    </div>
  </div>
  `);
};
