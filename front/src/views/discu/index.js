import Nav from './nav';
import Card from './card';

export default () => (
  `<header>
    ${Nav()}
  </header>
  <main>
    <div class="row">
    ${Card()}
    ${Card()}
    ${Card()}
    ${Card()}
    ${Card()}
    ${Card()}
    ${Card()}
    ${Card()}
    ${Card()}
    ${Card()}
    ${Card()}
    ${Card()}
    ${Card()}
    </dib>
  </main>`
);
