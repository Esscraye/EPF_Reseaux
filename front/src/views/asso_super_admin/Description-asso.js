const btn = () => (`
  <button type="button" class="btn btn-danger ModifierDescription">Modifier</button>
`);
export default (data, permissions) => {
  const { description, text } = data;
  const { assoc } = permissions;
  return (`
    <div class="row-6">
      <h3>${description}</h3>
      <p>${text}</p>
      ${assoc.update ? btn() : ''}
    </div>    
  `);
};
