const btn = () => (`
  <button type="button" class="btn btn-danger changeTeam">Modifier</button>
`);

export default (data, permissions) => {
  const { description } = data;
  const { assoc } = permissions;

  return (`
    <div class="row-6">
      <h3>L'équipe</h3>
      <p id="textTeam" contenteditable="false">${description}</p>
      ${assoc.update ? btn() : ''}
    </div>    
  `);
};
