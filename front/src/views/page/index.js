import header from './header';
import footer from './footer';

import './index.scss';

export default (content) => (`
  <header>
    ${header()}
  </header>
  <main>
    ${content}
    <div id="chat-btn">
    <a href="#" class="chat">
    <i class="ri-chat-smile-3-line"></i>
      </a>
    </div>
  </main>
  <footer>
    ${footer()}
  </footer>
`);
