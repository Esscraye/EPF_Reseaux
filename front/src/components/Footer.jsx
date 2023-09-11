import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="navbar-brand logo-space">
        <img src="/assets/logo.png" alt="logo" />
        <h5>EPF Intranet :</h5>
      </div>
      <div className="cont-foot">
        <h4>Useful link</h4>
        <Link to="https://moodle.epf.fr/login/epf/login.html">Moodle</Link>
        <Link to="https://my.epf.fr/">Myepf</Link>
        <Link to="https://epfedu.sharepoint.com/sites/INSERTIONPROFESSIONNELLE2">Stage</Link>
        <div className="reseaux">
          <Link to="https://www.instagram.com/" target="_blank"><div><i className="ri-instagram-fill" /></div></Link>
          <Link to="https://twitter.com/i/flow/login" target="_blank"><div><i className="ri-twitter-fill" /></div></Link>
          <Link to="https://www.facebook.com/" target="_blank"><div><i className="ri-facebook-box-fill" /></div></Link>
          <Link to="https://www.linkedin.com/" target="_blank"><div><i className="ri-linkedin-box-fill" /></div></Link>
        </div>
      </div>
      <div className="cont-foot">
        <h4>Quick Links</h4>
        <Link to="/" id="ACC2">Accueil</Link>
        <Link to="/homeAssos" id="ASS2">Association</Link>
        <Link to="/profil" id="PRO2">profil</Link>
        <Link to="/general-profile" id="ADM2">Admin</Link>
      </div>
      <div className="cont-foot">
        <h4>Contact us</h4>
        <Link to="mentionleg.html">Mentions légales</Link>
        <Link to="/">Email: </Link>
        <Link to="/">epfreseau@epfedu.fr</Link>
        <Link to="/">epfreseau@epfedu.fr</Link>
      </div>
    </footer>
  );
}

export default Footer;
