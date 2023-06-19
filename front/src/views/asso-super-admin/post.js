const btn = () => (`
  <div>
    <button type="button" class="btn btn-danger changeActu">Modifier</button>
  </div>
`);

const btn2 = () => (`
  <div>
    <button type="button" class="btn btn-danger delActu">Supprimer</button>
  </div>
`);

export default (data, permissions) => {
  const {
    img, title, text, date
  } = data;
  const { news } = permissions;
  return (`
    <div class="card m-2">
      <div class="row g-0 my-1">
        <div class="col-3">
          <img src="${img}" width="200" height="200" class=" rounded-start" alt="image_du_post">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text}</p>
            <p class="card-text"><small class="text-body-secondary">${date}</small></p>
          </div>
        </div>
        <div class="col-md-3 d-grid mt-3">
          <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
            ${news.update ? btn() : ''}
            ${news.delete ? btn2() : ''}
          </div>
        </div>
      </div>
    </div>  
  `);
};
