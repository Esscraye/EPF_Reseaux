const renderButtons = () => (`
  <div class="container text-center">
    <div class="row">
      <div class="col-4">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary addMember">Ajouter Membre</button>
          <button type="button" class="btn btn-primary addRespo">Ajouter Responsable</button>
        </div>
      <div class="col-6"></div>
      <button type="button" class="btn btn-primary">Supprimer Membre/Responsable</button>
    </div>
  </div>
`);

export default renderButtons;
