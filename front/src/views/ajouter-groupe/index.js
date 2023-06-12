import Header from '../page/header';
import Footer from '../page/footer';

export default () => (`
<header>
    ${Header()}
</header>
<main>
  <div align = "center" class="divcent">
      <div class ="ajt_groupe">
          <h2>Ajouter un groupe</h2>
      </div>
      <div class="mb-4">
          <label for="exampleFormControlInput1" class="form-label">Identifiant</label>
          <input type="email" class="form-control border-black" id="exampleFormControlInput1" placeholder="Saisir l'identifiant">
      </div>
      <div class="mb-4">
          <label for="exampleFormControlInput2" class="form-label">Nom du groupe</label>
          <input type="email" class="form-control border-black" id="exampleFormControlInput2" placeholder="Saisir le nom du groupe">
      </div>
      <button type="button" class="btn">Ajouter</button>
  </div>
</main>
<footer>
    ${Footer()}
</footer>
`);
