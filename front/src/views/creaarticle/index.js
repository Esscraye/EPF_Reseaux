import creerarticle from './creerarticle';
import bandeau from './bandeau';
import header from '../page/header';
import foot from '../page/footer';

export default () => (`
  <header>
    ${header()}
  </header>
  <main>
    <div class="row">
    ${bandeau()}
    ${creerarticle()}
    </div>
  </main>
  <footer>
    ${foot()}
  </footer>`
);
