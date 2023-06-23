import config from '../../../config';

const fetchMess = await fetch(`${config.IP_API}/message/`);
const messages = await fetchMess.json();

export default (data) => {
  const convMessages = messages.filter((mess) => mess.idconv === data.convId);
  const numberMessages = convMessages.length;

  return (`
    <ul class="list-group-horizontal">
      <a href="#" class="discu-choice" id="${data.convId}">
        <div class="test">
          <li class="icone-selec"><img src="${data.icone}" class="icone-cercle" alt="..."></li>
          <li class="name-selec">
            ${data.name}
            <span class="badge bg-primary rounded-pill bg-white text-black" data-message-count>${numberMessages}</span>
          </li>
        </div>
      </a>
    </ul>
  `);
};
