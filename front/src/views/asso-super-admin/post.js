const btn = () => (`
  <div>
    <button type="button" class="btn btn-danger ModifierActu">Modifier</button>
  </div>
`);

const btn2 = () => (`
  <div>
    <button type="button" class="btn btn-danger SupprimerActu">Supprimer</button>
  </div>
`);

export default (data, permissions) => {
  const {
    title, text, img, date
  } = data;
  const { news } = permissions;
  return (`
    <div class="card m-2">
      <div class="row g-0 my-1">
        <div class="col-3">
          <img src="${img}" width="200" height="200" class=" rounded-start" alt="...">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text}</p>
            <p class="card-text"><small class="text-body-secondary">${date}</small></p>
          </div>
        </div>
        <div class="col-md-3 d-grid mt-3">
          ${news.update ? btn() : ''}
          ${news.delete ? btn2() : ''}
          <div>
            <button type="button" class="btn btn-danger VoirActu">Voir</button>
          </div>
        </div>
      </div>
    </div>  
  `);
};
