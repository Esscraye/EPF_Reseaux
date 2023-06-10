import Selection from './selction';
import DiscuGroupe from './barre_discu_groupe';
// import DiscuSolo from './barre_discu_solo';
import EnvoiMess from './barre_envoie_mess';
import Heure from './heure_envoi';
import MessG from './message_gauche';
import MessD from './message_droite';

export default () => (`
    <div class="row">
        <div class="col-3 liste-conv bg-danger">
            ${Selection()}  
        </div> 
        <div class="col-9 messages-container">
            ${DiscuGroupe()}
            <div class="messages">
                ${MessG()}
                ${Heure()}
                ${MessD()}
                ${MessD()}
                ${Heure()}
                ${MessG()}
                ${MessG()}
                ${MessG()}
                ${Heure()}
                ${MessD()}
                ${MessD()}
                ${MessD()}
                ${MessD()}
                ${MessD()}
                ${MessD()}
            </div>
            ${EnvoiMess()}
        </div>
    </div>
`);
