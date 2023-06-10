export default () => (`
    <div class="card m-2">
        <div class="row g-0 my-1">
            <div class="col-3">
                <img src="https://picsum.photos/210/300" width="200" height="200" class=" rounded-start" alt="...">
            </div>
            <div class="col-md-6">
                <div class="card-body">
                    <h5 class="card-title">Titre Actu</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="col-md-3 d-grid mt-3">
                <div class="">
                    <button type="button" class="btn btn-danger">
                        Modifier</button>
                    </div>
                    <div class="">
                        <button type="button" class="btn btn-danger">
                            Supprimer
                        </button>
                    </div>
                    <div class="">
                        <button type="button" class="btn btn-danger">
                            Voir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `);
