export default (data) => {
  const { assoc } = data;
  return (`
    <div class="col d-flex contener-manuelle">
      <a href="/assosSuperAdmin" class="card card-link m-3 shadow-manuelle box-manuelle">
          <img src="${assoc.logo}" class="card-img-top img-manuelle" alt="logo_assos">
          <div class="card-body">
            <h5 class="card-title titre-manuelle">${assoc.name}</h5>
            <p class="card-text text-manuelle">${assoc.description}</p>
          </div>
      </a>
    </div>
  `);
};
