export default (data) => {
  const { assoc, content } = data;

  return (`
    <div class="card text-center actu my-3 shadow-manuelle">
      <div class="card-header">
        <div class="row">
          <div class="col-1">
            <img src="${assoc.logo}" class="rounded-circle" height="40" width="40" alt="photo">
          </div>
          <div class="col-3">
            <h3>${assoc.name}</h3>
          </div>
          <div class="col-8">
            <p>Featured</p>
          </div>
        </div>
      </div>
      <div class="card-body m-1 p-0">
        <div class="row">
          <div class="col-3 m-0 p-0">
            <img src="${content.img}" class="rounded img-article" alt="article">
          </div>
          <div class="col-9 mt-3">
            <h5 class="card-title titre-event">${content.title}</h5>
            <p class="card-text text-truncate">${content.text}</p>
            <a href="${content.link}" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="card-footer text-body-secondary">${content.date}</div>
    </div>
  `);
};
