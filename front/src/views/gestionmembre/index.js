import nav from '../home/header';
import foot from '../home/footer';
import recherche from './recherche';
import result from './result';
import affichage from './affichage';
import ajout from './ajout';

export default () => (
  `<header>
    ${nav()}
  </header>
  <main>
    ${recherche()}
    <div class="container">
      ${result()}
      ${result()}
      ${result()}
    </div>
    ${ajout()}
    ${affichage()}
  </main>
  <footer>
    ${foot()}
  </footer>`
);
