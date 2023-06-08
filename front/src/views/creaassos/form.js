export default () => (`
<!-- Container principal avec centrage horizontal et espacement supérieur -->
<div class="container text-center">
  <h2 class="pt-3">Création d'une association</h2>
  <div class="input-group mb-3">
    <!-- Champ de saisie pour le nom de l'association -->
    <input type="text" class="form-control" placeholder="nom de l'association" aria-label="nom de l'association" aria-describedby="basic-addon2">
  </div>
  <div class="input-group mb-3">
    <label class="input-group-text" for="inputGroupSelect01">Campus</label>
    <!-- Sélecteur de campus -->
    <select class="form-select" id="inputGroupSelect01">
      <option selected>Sélectionnez...</option>
      <option value="1">Cachan</option>
      <option value="2">Troyes</option>
      <option value="3">Montpellier</option>
      <option value="4">Multicampus</option>
    </select>
  </div>
  <div class="input-group mb-3">
    <!-- Champ de saisie pour la description de l'association -->
    <textarea class="form-control h-25" rows="3" placeholder="description de l'association" aria-label="description de l'association" aria-describedby="basic-addon2"></textarea>
  </div>
  <div class="input-group mb-3">
    <!-- Champ de saisie pour l'email de l'association -->
    <input type="text" class="form-control" placeholder="email de l'association" aria-label="email de l'association" aria-describedby="basic-addon2">
    <!-- Texte supplémentaire à afficher après le champ de saisie de l'email -->
    <span class="input-group-text" id="basic-addon2">@epfedu.fr</span>
  </div>
  <div class="row">
    <div class="col-11">
    </div>
    <div class="col-1">
      <button class="btn btn-primary" type="button">Valider</button>
    </div>
  </div>
</div>
`);
