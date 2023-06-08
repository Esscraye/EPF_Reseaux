const creerarticle = () => (`
    <div class="text-center">
        <div class="m-5 rectangle">
            <div class="p-4 row">
                <div class="row">
                    <h3 class="fw-bold">Créer une actualité</h3>
                        
                </div>
                <div class="row mb-3 align-items-end">
                    <div class="col-9">
                        <p class="text-start">Titre de l'actualité</p>

                        <div class="form-floating">
                            <input class="form-control" placeholder="Leave a comment here" id="floatingTextareaTitle"></textarea>
                            <label for="floatingTextareaTitle">Titre</label>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Type de l'actualité
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="mb-1 dropdown-item text-center" href="#" >Article</a></li>
                                <li><a class="dropdown-item text-center" href="#" >Post</a></li>
                                <li><a class="mt-1 dropdown-item text-center" href="#">Event</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row mt-3 align-items-end">
                    <div class="col-9">
                            <p class="text-start">Corps de texte</p>
                        <div class="form-floating">
                            <textarea class="form-control h-50" rows="9" placeholder="Texte" id="floatingTextareaTexte"></textarea>
                            <label for="floatingTextareaTexte">Texte</label>
                        </div>
                    </div>
                    <div class="col-3">
                        <button type="button" class="mt-4 btn btn-primary">Poster l'actualité</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`);

export default creerarticle;
