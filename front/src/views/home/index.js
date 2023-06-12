import article from './article';

import './index.scss';

export default (data) => {
  const { articles } = data;

  return (`
    <div class="row">
      <div class="col-1"></div>
      <div class="col-6 my-2 p-3 nav-filtre-actu">
        ${articles.map((post) => article(post))}
      </div>
      <div class="col-5"></div>
    </div>
  `);
};
