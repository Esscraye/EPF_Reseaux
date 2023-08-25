export default () => (`
  <nav>
    <div class="left-side">
      <div class="navbar-brand logo-space">
        <img src="/images/logo.png">
        <h5>EPF Intranet :</h5>
      </div>
      <div class="nav-links"> 
        <a href="/" class="btn" id="ACC">Accueil</a>
        <a href="/homeAssos" class="btn" id="ASS">Association</a>
        <a href="/profil" class="btn" id="PRO">Profil</a>
        <a href="/general-profile" class="btn" id="ADM">Admin</a>
        <a href="/logout" class="btn" id="LOGOUT">Déconnexion</a>
      </div>
      <img src="/images/menu-btn.png" class="btn menu-hamburger">
    </div>
    <form class="d-flex nav-search" role="search">
      <input class="form-control me-2 input-col" id ="navpageinputsearch" type="search" placeholder="Recherche" aria-label="Search">
      <button class="btn btn-outline-success" id ="navpagebutton" type="button">Rechercher</button>
    </form>
  </nav>
`);
