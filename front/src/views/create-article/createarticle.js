const createArticle = (data) => {
  const title = data.title ? data.title : '';
  const text = data.text ? data.text : '';

  return `
    <div class="text-center">
      <div class="m-5 rectangle">
        <div class="p-4 row shadow-manuelle info-asso">
          <div class="row">
            <h3 class="fw-bold mb-5">Créer une actualité</h3>
          </div>
          <div class="row mb-4 align-items-end">
            <div class="col-9">
              <div class="form-floating">
                <input class="form-control" placeholder="Leave a comment here"  id="floatingTextareaTitle" value="${title}">
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
                <textarea class="form-control h-50" rows="9" placeholder="Texte" id="floatingTextareaTexte">${text}</textarea>
                <label for="floatingTextareaTexte">Texte de l'actualité</label>
              </div>
            </div>
            <div class="col-3">
            <a href="/assosSuperAdmin?id=${encodeURIComponent(data.idAsso)}" class="mt-4 btn btn-danger postNewsButton" onclick="saveNews()">Poster l'actualité</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default createArticle;
