import createArticle from './createarticle';
import banner from './banner';

export default (data) => {
  const { assoc, news } = data;

  // console.log('je suis dans l indexe.crea article', news); // Log the value of `news` separately

  return (`
    <div class="row">
      ${banner(assoc)}
      ${createArticle(news)}
    </div>
  `);
};
