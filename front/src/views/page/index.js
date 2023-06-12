import header from './header';
import footer from './footer';

import './index.scss';

export default (content) => (`
  <header>
    ${header()}
  </header>
  <main>
    ${content}
  </main>
  <footer>
    ${footer()}
  </footer>
`);
