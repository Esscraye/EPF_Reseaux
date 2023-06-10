import Nav from './nav';
import Foot from './foot';
import Actu from './Actu';
import DescriptionAsso from './Description-asso';
import descriptionEquipe from './description-equipe';
import prefooter from './prefooter';
import bandeau from './bandeau';

export default () => (`
<header>
  ${Nav()}
</header>
<main>
  ${bandeau()}
  <div class="container-fluid text-center">
  <div class="row">
      <div class="col-8 mt-3">
          <div class="my-3">
              <h3>Fil des actus</h3>
              <button type="button" class="btn btn-primary">Ajouter Actu</button>
          </div>
          <div class="card text-center mb-2 nav-filtre-actu asso_admin">
        ${Actu()}
        ${Actu()}
        ${Actu()}
        ${Actu()}
        ${Actu()}
        ${Actu()}
        </div>
        </div>
        <div class="col-4 mt-5 d-grid gap-2">
            ${DescriptionAsso()}
            ${descriptionEquipe()}
          </div>
        </div>
    </div>
        ${prefooter()}
</main>
<footer>
  ${Foot()}
</footer>
  `);
