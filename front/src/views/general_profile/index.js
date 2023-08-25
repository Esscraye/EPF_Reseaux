export default () => (`
<section class="general-profile-form">
  <h2>Ajouter un utilisateur</h2>
  <form class="row-setting info-asso">
    <div>
      <label for="user-last-name" class="form-label">Nom</label>
      <input type="text" id="user-last-name" class="form-control lastname mb-4" placeholder="Saisir le nom">
      <label for="user-first-name" class="form-label">Prénom</label>
      <input type="text" id="user-first-name" class="form-control border-black firstname mb-4"  placeholder=" Saisir le prénom">
      <label for="user-email" class="form-label">Email</label>
      <input type="email" id="user-email" class="form-control border-black email mb-4"  placeholder="Saisir l'email">
      <label for="user-descript" class="form-label">Description</label>
      <input type="text" id="user-descript" class="form-control border-black description mb-4" placeholder="Saisir la description">
    </div>
    <div>         
      <label for="user-promo" class="form-label">Promo</label>
      <select id="user-promo" class="form-select promo mb-4">
        <option selected>Sélectionner...</option>
        <option value="1">1A</option>
        <option value="2">2A</option>
        <option value="3">3A</option>
        <option value="4">4A</option>
        <option value="5">5A</option>
      </select>
      <label for="user-td" class="form-label">Groupe de TD</label>
      <select id="user-td" class="form-select class mb-4">
        <option selected>Sélectionner...</option>
        <option value="1">TD E</option>
        <option value="2">TD F</option>
        <option value="3">TD G</option>
        <option value="4">TD H</option>
        <option value="5">TD I</option>
        <option value="5">TD J</option>
      </select>
      <label for="user-tp" class="form-label">Groupe de TP</label>
      <select id="user-tp" class="form-select grouptp mb-4">
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
      <div class="d-grid">
        <label for="ajouter" class="form-label">Finalisation</label>
        <input type="submit" class="btn mb-4" id="ajouter" value="Ajouter">
      </div>
    </div>
  </form>
</section>
<section class="general-profile-form">
  <h2>Ajouter un groupe</h2>
  <form class ="column-setting info-asso">
      <label for="id-input" class="form-label">Identifiant</label>
      <input type="text" id="id-input" class="form-control border-black mb-4" placeholder="Saisir l'identifiant">
      <label for="nom-group-input" class="form-label">Nom du groupe</label>
      <input type="text" id="nom-group-input" class="form-control border-black mb-4" placeholder="Saisir le nom du groupe">
      <input type="submit" class="btn mb-4 " id="addgroup" value="Ajouter">
  </form>
</section>
<section class="general-profile-form">
  <h2>Supprimer un groupe</h2>
  <form class="column-setting info-asso">
    <label for="id-input" class="form-label">Identifiant</label>
    <input type="text" id="id-input" class="form-control border-black mb-4" placeholder="Saisir l'identifiant">
    <label for="nom-group-input" class="form-label">Nom du groupe</label>
    <input type="text" id="nom-groupe-input" class="form-control border-black mb-4" placeholder="Saisir le nom du groupe">
    <input type="submit" class="btn mb-4" id="delgroupbtn" value="Supprimer">
  </form>
</section>
`);
