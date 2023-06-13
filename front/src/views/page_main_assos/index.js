import card from './card';

export default (data) => {
  const { cards } = data;
  return (`
    <div class="mt-2 float-end">
      <a href="/createAssos" class="btn btn-danger mr-2" role="button">Créer assos</a>
    </div>
    <div class="container-fluid">
      <div>
        <h1 class="text-center pt-3 fw-bold">Portail des associations</h1>
        <h4 class="fw-bold px-2 pb-2">Montpellier :</h4>
        <div class="container-fluid text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          ${cards.map(card).join('')}
          </div>
        </div>

        <h4 class="fw-bold px-2 pb-2">Paris-Cachan :</h4>
        <div class="container-fluid text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          ${cards.map(card).join('')}
          </div>
        </div>

        <h4 class="fw-bold px-2 pb-2">Saint-Nazaire :</h4>
        <div class="container-fluid text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          ${cards.map(card).join('')}
          </div>
        </div>

        <h4 class="fw-bold px-2 pb-2">Troyes :</h4>
        <div class="container-fluid text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          ${cards.map(card).join('')}
          </div>
        </div>
      </div>
    </div>
  `);
};
