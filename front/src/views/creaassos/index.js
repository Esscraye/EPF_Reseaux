import Nav from '../home/header';
import Foot from '../home/footer';
import Form from './form';

export default () => (
  `<header>
    ${Nav()}
  </header>
  <main>
    ${Form()}
  </main>
  <footer>
    ${Foot()}
  </footer>`
);
