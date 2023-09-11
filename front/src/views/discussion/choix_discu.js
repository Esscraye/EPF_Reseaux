import config from '../../../config';

export default (data) => {
  const convMessages = fetch(`${config.IP_API}/message/${data.id}`).then((res) => res.json());
  const numberMessages = convMessages.length;

  return (`
    <ul class="list-group-horizontal">
      <a href="#" class="discu-choice" id="${data.id}">
        <div class="test">
          <li class="icone-selec"><img src="${data.icon}" class="icone-cercle" alt="..."></li>
          <li class="name-selec">
            ${data.name}
            <span class="badge bg-primary rounded-pill bg-white text-black" data-message-count>${numberMessages}</span>
          </li>
        </div>
      </a>
    </ul>
  `);
};
