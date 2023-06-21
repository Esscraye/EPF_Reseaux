import post from './post';
import descriptionAsso from './Description-asso';
import descriptionEquipe from './description-equipe';
import contacts from './prefooter';
import assocBanner from './assoc-banner';
import createActu from './stream';

import './index.scss';

export default (data) => {
  const {
    assoc, userPermission, news
  } = data;

  return (`
    ${assocBanner(assoc, userPermission.founder)}
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-8 mt-3">
          ${createActu(assoc, userPermission.founder)}
          <div class="card text-center mb-2 nav-filtre-actu asso_admin actu-manuelle">
            ${news.map((actu) => post(actu, userPermission.founder)).join('')}
          </div>
        </div>
        <div class="col-4 mt-5 d-grid gap-2">
          ${descriptionAsso(assoc, userPermission.founder)}
          ${descriptionEquipe(assoc, userPermission.founder)}
        </div>
      </div>
    </div>
    <div class="mt-4">
      ${contacts(assoc, userPermission.founder)}  
    </div>
  `);
};
