import Router from 'vanilla-router';

import ControllerHome from './controllers/home';
import ControllerPage404 from './controllers/page-404';
import ControllerAddUser from './controllers/admin-add-user';
import ControllerChangeUser from './controllers/admin-modify-user';
import ControllerDispProf from './controllers/afficher-profil';
import ControllerAddGrp from './controllers/ajouter-groupe';
import ControllerAssosFondResp from './controllers/asso-fondateur-et-responsable';
import ControllerAssosSuperAdmin from './controllers/asso-super-admin';
import ControllerAddAssosUser from './controllers/asso-utilisateur';
import ControllerConnect from './controllers/connection';
import ControllerCreateArticle from './controllers/creaarticle';
import ControllerCreateAssos from './controllers/create-assos';
import ControllerDiscu from './controllers/discu';
import ControllerGestMember from './controllers/gestionmembre';
import ControllerMDPForgot from './controllers/mdp_oubli';
import ControllerHomeAssos from './controllers/page_main_assos';

import './index.scss';

const router = new Router({
  mode: 'history',
  page404: () => {
    new ControllerPage404();
  }
});
router.add('', () => {
  new ControllerHome();
});
router.add('/addUser', () => {
  new ControllerAddUser();
});
router.add('/changeUser', () => {
  new ControllerChangeUser();
});
router.add('/profil', () => {
  new ControllerDispProf();
});
router.add('/addGrp', () => {
  new ControllerAddGrp();
});
router.add('/assosFond&Resp', () => {
  new ControllerAssosFondResp();
});
router.add('/assosSuperAdmin', () => {
  new ControllerAssosSuperAdmin();
});
router.add('/addAssosUser', () => {
  new ControllerAddAssosUser();
});
router.add('/connect', () => {
  new ControllerConnect();
});
router.add('/createArticle', () => {
  new ControllerCreateArticle();
});
router.add('/createAssos', () => {
  new ControllerCreateAssos();
});
router.add('/discu', () => {
  new ControllerDiscu();
});
router.add('/gestMember', () => {
  new ControllerGestMember();
});
router.add('/mdpForgot', () => {
  new ControllerMDPForgot();
});
router.add('/homeAssos', () => {
  new ControllerHomeAssos();
});
const { pathname } = location;
router.navigateTo(pathname);