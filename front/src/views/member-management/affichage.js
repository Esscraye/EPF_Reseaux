import result from './result';

export default () => (`
    <div class="container">
        <div class="row">
            <div class="col">
                <h4 class="pt-4">Liste des Responsables</h4>
                ${result()}
                ${result()}
                ${result()}
            </div>
            <div class="col">
                <h4 class="pt-4">Liste des Membres</h4>
                ${result()}
                ${result()}
                ${result()}
            </div>
        </div>
        <div class="row">
            <div class="col-8">
            </div>
            <div class="col-4">
                <button type="button" class="btn btn-primary">Supprimer Membre/Responsable</button>
            </div>
        </div>
    </div>
`);
