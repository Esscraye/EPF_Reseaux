export default (name, icone) => (`
  <div class="row bg-danger border mt-0 border-dark border-end-0 border-start-0 border-top-0">
    <div class="col-4 mt-1">
      <div class="row text-center mx-0">
        <div class="col-3 mb-1"><img src="${icone}" class="rounded-circle" alt="..." width="40"></div>
        <div class="d-flex justify-content-between align-items-center bg-danger text-white col-9">${name}</div>
      </div>
    </div>
    <div class="col-7"></div>
    <div class="col-1 text-center my-2 pt-1">
    <button type="button" class="close-btn bg-danger" aria-label="Close"><img src="/images/croix.png" class="btn-fermeture"></button>
    </div>
  </div>
`);
