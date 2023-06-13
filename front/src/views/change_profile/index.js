import './index.scss';

export default () => (`
<section class="recherche-profil">
<section class ="s1">
  <img src="https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin-1.jpg" class="image-proportionnelle" alt="image-profil">
  <button class="btn btn-outline-success" type="submit">Modifier la photo de profil</button>
  <span>Prénom Nom</span>
  <span>Promo</span>
  <button class="btn btn-outline-success" type="submit">Profil</button>
</section>
<section class="s2">
  <div>Mot de passe actuel
  <input class="form-control me-2 AcutalPassword" style="background-color: white;" type="search" aria-label="Search"></div>
  <div>Nouveau mot de passe
  <input class="form-control me-2 NewPassword" style="background-color: white;" type="search" aria-label="Search"></div>
  <div>Confirmation du mot de passe
  <input class="form-control me-2 ConfirmNewMdp" style="background-color: white;" type="search" aria-label="Search"></div>
  <div class="form-floating">Description
      <textarea class="form-control Description" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
      <label for="floatingTextarea"></label>
  <button class="btn btn-outline-success enregistrer-modif submit" type="submit">Enregistrer vos modifications</button></div>
</section>
</section>
<section class="s3">
<div>Confirmez votre adresse mail afin de supprimer</div>
<div><input class="form-control me-2" style="background-color: white;" type="search" aria-label="Search"></div>
<div><button class="btn btn-outline-success" type="submit">Supprimer le profil</button></div>
</section>`
);
