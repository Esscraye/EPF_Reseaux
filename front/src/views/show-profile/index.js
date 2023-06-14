import './index.scss';

export default (data) => {
  const { infoPerso } = data;
  return (`
    <div class="container.fluid">
      <div class="row mb-5" >
        <div class="col-3 container-info-prof">
          <img src="${infoPerso.picture}" alt="Image utilisateur" class="imageprof image-prof" id ="affprofimage">
          <div class = "name" id = "affprofprenomnom">
            <strong>
              ${infoPerso.firstName} ${infoPerso.lastName}
            </strong>
          </div>
          <div class="modifprof" id="affprofmodifprof">
            <a href="/changeUser" class="btn btn-danger mr-2" role="button" id ="btnmodifprofil">Modifier profil</a>
          </div>
        </div>
        <div class="col-6">
          <div class ="border shadow-manuelle container-profil" id="affprofborder">
            <div class = "infoperso" id ="affprofinfo">
              <strong>
                Informations personnelles
              </strong>
            </div>
            <div class = "prenom" id ="affprofprenom">
              Prénom : ${infoPerso.firstName}
            </div>
            <div class = "nom" id ="affprofnom">
              Nom : ${infoPerso.lastName}
            </div>
            <div class = "email" id ="affprofmail">
              Email : ${infoPerso.email}
            </div>
            <div class = "description" id ="affprofdesc">
            Description : ${infoPerso.description}
            </div>
          </div>
          <div class = "border shadow-manuelle container-profil" id="affprofborder">
            <div class = "grou" id = "affprofgrou">
              <strong>
                Groupes
              </strong>
            </div>
            <div class = "promo" id ="affprofpromo">
              Promo : ${infoPerso.promo}
            </div>
            <div class = "classe" id= "affprofclasse">
              Classe : ${infoPerso.class}
            </div>
            <div class = "groupedetp" id="affprofgroutp">
              Groupe de TP : ${infoPerso.groupTp}
            </div>
            <div class = "association" id ="affprofasso">
              Associations : ${infoPerso.associations}
            </div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  `);
};
