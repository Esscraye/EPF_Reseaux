import article from './article';

import './index.scss';

export default (data) => {
  const { articles } = data;

  return (`
    <div class="row back-im">
      <div class="col-1"></div>
      <div class="col-6 my-2 p-3 nav-filtre-actu">
        ${articles.map((post) => article(post)).join('')}
      </div>
      <div class="col-5 contener-info-asso">
        <div class="info-asso shadow-lg">
          <div class="texte-asso">
            <h2>Notre Asso</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione ab repudiandae mollitia doloribus! A numquam tempore odio, pariatur quas fugit molestiae obcaecati libero consectetur reprehenderit delectus! Id, nihil ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione ab repudiandae mollitia doloribus! A numquam tempore odio, pariatur quas fugit molestiae obcaecati libero consectetur reprehenderit delectus! Id, nihil ex.</p>
          </div>
        </div>
      </div>
    </div>
  `);
};
