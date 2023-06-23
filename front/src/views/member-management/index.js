import renderForm from './recherche';
import renderCheckboxMembre from './result';
import renderCheckboxRespo from './response';
import renderButtons from './ajout';

export default (data) => {
  const resultat = data;
  return (`
  ${renderForm()}    
  <div class="container">
    <div class="row">
      <div class="col">
        <h4 class="pt-4">Liste des Responsables</h4>
        ${renderCheckboxRespo(resultat)}
        ${renderCheckboxRespo(resultat)}
        ${renderCheckboxRespo(resultat)}
      </div>
      <div class="col">
        <h4 class="pt-4">Liste des Membres</h4>
        ${renderCheckboxMembre(resultat)}
        ${renderCheckboxMembre(resultat)}
        ${renderCheckboxMembre(resultat)}
      </div>
    </div>
    <div class="row">
      <div class="col-8">
      </div>
      <div class="col-4">
      </div>
    </div>
  </div>
  ${renderButtons()}
  `);
};
