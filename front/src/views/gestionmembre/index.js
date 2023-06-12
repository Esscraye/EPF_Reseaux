import recherche from './recherche';
import result from './result';
import affichage from './affichage';
import ajout from './ajout';

export default () => (`
  ${recherche()}
  <div class="container">
    ${result()}
    ${result()}
    ${result()}
  </div>
  ${ajout()}
  ${affichage()}
`);
