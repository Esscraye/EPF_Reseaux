import './index.scss';

export default () => (`
<main class="grid-connect">
<section class="sect-1">
  <img class="image-connect" src="https://www.univ-lyon2.fr/medias/photo/illus-pole-asso_1594492888834-png?ID_FICHE=1006216" alt="Photo epf">
</section>
<section class="sect-2">
  <div>
    <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/e/e9/EPF_logo_2021.png/640px-EPF_logo_2021.png" alt="logo epf" width="100" height="80">
  </div>
  <div align="center">
    <div class="mb-3 mt-1">
      <label for="exampleFormControlInput1" class="form-label">E-mail</label>
      <input type="email" class="form-control exampleFormControlInput1" placeholder="Votre email">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput2" class="form-label">Mot de passe</label>
      <input type="password" class="form-control exampleFormControlInput2" placeholder="Votre mot de passe">
    </div>
  </div>
  <div>
    <button type="button" class="btn bt">Connexion</button> 
  </div>
    <a href="/password-forgot" class="underline-connect link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Mot de passe oublié ?</a>

</section>
</main>
`);
