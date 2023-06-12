export default (data) => {
  const { assoc } = data;
  return `
    <div class="col d-flex">
      <a href="https://www.example.com" class="card card-link m-3 text-decoration-none text-reset">
          <img src="${assoc.logo}" class="card-img-top" alt="logo_assos">
          <div class="card-body">
              <h5 class="card-title">${assoc.title}</h5>
              <p class="card-text">${assoc.description}</p>
          </div>
      </a>
    </div>`;
};
