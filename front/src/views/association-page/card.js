export default (data) => {
  const assoc = data;
  return (`
    <div class="col d-flex contener-manuelle">
      <a href="/assosSuperAdmin?id=${encodeURIComponent(assoc.id)}" class="card card-link m-3 shadow-manuelle box-manuelle">
          <div class="aspect-ratio-wrapper">
            <img src="${assoc.logo}" class="card-img-top img-manuelle" alt="logo_assos">
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title titre-manuelle">${assoc.name}</h5>
            <p class="card-text text-manuelle">${assoc.descriptionAsso}</p>
          </div>
      </a>
    </div>
  `);
};
