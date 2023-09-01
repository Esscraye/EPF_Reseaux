export default (name, icone) => (`
  <div class="barre-discu mt-1">
    <div class="barre-intern">
      <div><img src="${icone}" class="rounded-circle" alt="..."></div>
      <p class="name-discu d-flex">${name}</p>
    </div>
    <div class="cross-discu pt-1 my-2 mx-2 text-center">
      <button type="button" class="btn btn-danger bloquer">Bloquer</button>
      <button type="button" class="close-btn" aria-label="Close">
        <img src="/images/croix.png" class="btn-fermeture">
      </button>
    </div>
  </div>
`);
