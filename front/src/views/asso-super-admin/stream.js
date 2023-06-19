const btn = (id) => (`
  <a href="/createArticle?id=${encodeURIComponent(id)}" class="btn btn-danger CreateActu" role="button">Créer Actualité</a>
`);
export default (data, permissions) => {
  const { id } = data;
  console.log(id);
  const { ajoutActu } = permissions;

  return (`
    <div class="my-3">
      <h3>Fil des actus</h3>
      ${ajoutActu.create ? btn(id) : ''}
    </div>
  `);
};
