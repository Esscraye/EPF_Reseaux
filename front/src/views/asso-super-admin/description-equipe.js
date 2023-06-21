const btn = () => (`
  <button type="button" class="btn btn-danger changeTeam">Modifier</button>
`);

export default (data, permissions) => {
  const { descriptionTeam } = data;
  const { assoc } = permissions;

  return (`
    <div class="row-6">
      <h3>Description de l'équipe</h3>
      <p class="text-style" id="textTeam" contenteditable="false">${descriptionTeam}</p>
      ${assoc.update ? btn() : ''}
    </div>    
  `);
};
