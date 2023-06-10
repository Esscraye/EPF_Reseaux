import header from '../home/nav';
import footer from '../home/foot';
import card from './card';

export default () => (
  `<header>
        ${header()}
    </header>
    <main>
        <div class="container-fluid">
            <div>
                <h1 class="text-center pt-3 fw-bold">Portail des associations</h1>
                <h4 class="fw-bold px-2 pb-2">Montpelier :</h4>
                <div class="container-fluid text-center">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                    </div>
                </div>

                <h4 class="fw-bold px-2 pb-2">Paris-Cachan :</h4>
                <div class="container-fluid text-center">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                    </div>
                </div>

                <h4 class="fw-bold px-2 pb-2">Saint-Nazaire :</h4>
                <div class="container-fluid text-center">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                    </div>
                </div>

                <h4 class="fw-bold px-2 pb-2">Troyes :</h4>
                <div class="container-fluid text-center">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                        ${card()}
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        ${footer()}
    </footer>`
);
