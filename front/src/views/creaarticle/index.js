import creerarticle from './creerarticle';
import bandeau from './bandeau';
import header from '../home/header';
import foot from '../home/footer';

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
