import './index.scss';

export default (data) => {
  const { infoPerso } = data;
  return (`
    <div class="container.fluid">
      <div class="row mb-5" >
        <div class="col-3 container-info-prof">
          <img src="${infoPerso.picture}" alt="Image utilisateur" class=" rounded-circle imageprof image-prof" id ="affprofimage">
          <div class ="text-gras">
              ${infoPerso.firstname} ${infoPerso.lastname}
          </div>
          <div class="">
            <a href="/change-profile" class="btn btn-danger mr-2" role="button" id ="btnmodifprofil">Modifier profil</a>
          </div>
        </div>
        <div class="col-6">
          <div class ="border shadow-manuelle container-profil" id="affprofborder">
            <div class ="text-gras">
                Informations personnelles
            </div>
            <div class ="info-profil">
              Prénom : ${infoPerso.firstname}
            </div>
            <div class ="info-profil">
              Nom : ${infoPerso.lastname}
            </div>
            <div class ="info-profil">
              Email : ${infoPerso.email}
            </div>
            <div class ="info-profil">
            Description : ${infoPerso.description}
            </div>
          </div>
          <div class ="border shadow-manuelle container-profil">
            <div class = "text-gras">
              Groupes
            </div>
            <div class ="info-profil">
              Promo : ${infoPerso.promo}
            </div>
            <div class ="info-profil">
              Classe : ${infoPerso.class}
            </div>
            <div class ="info-profil">
              Groupe de TP : ${infoPerso.grouptp}
            </div>
            <div class ="info-profil">
              Associations : ${infoPerso.associations}
            </div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  `);
};
