import createArticle from './createarticle';
import banner from './banner';

export default (data) => {
  const { assoc } = data;

  return (`
    <div class="row">
      ${banner(assoc)}
      ${createArticle()}
    </div>
  `);
};
