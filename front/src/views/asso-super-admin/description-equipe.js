const btn = () => (`
  <button type="button" class="btn btn-danger changeTeam">Modifier</button>
`);

export default (data, permissions) => {
  const assoc = data;
  const assocPerm = permissions;

  return (`
    <div class="row-6">
      <h3>Déscription de l'équipe</h3>
      <p id="textTeam" contenteditable="false">${assoc.description_team}</p>
      ${assocPerm.update ? btn() : ''}
    </div>    
  `);
};
