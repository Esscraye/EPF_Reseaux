export default () => (`
  <div class="recherche-profil">
    <section class ="contener-show-profile">
      <img src="" class="image-proportionnelle" alt="image-profil">
      <button class="btn btn-outline-success modif-profil" type="submit">Modifier</button>
      <h1>Prénom Nom</h1>
      <h1>Promo</h1>
      <button class="btn btn-outline-success modif-profil" type="submit">Profil</button>
    </section>
    <section class="p-2 contener-show-profile2">
      <div class="taille-modif">Mot de passe actuel
        <input class="form-control me-2 AcutalPassword" style="background-color: white;" type="search" aria-label="Search">
      </div>
      <div class="taille-modif">Nouveau mot de passe
        <input class="form-control me-2 NewPassword" style="background-color: white;" type="search" aria-label="Search">
      </div>
      <div class="taille-modif">Confirmation du mot de passe
        <input class="form-control me-2 ConfirmNewMdp" style="background-color: white;" type="search" aria-label="Search">
      </div>
      <div class="form-floating taille-modif">Description
        <textarea class="form-control Description" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea"></label>
        <div class="position-btn-modif">
          <button class="btn btn-outline-success enregistrer-modif submit" type="submit">Enregistrer vos modifications</button>
        </div>
      </div>
    </section>
  </div>
  <div class="recherche-profil2">
    <section class="contener-show-profile3 ">
      <div>Confirmez L'email :</div>
      <div class="form-taille"><input class="form-control confirm-email" type="search" aria-label="Search"></div>
      <div><button class="btn btn-outline-success delete-profile" type="submit">Supprimer le profil</button></div>
    </section>
  </div>
`);
