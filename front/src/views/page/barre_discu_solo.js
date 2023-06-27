export default (name, icone) => (`
  <div class="barre-discu">
    <div class="info-discu-barre mt-1">
      <div class="barre-intern">
        <div class="icone-discu mb-1"><img src="${icone}" class="rounded-circle" alt="..." width="40"></div>
        <div class="name-discu d-flex">${name}</div>
      </div>
    </div>
    <div class="cross-discu pt-1 my-2 mx-2 text-center">
      <div class='bloquer'>
        <button type="button" class="btn btn-danger">Bloquer</button>
      </div>
      <button type="button" class="close-btn" aria-label="Close"><img src="/images/croix.png" class="btn-fermeture"></button>
    </div>
  </div>
`);
