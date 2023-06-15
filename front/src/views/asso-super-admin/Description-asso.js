const btn = () => (`
  <button type="button" class="btn btn-danger changeDesc">Modifier</button>
`);

export default (data, permissions) => {
  const { description } = data;
  const { assoc } = permissions;

  return (`
    <div class="row-6">
      <h3>Description de l'association</h3>
      <p id="textDesc" contenteditable="false">${description}</p>
      ${assoc.update ? btn() : ''}
    </div>    
  `);
};
