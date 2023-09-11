import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const navLinks = [
  {
    title: 'Accueil',
    path: '/',
    id: 'ACC'
  },
  {
    title: 'Association',
    path: '/association-page',
    id: 'ASS'
  },
  {
    title: 'Profil',
    path: '/profil',
    id: 'PRO'
  },
  {
    title: 'Admin',
    path: '/general-profile',
    id: 'ADM'
  },
  {
    title: 'Déconnexion',
    path: '/logout',
    id: 'LOGOUT'
  }
];

function Header() {
  return (
    <header>
      <div className="left-side">
        <div className="navbar-brand logo-space">
          <img src="/assets/logo.png" alt="logo" />
          <h5>EPF Intranet :</h5>
        </div>
        <div className="nav-links">
          {navLinks.map((nav) => (
            <Link to={nav.path} className="btn" id={nav.id} key={nav.id}>{nav.title}</Link>
          ))}
        </div>
        <img src="/assets/menu-btn.png" className="btn menu-hamburger" alt="menu" />
      </div>
      <form className="d-flex nav-search" role="search">
        <input className="form-control me-2 input-col" id="navpageinputsearch" type="search" placeholder="Recherche" aria-label="Search" />
        <button className="btn btn-outline-success" id="navpagebutton" type="button">Rechercher</button>
      </form>
    </header>
  );
}

export default Header;
