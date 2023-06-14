const btn = () => (`
  <a href="/createArticle" class="btn btn-danger CreateActu" role="button">Créer Actualité</a>
`);
export default (permissions) => {
  const { ajoutActu } = permissions;

  return (`
    <div class="my-3">
      <h3>Fil des actus</h3>
      ${ajoutActu.create ? btn() : ''}
    </div>
  `);
};
