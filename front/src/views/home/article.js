export default (newsItem, association) => {
  const {
    img, title, text, date
  } = newsItem;
  const { name, logo, id } = association;

  return (`
    <div class="card text-center actu my-3">
      <div class="card-header">
        <div class="row">
          <div class="col-1">
            <img src="${logo}" class="rounded-circle" height="40" width="40" alt="photo">
          </div>
          <div class="col-3">
            <h3>${name}</h3>
          </div>
          <div class="col-8">
            <h3>${title}</h3>
          </div>
        </div>
      </div>
      <div class="card-body m-1 p-0">
        <div class="row">
          <div class="col-3 m-0 p-0">
            <img src="${img}" class="rounded img-article" alt="article">
          </div>
          <div class="col-9 mt-3">
            <p class="card-text text-truncate">${text}</p>
            <a href="/assosSuperAdmin?id=${encodeURIComponent(id)}" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="card-footer text-body-secondary">${date}</div>
    </div>
  `);
};
