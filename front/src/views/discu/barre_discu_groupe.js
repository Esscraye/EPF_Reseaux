import Bulle from './bulle_nom';

export default () => (`
    <div class="row bg-danger border mt-0 border-dark border-end-0 border-start-0 border-top-0">
        <div class="col-3 mt-1">
            <div class="row text-center mx-0">
                <div class="col-3 mb-1"><img src="https://tse3.mm.bing.net/th?id=OIP.-xJE4WTayjrJUhukEsN1VwHaHa&pid=Api&P=0&h=180" class="rounded-circle" alt="..." width="40"></div>
                <div class="d-flex justify-content-between align-items-center bg-danger text-white col-9">
                  Groupe de promo :
                </div>
            </div>
        </div>
        <div class="col-7 my-1 text-center">
            <div class="row">
                ${Bulle()}
                ${Bulle()}
                ${Bulle()}
                ${Bulle()}
                ${Bulle()}
                ${Bulle()}
                ${Bulle()}
                ${Bulle()}
                ${Bulle()}
                ${Bulle()}
                ${Bulle()}
            </div>
        </div>
        <div class="col-1 my-1 text-center">
            <button type="button" class="btn btn-danger">Bloquer</button>
        </div>
        <div class="col-1 text-center my-2 pt-1">
            <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
    </div>
`);
