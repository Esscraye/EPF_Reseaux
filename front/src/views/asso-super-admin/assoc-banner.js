const btn = () => `
  <button type="button" class="btn btn-danger SupprimerAsso">Supprimer</button>
`;

const btn1 = () => `
  <a href="/gestMember" class="btn btn-danger Membres" role="button">Membres</a>
`;

const btn2 = () => `
  <button type="button" class="btn btn-danger ModifierAsso">Modifier</button>
`;

const btn3 = () => `
  <button type="button" class="btn btn-danger SuivreAsso" id="FollowAsso">Suivre</button>
`;

export default (data, permissions) => {
  const { name, logo } = data;
  const { assoc } = permissions;

  return `
    <div class="container-fluid text-center">
      <div class="row shadow-lg p-1">
        <div class="col-2">
          <img width="150" src="${logo}" alt="logo">
        </div>
        <div class="col-7">
          <h3 class="pt-3">${name}</h3>
        </div>
        <div class="col-3">
          <div class="row pt-3">
            <div class="btn-group" role="group" aria-label="Basic example">
              ${assoc.delete ? btn() : ''}
              ${assoc.manage ? btn1() : ''}
              ${assoc.update ? btn2() : ''}
              ${assoc.follow ? btn3() : ''}
            </div>
          </div>    
        </div>
      </div>
    </div>
  `;
};
