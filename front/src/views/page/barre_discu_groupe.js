export default (name, icone) => (`
  <div class="barre-discu">
    <div class="info-discu-barre mt-1">
      <div class="barre-intern">
        <div class="icone-discu mb-1"><img src="${icone}" class="rounded-circle" alt="..." width="40"></div>
        <div class="name-discu d-flex">${name}</div>
      </div>
    </div>
    <div class="cross-discu text-center my-2 pt-1">
    <button type="button" class="close-btn" aria-label="Close"><img src="/images/croix.png" class="btn-fermeture"></button>
    </div>
  </div>
`);
