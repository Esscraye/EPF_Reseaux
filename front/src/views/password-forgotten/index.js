import './index.scss';

export default () => (`

<section  class="sec1">
  <div class="forgot-password">
    <div>
      <div class="mt-5">
        <div class="ecart">
          <h2>Mot de passe oublié</h2>
        </div>
        <div>
          <div class="ecart">
            <label for="exampleFormControlInput class="form-label class="ecart"">Veuillez renseigner votre adresse e-mail epf</label>
            <input type="email" class="form-control" placeholder="Votre email">
          </div>
          <div class="mb-3">
            <button type="button" class="btn bt">M'envoyer mon mot de passe</button>
          </div>
          <p><a href="/connection" class="deco link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Revenir à la page de connexion</a></p>
        </div>
      </div>
    </div>
  </div>
  </section>
`);
