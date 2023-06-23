const btn = () => (`
  <button type="button" class="btn btn-danger changeContact" data-bs-toggle="modal" data-bs-target="#contact-form">Modifier</button>
`);

export default (data, permissions) => {
  const {
    mail, phone, socialNetworks
  } = data;
  const { assoc } = permissions;
  return (`
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-2">
          <p>Contact us :</p>
        </div>
        <div class="col-2">
          <p>${mail}</p>
        </div>
        <div class="col-2">
          <p>${phone}</p>
        </div>
        <div class="col-2">
          <p>Réseaux sociaux :</p>
        </div>
        <div class="col-2">
          <a href="https://www.instagram.com/${socialNetworks.instagram}" target="_blank" class=""><i class="ri-instagram-fill"></i></a>
          <a href="${socialNetworks.discord}" target="_blank" class=""><i class="ri-discord-fill"></i></a>
          <a href="${socialNetworks.twitter}" target="_blank" class=""><i class="ri-twitter-fill"></i></a>
          <a href="${socialNetworks.facebook}" target="_blank" class=""><i class="ri-facebook-box-fill"></i></a>
          <a href="${socialNetworks.linkedin}" target="_blank" class=""><i class="ri-linkedin-box-fill"></i></a>
        </div>
        <div class="col-2">
          ${assoc.update ? btn() : ''}
        </div>
      </div>
    </div>

    <div class="modal fade" id="contact-form" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modification de l'image de l'association</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon2">e-mail</span>
              <input type="text" class="form-control" aria-describedby="basic-addon2" value="${mail}">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon2">téléphone</span>
              <input type="text" class="form-control" aria-describedby="basic-addon3" value="${phone}">
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" aria-describedby="basic-addon4" value="${socialNetworks.instagram}">
              <span class="input-group-text" id="basic-addon2">Instagram</span>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" aria-describedby="basic-addon5" value="${socialNetworks.discord}">
              <span class="input-group-text" id="basic-addon2">Discord</span>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" aria-describedby="basic-addon6" value="${socialNetworks.twitter}">
              <span class="input-group-text" id="basic-addon2">Twitter</span>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" aria-describedby="basic-addon7" value="${socialNetworks.facebook}">
              <span class="input-group-text" id="basic-addon2">Facebook</span>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" aria-describedby="basic-addon8" value="${socialNetworks.linkedin}">
              <span class="input-group-text" id="basic-addon2">LinkedIn</span>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            <button type="button" class="btn btn-primary validerReso" data-bs-dismiss="modal" id="confirm-contact">Valider les modifications</button>
          </div>
        </div>
      </div>
    </div>
  `);
};
