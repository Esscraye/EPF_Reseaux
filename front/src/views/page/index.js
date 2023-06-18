import header from './header';
import footer from './footer';

import './index.scss';

export default (content, discu) => (`
  <header class="">
    ${header()}
  </header>
  <main>
    ${content}
    <div id="chat-btn">
      <button href="#" class="chat open-button"><i class="ri-chat-smile-3-line"></i></button>
    </div>
    <dialog class="modal" id="modal">
      ${discu}
    </dialog>
  </main>
  <footer>
    ${footer()}
  </footer>
`);
