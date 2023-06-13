export default (data) => (`
  <ul class="list-group-horizontal row text-center border border-dark mx-0 pb-2 border-start-0 border-top-0 mb-0">
    <a href="#">
      <div class="row">
        <li class="col-3 "><img src="${data.photo}" class="rounded" alt="..." width="40"></li>
        <li class="d-flex justify-content-between align-items-center bg-danger text-white col-9">
          ${data.name}
          <span class="badge bg-primary rounded-pill bg-white text-black ">${data.notif}</span>
        </li>
      </div>
    </a>
  </ul>
`);
