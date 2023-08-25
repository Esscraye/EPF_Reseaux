import header from './header';
import footer from './footer';
import chat from './discussion';

export default (content, data, idChat, userId) => (`
  <header class="">
    ${header()}
  </header>
  <main>
    ${content}
    <section class="chat-section">
      <div class="chat-btn" id="chat-btn">
        <button href="#" class="chat open-button"><i class="ri-chat-smile-3-line"></i></button>
      </div>
      <dialog class="modal" id="modal">
        ${chat(data, idChat, userId)}
      </dialog>
    </section>
  </main>
  <footer>
    ${footer()}
  </footer>
`);
