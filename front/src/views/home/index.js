import article from './article';

export default (data) => {
  const { news, assoc } = data;

  return (`
    <div class="row back-im">
      <div class="col-1"></div>
      <div class="col-6 my-2 p-3 nav-filtre-actu">
        ${news.map((newsItem) => article(newsItem, assoc[newsItem.idAsso])).join('')}
      </div>
      <div class="col-5 contener-info-asso">
        <div class="info-asso shadow-manuelle">
          <div class="texte-asso">
            <h2>Notre Asso</h2>
            <p>Découvrez notre nouvel intranet scolaire à l'EPF ! Fini Facebook et les services cloud éparpillés, notre plateforme centralisée facilitera la communication, la protection des données et la visibilité des actions associatives. Avec des fonctionnalités sur mesure et une sécurité renforcée, notre intranet améliorera la vie étudiante et associative sans perturber le réseau existant.</p>
          </div>
        </div>
      </div>
    </div>
  `);
};
