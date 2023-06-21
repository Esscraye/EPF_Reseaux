export default (data) => (`
  <ul class="list-group-horizontal row text-center border border-dark mx-0 pb-2 mt-2 border-start-0 border-top-0 mb-0">
    <a href="#" class="discu-choice" id="${data.convId}">
      <div class="row">
        <li class="col-3 "><img src="${data.icone}" class="rounded" alt="..." width="40"></li>
        <li class="d-flex justify-content-between align-items-center bg-danger text-white col-9">
          ${data.name}
          <span class="badge bg-primary rounded-pill bg-white text-black" data-message-count>${data.messages.length}</span>
        </li>
      </div>
    </a>
  </ul>
`);
