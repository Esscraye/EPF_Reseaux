import Nom from './nom';

export default () => (`
    <div class="row justify-content-end me-1 text-end">
        <div class="col-9"></div>
        <div class="col-3">
            ${Nom()}
            <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-end shadow text-center">
                Marker 
            </div>
        </div>
    </div>
`);
