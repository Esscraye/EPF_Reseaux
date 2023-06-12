import article from './article';

import './index.scss';

export default () => (`
  <div class="row">
    <div class="col-1"></div>
    <div class="col-6 my-2 p-3 nav-filtre-actu">
      ${article()}
      ${article()}
      ${article()}
      ${article()}
      ${article()}
    </div>
    <div class="col-5"></div>
  </div>
 `);
