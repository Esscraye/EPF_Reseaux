const btn = () => (`
  <button type="button" class="btn btn-danger changeDesc">Modifier</button>
`);

export default (data, permissions) => {
  const assoc = data;
  const assocPerm = permissions;

  return (`
    <div class="row-6">
      <h3>Description de l'association</h3>
      <p id="textDesc" contenteditable="false">${assoc.description_asso}</p>
      ${assocPerm.update ? btn() : ''}
    </div>    
  `);
};
