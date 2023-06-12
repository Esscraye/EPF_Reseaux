export default () => (`
  <div class="container">
    <div class="row">
      <h2>Modifier un utilisateur</h2>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="mb-4">
          <label class="form-label" for="lastname">Nom</label>
          <input type="text" class="form-control" id="lastname" placeholder="Saisir le nom">
        </div>         
        <div class="mb-4">
          <label class="form-label" for="firstname">Prénom</label>
          <input type="text" class="form-control border-black" id="firstname" placeholder=" Saisir le prénom">
        </div>         
        <div class="mb-4">
          <label class="form-label" for="email">Email</label>
          <input type="email" class="form-control border-black" id="email" placeholder="Saisir l'email">
        </div>
        <div class="mb-4">
          <label class="form-label" for="description">Description</label>
          <input type="text" class="form-control border-black" id="description" placeholder="Saisir la description">
        </div>
      </div>
      <div class="col-6">         
        <div class="mb-4">
          <label class="form-label" for="promo">Promo</label>
          <select class="form-select" id="promo">
            <option selected>Sélectionner...</option>
            <option value="1">1A</option>
            <option value="2">2A</option>
            <option value="3">3A</option>
            <option value="4">4A</option>
            <option value="5">5A</option>
          </select>
        </div>         
        <div class="mb-4">
          <label class="form-label" for="class">Groupe de TD</label>
          <select class="form-select" id="class">
            <option selected>Sélectionner...</option>
            <option value="1">TD E</option>
            <option value="2">TD F</option>
            <option value="3">TD G</option>
            <option value="4">TD H</option>
            <option value="5">TD I</option>
            <option value="5">TD J</option>
          </select>
        </div>           
        <div class="mb-4">
          <label class="form-label" for="grouptp">Groupe de TP</label>
          <select class="form-select" id="grouptp">
            <option selected>Sélectionner...</option>
            <option value="1">TP AA</option>
            <option value="2">TP AB</option>
            <option value="3">TP BA</option>
            <option value="4">TP BB</option>
            <option value="5">TP CA</option>
            <option value="6">TP CB</option>
            <option value="7">TP DA</option>
            <option value="8">TP DB</option>
          </select>
        </div>
        <div class="mb-4 d-grid ">
          <label class="form-label" for="grouptp">Finalisation</label>         
          <button type="button" class="btn">Modifier</button>
        </div>
      </div>
    </div>
  </div>
`);
