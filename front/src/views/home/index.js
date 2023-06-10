import Nav from './header';
import Foot from './footer';
import Article from './article';

export default () => (
  `<header>
    ${Nav()}
  </header>
  <main class="home-page">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-6 my-2 p-3 nav-filtre-actu">
        ${Article()}
        ${Article()}
        ${Article()}
        ${Article()}
        ${Article()}
        </div>
        <div class="col-5"></div>
      </div>
    </main> 
  <footer>
    ${Foot()}
  </footer>`
);
