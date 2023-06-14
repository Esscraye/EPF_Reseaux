export default () => (`
  <div class="text-center">
    <div class="m-5 rectangle">
      <div class="p-4 row">
        <div class="row">
          <h3 class="fw-bold mb-3">Créer une actualité</h3>
        </div>
        <div class="row mb-3 align-items-end">
          <div class="col-9">
            <div class="form-floating">
              <input class="form-control" placeholder="Leave a comment here"  id="floatingTextareaTitle">
              <label for="floatingTextareaTitle">Title de l'article</label>
            </div>
          </div>
          <div class="col-3"></div>
        </div>
        <div class="row align-items-end">
          <div class="col-9">
            <p class="text-start">Image de l'actualité</p>
            <div class="mb-3">
              <input class="form-control rounded-start" type="file" id="formFileImage">
            </div>
          </div>
        </div>
        <div class="row mt-3 align-items-end">
          <div class="col-9">
            <div class="form-floating">
              <textarea class="form-control h-50" rows="9" placeholder="Texte" id="floatingTextareaTexte"></textarea>
              <label for="floatingTextareaTexte">Texte de l'actualité</label>
            </div>
          </div>
          <div class="col-3">
            <button type="button" class="mt-4 btn btn-danger postNewsButton">Poster l'actualité</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
