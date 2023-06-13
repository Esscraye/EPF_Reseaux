const btn = () => (`
    <div class="col-4">
      <button type="button" class="btn btn-danger SupprimerAsso">Supprimer</button>
    </div>
  `);
const btn1 = () => (`
    <div class="col">
      <button type="button" class="btn btn-danger Membres">Membres</button>
    </div>
`);
const btn2 = () => (`
    <div class="col">
      <button type="button" class="btn btn-danger ModifierAsso">Modifier</button>
    </div>
`);
const btn3 = () => (`
    <div class="col">
      <button type="button" class="btn btn-danger ModifierAsso">Suivre</button>
    </div>
  `);

export default (data, permissions) => {
  const { name, logo } = data;
  const { assoc } = permissions;

  return (`
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
            ${assoc.delete ? btn() : ''}
            ${assoc.manage ? btn1() : ''}
            ${assoc.update ? btn2() : ''}
            ${assoc.follow ? btn3() : ''}
          </div>    
        </div>
      </div>
    </div>
  `);
};
