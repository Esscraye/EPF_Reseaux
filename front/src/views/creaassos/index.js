import Nav from '../home/nav';
import Foot from '../home/foot';
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
