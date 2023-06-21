import './index.scss';

export default () => (`
    <section>
    <form>
    <div class="container">
        <h2>Ajouter un utilisateur</h2>
      <div class="reglageD shadow-manuelle info-asso">
        <div class="me-4">
          <div class="mb-4">
            <label class="form-label">Nom</label>
            <input type="text" class="form-control" placeholder="Saisir le nom">
          </div>         
          <div class="mb-4">
            <label class="form-label">Prénom</label>
            <input type="text" class="form-control border-black"  placeholder=" Saisir le prénom">
          </div>         
          <div class="mb-4">
            <label class="form-label">Email</label>
            <input type="email" class="form-control border-black"  placeholder="Saisir l'email">
          </div>
          <div class="mb-4">
            <label class="form-label">Description</label>
            <input type="text" class="form-control border-black description" placeholder="Saisir la description">
          </div>
        </div>
        <div>         
          <div class="mb-4">
            <label class="form-label">Promo</label>
            <select class="form-select">
              <option selected>Sélectionner...</option>
              <option value="1">1A</option>
              <option value="2">2A</option>
              <option value="3">3A</option>
              <option value="4">4A</option>
              <option value="5">5A</option>
            </select>
          </div>         
          <div class="mb-4">
            <label class="form-label">Groupe de TD</label>
            <select class="form-select class">
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
            <label class="form-label">Groupe de TP</label>
            <select class="form-select grouptp">
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
            <label class="form-label">Finalisation</label>         
            <button type="button" class="btn" id="ajouter">Ajouter</button>
          </div>
        </div>
      </div>
    </div>
  </form>
  </section>
<section>
  <h2>Ajouter un groupe</h2>
  <div class ="reglageT shadow-manuelle info-asso">
    <div class="mb-4">Identifiant
      <input type="email" class="form-control border-black" placeholder="Saisir l'identifiant">
    </div> 
    <div class="mb-4">Nom du groupe
      <input type="email" class="form-control border-black" placeholder="Saisir le nom du groupe">
    </div>
    <button type="button" class="btn mb-4">Ajouter</button>
  </div>
</section>
<section>
  <h2>Supprimer un groupe</h2>
    <div class="reglageT shadow-manuelle info-asso">
      <div class="mb-4">
        <label class="form-label">Identifiant</label>
        <input type="email" class="form-control border-black" placeholder="Saisir l'identifiant">
      </div>
      <div class="mb-4">
        <label class="form-label">Nom du groupe</label>
        <input type="email" class="form-control border-black" placeholder="Saisir le nom du groupe">
      </div>
      <button type="button" class="btn mb-4">Supprimer</button>
    </div>
</section>
`);
