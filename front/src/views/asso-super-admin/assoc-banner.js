const btn = () => `
  <button type="button" class="btn btn-danger delAsso">Supprimer</button>
`;

const btn1 = () => `
  <a href="/gestMember" class="btn btn-danger Member" role="button">Membres</a>
`;

const btn2 = () => `
  <button type="button" class="btn btn-danger change" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Modifier</button>
`;

const btn3 = () => `
  <button type="button" class="btn btn-danger followAsso">Suivre</button>
`;

export default (data, permissions) => {
  const { name, logo } = data;
  const { assoc } = permissions;

  return `
    <div class="container-fluid text-center">
      <div class="row shadow-lg p-1">
        <div class="col-2">
          <img width="150" src="${logo}" alt="logo" id="logo-img">
        </div>
        <div class="col-7">
          <h3 class="pt-3">${name}</h3>
        </div>
        <div class="col-3">
          <div class="row pt-3">
            <div class="btn-group" role="group" aria-label="Basic example">
              ${assoc.delete ? btn() : ''}
              ${assoc.manage ? btn1() : ''}
              ${assoc.update ? btn2() : ''}
              ${assoc.follow ? btn3() : ''}
            </div>
          </div>    
        </div>
      </div>
    </div>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modification de l'image de l'association</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Logo</label>
                    <input type="file" class="form-control" id="logo">
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Bannière</label>
                    <input type="file" class="form-control" id="image">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="confirm">Valider les modifications</button>
            </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous">
        
    </script>
  `;
};
