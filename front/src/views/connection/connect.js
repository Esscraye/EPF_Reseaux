export default () => (`
<div class="container-fluid">
<!-- Content here -->
<div class="container text-center">
  <div class="row justify-content-start">
    <div class="col-3">
      <img src="https://www.univ-lyon2.fr/medias/photo/illus-pole-asso_1594492888834-png?ID_FICHE=1006216" alt="Photo epf" width="400" height="500">
    </div>
    <div class="col-2"></div>
    <div class="col-4 colonne1">
      <div class="border bord">
        <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/e/e9/EPF_logo_2021.png/640px-EPF_logo_2021.png" alt="logo epf" width="100" height="80">
        <div align="center">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">Mot de passe</label>
            <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="mdp">
          </div>
        </div>
        <button type="button" class="btn bt">Connexion</button> 
        <p><a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Mot de passe oublié ?</a></p>
      </div>
    </div>
    
  </div>
</div>
</div>
`);
