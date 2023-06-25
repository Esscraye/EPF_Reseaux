export default () => (`
  <nav class="">
    <div class="partie-g">
      <div class="navbar-brand log">
        <div class="div-ronde"><img src="/images/logo.png" class="logo"></div>
        <h5>EPF Intranet :</h5>
      </div>
      <div class="nav-links"> 
        <a href="/" class="btn btn-nav" id="ACC">Accueil</a>
        <a href="/homeAssos" class="btn btn-nav" id="ASS">Association</a>
        <a href="/profil" class="btn btn-nav" id="PRO">Profil</a>
        <a href="/general-profile" class="btn btn-nav" id="ADM">Admin</a>
        <a href="/logout" class="btn btn-nav" id="LOGOUT">Déconnexion</a>
      </div>
      <img src="/images/menu-btn.png" class="menu-hamburger btn btn-port">
    </div>
    <form class="d-flex nav-search partie-d" role="search">
      <input class="form-control me-2 input-col" id ="navpageinputsearch" style="background-color: white;" type="search" placeholder="Recherche" aria-label="Search">
      <button class="btn btn-outline-success" id ="navpagebutton" type="button">Rechercher</button>
    </form>
  </nav>
`);
