import './index.scss';

export default () => (`
  <div id="forgot-password" class="container">
    <div class="row">
      <div class="col part-g">
        <div class="container-photo">
          <img class=imgconnect src="https://www.univ-lyon2.fr/medias/photo/illus-pole-asso_1594492888834-png?ID_FICHE=1006216" alt="Photo epf"  width="70%" height="95%">
        </div>
      <div/>
      <div class="col mt-5 text-center">
        <div class="row">
          <h2>Mot de passe oublié</h2>
        </div>
        <div class="row">
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">Veuillez renseigner votre adresse e-mail epf</label>
            <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="email">
          </div>
          <div class="mb-3">
            <button type="button" class="btn bt">M'envoyer mon mot de passe</button>
          </div>
          <p><a href="/connection" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Revenir à la page de connexion</a></p>
        </div>
      </div>
    </div>
  </div>
`);
