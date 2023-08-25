export default () => (`
<main class="password-section">
  <div class="sect-2 conn-border shadow-manuelle box-mdp">
    <div class="bottom-space">
      <h2>Mot de passe oublié</h2>
    </div>
    <div>
      <div class="bottom-space">
        <label for="exampleFormControlInput" class="form-label" class="ecart">Veuillez renseigner votre adresse e-mail epf</label>
        <input type="email" id="exampleFormControlInput" class="form-control" placeholder="Votre email">
      </div>
      <div class="mb-3">
        <button id="btnmdp" type="button" class="btn bt">Valider</button>
      </div>
      <p><a href="/connection" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Revenir à la page de connexion</a></p>
    </div>
  </div>
</main>
`);
