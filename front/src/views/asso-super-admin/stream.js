const btn = () => (`
  <button type="button" class="btn btn-danger ModifierDescription">Modifier</button>
`);
export default (permissions) => {
  const { assoc } = permissions;

  return (`
    <div class="my-3">
      <h3>Fil des actus</h3>
      ${assoc.update ? btn() : ''}
    </div>
  `);
};
