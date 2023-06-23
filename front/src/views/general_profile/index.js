export default () => (`
<section class="s-space">
  <form>
    <div class="">
      <h2 class="title-underline-admin">Ajouter un utilisateur</h2>
      <div class="reglageD shadow-manuelle info-asso">
        <div class="me-4 size-colomn">
          <div class="mb-4">
            <label class="form-label">Nom</label>
            <input type="text" class="form-control lastname" placeholder="Saisir le nom">
          </div>         
          <div class="mb-4">
            <label class="form-label">Prénom</label>
            <input type="text" class="form-control border-black firstname"  placeholder=" Saisir le prénom">
          </div>         
          <div class="mb-4">
            <label class="form-label">Email</label>
            <input type="email" class="form-control border-black email"  placeholder="Saisir l'email">
          </div>
          <div class="mb-4">
            <label class="form-label">Description</label>
            <input type="text" class="form-control border-black description" placeholder="Saisir la description">
          </div>
        </div>
        <div class="size-colomn">         
          <div class="mb-4">
            <label class="form-label">Promo</label>
            <select class="form-select promo">
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

<section class="s-space">
  <h2 class="title-underline-admin">Ajouter un groupe</h2>
  <div class ="reglageT shadow-manuelle info-asso">
    <div class="size-colomn2">
      <div class="mb-4">Identifiant
          <input type="email" id="id_input" class="form-control border-black" placeholder="Saisir l'identifiant">
        </div> 
        <div class="mb-4">Nom du groupe
          <input type="email" id="nom_group_input" class="form-control border-black" placeholder="Saisir le nom du groupe">
        </div>
        <div class="reglageD">
          <button type="button" class="btn mb-4" id="addgroup">Ajouter</button>
        </div>
      </div>
  </div>
</section>

<section class="s-space">
  <h2 class="title-underline-admin">Supprimer un groupe</h2>
    <div class="reglageT shadow-manuelle info-asso">
      <div class="size-colomn2">
        <div class="mb-4">Identifiant
          <input type="email" id="id_input" class="form-control border-black" placeholder="Saisir l'identifiant">
        </div>
        <div class="mb-4">Nom du groupe
          <input type="email" id="#nom_groupe_input" class="form-control border-black" placeholder="Saisir le nom du groupe">
        </div>
        <div class="reglageD">
          <button type="button" class="btn mb-4" id="delgroupbtn">Supprimer</button>
        </div>
      </div>
    </div>
</section>
`);
