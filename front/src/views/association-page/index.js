import card from './card';

export default (data) => {
  const { cards } = data;
  const MtCards = cards.filter((assoc) => assoc.campus === 'Montpellier');
  const CachanCards = cards.filter((assoc) => assoc.campus === 'Cachan');
  const StNazaireCards = cards.filter((assoc) => assoc.campus === 'Saint-Nazaire');
  const TroyesCards = cards.filter((assoc) => assoc.campus === 'Troyes');
  return (`
    <div class="mt-2 float-end">
      <a href="/createAssos" class="btn btn-danger mr-2" role="button">Créer assos</a>
    </div>
    <div class="container-fluid">
      <div>
        <h1 class="text-center pt-3 fw-bold">Portail des associations</h1>
        <h4 class="fw-bold px-2 pb-2 title-underline">Montpellier :</h4>
        <div class="container-fluid text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          ${MtCards.map((assoc) => card(assoc)).join('')}
          </div>
        </div>

        <h4 class="fw-bold px-2 pb-2 title-underline">Paris-Cachan :</h4>
        <div class="container-fluid text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          ${CachanCards.map((assoc) => card(assoc)).join('')}
          </div>
        </div>

        <h4 class="fw-bold px-2 pb-2 title-underline">Saint-Nazaire :</h4>
        <div class="container-fluid text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          ${StNazaireCards.map((assoc) => card(assoc)).join('')}
          </div>
        </div>

        <h4 class="fw-bold px-2 pb-2 title-underline">Troyes :</h4>
        <div class="container-fluid text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          ${TroyesCards.map((assoc) => card(assoc)).join('')}
          </div>
        </div>
      </div>
    </div>
  `);
};
