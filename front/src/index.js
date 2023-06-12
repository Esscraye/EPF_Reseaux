import Router from 'vanilla-router';

import Home from './controllers/home';
import Page404 from './controllers/page-404';
import AddUser from './controllers/admin-ajouter-user';
import ChangeUser from './controllers/admin-modifier-user';
import DispProf from './controllers/afficher-profil';
import AddGrp from './controllers/ajouter-groupe';
import AssosFondResp from './controllers/asso-fondateur-et-responsable';
import AssosSuperAdmin from './controllers/asso-super-admin';
import AddAssosUser from './controllers/asso-utilisateur';
import Connect from './controllers/connection';
import CreateArticle from './controllers/creaarticle';
import CreateAssos from './controllers/createAssos';
import Discu from './controllers/discu';
import GestMember from './controllers/gestionmembre';
import MDPForgot from './controllers/mdp_oubli';
import HomeAssos from './controllers/page_main_assos';

import './index.scss';

const router = new Router({
  mode: 'history',
  page404: () => {
    new Page404();
  }
});
router.add('', () => {
  new Home();
});
router.add('/addUser', () => {
  new AddUser();
});
router.add('/changeUser', () => {
  new ChangeUser();
});
router.add('/profil', () => {
  new DispProf();
});
router.add('/addGrp', () => {
  new AddGrp();
});
router.add('/assosFond&Resp', () => {
  new AssosFondResp();
});
router.add('/assosSuperAdmin', () => {
  new AssosSuperAdmin();
});
router.add('/addAssosUser', () => {
  new AddAssosUser();
});
router.add('/connect', () => {
  new Connect();
});
router.add('/createArticle', () => {
  new CreateArticle();
});
router.add('/createAssos', () => {
  new CreateAssos();
});
router.add('/discu', () => {
  new Discu();
});
router.add('/gestMember', () => {
  new GestMember();
});
router.add('/mdpForgot', () => {
  new MDPForgot();
});
router.add('/homeAssos', () => {
  new HomeAssos();
});
const { pathname } = location;
router.navigateTo(pathname);
