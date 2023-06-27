import header from './header';
import footer from './footer';
import chat from './discussion';

export default (content, data, idChat) => (`
  <header class="">
    ${header()}
  </header>
  <main>
    ${content}
    <div id="chat-btn">
      <button href="#" class="chat open-button"><i class="ri-chat-smile-3-line"></i></button>
    </div>
    <dialog class="modal" id="modal">
      ${chat(data, idChat)}
    </dialog>
  </main>
  <footer>
    ${footer()}
  </footer>
`);
