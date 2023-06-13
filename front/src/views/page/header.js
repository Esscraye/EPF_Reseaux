export default () => (`
  <nav class="">
    <div class="partie-g">
      <div class="navbar-brand log">EPF Intranet</div>
      <a href="#" class="btn btn-nav slected">Accueil</a>
      <a href="/homeAssos" class="btn btn-nav">Association</a>
      <a href="/profil" class="btn btn-nav">Profil</a>
      <a href="#" class="btn btn-nav">Admin</a>
    </div>
    <form class="d-flex nav-search partie-d" role="search">
      <input class="form-control me-2" style="background-color: white;" type="search" placeholder="Recherche" aria-label="Search">
      <button class="btn btn-outline-success" type="button">Rechercher</button>
    </form>
  </nav>
`);
