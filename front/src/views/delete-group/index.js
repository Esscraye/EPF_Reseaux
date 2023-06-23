export default () => (`
  <div align = "center" class="divcent" id ="addgr">
    <div class ="ajt_groupe">
      <h2 id="txtaddbtn">Supprimer un groupe</h2>
    </div>
    <div class="mb-4">
      <label for="exampleFormControlInput1" class="form-label">Identifiant</label>
      <input type="email" class="form-control border-black" id="identifiant_input" placeholder="Saisir l'identifiant">
    </div>
    <div class="mb-4">
      <label for="exampleFormControlInput2" class="form-label">Nom du groupe</label>
      <input type="email" class="form-control border-black" id="nom_groupe_input" placeholder="Saisir le nom du groupe">
    </div>
    <button type="button" class="btn mb-5" id="addgroupbtn">Supprimer</button>
  </div>
`);
