export default () => (`
<main class="contener-conn">
  <div class="conn-border shadow-manuelle box-mdp">
    <div class="ecart">
      <h2>Mot de passe oublié</h2>
    </div>
    <div>
      <div class="ecart">
        <label for="exampleFormControlInput" class="form-label" class="ecart">Veuillez renseigner votre adresse e-mail epf</label>
        <input type="email" id="exampleFormControlInput" class="form-control" placeholder="Votre email">
      </div>
      <div class="mb-3">
        <button id="btnmdp" type="button" class="btn bt">Valider</button>
      </div>
      <p><a href="/connection" class="deco link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Revenir à la page de connexion</a></p>
    </div>
  </div>
</main>
`);
