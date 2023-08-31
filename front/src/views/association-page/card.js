export default (data) => {
  const assoc = data;
  return (`
    <div class="col d-flex asso-contener">
      <a href="/assosSuperAdmin?id=${encodeURIComponent(assoc.id)}" class="card card-link m-3 asso-box">
          <div class="aspect-ratio-wrapper">
            <img src="${assoc.logo}" class="card-img-top" alt="logo_assos">
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title asso-title">${assoc.name}</h5>
            <p class="card-text">${assoc.descriptionAsso}</p>
          </div>
      </a>
    </div>
  `);
};
