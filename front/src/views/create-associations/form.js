export default () => (`
  <div class="container text-center border my-3 border-dark p-3">
    <h2 class="pt-2">Création d'une association</h2>
    <form>
      <div class="input-group mb-3">
        <input type="text" class="form-control" id="assosname" placeholder="Nom de l'association" aria-label="nom de l'association" aria-describedby="basic-addon2">
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="choicecampus">Campus</label>
        <select class="form-select" id="choicecampus">
          <option selected>Sélectionnez...</option>
          <option value="Cachan">Cachan</option>
          <option value="Troyes">Troyes</option>
          <option value="Montpellier">Montpellier</option>
          <option value="Saint-Nazaire">Saint-Nazaire</option>
          <option value="Multicampus">Multicampus</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <textarea class="form-control h-25" rows="3" id="description" placeholder="description de l'association" aria-label="description de l'association" aria-describedby="basic-addon2"></textarea>
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" id="mailassos" placeholder="email de l'association" aria-label="email de l'association" aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">@epfedu.fr</span>
      </div>
      <div class="row">
        <div class="col-5"></div>
        <div class="col-2">
          <button class="btn btn-danger" type="button" id="valider">Valider</button>
        </div>
        <div class="col-5"></div>
      </div>
    </form>
  </div>
`);
