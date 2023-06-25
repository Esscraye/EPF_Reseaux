export default () => (`
<main class="contener-conn">
  <div class="sect-2 conn-border shadow-manuelle">
    <div>
      <img src="/images/logo.png" alt="logo epf" width="100" height="100">
    </div>
    <form align="center formconnection">
      <div class="mb-3 mt-1">
        <label for="exampleFormControlInput1" class="form-label">E-mail</label>
        <input type="email" class="form-control emailInput" placeholder="Votre email">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label">Mot de passe</label>
        <input type="password" class="form-control passwordInput" placeholder="Votre mot de passe">
      </div>
      <div>
        <button type="submit" class="btn bt connection">Connexion</button> 
      </div>
    </form>
    <a href="/password-forgot" class="underline-connect link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Mot de passe oublié ?</a>
  </div>
</main>
`);
