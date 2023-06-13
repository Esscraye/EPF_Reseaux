import Router from 'vanilla-router';

import ControllerHome from './controllers/home';
import ControllerPage404 from './controllers/404-page';
import ControllerAddUser from './controllers/admin-add-user';
import ControllerChangeUser from './controllers/admin-modify-user';
import ControllerDispProf from './controllers/show-profile';
import ControllerAddGrp from './controllers/add-group';
import ControllerAssosSuperAdmin from './controllers/asso-super-admin';
import ControllerConnect from './controllers/connection';
import ControllerCreateArticle from './controllers/create-article';
import ControllerCreateAssos from './controllers/create-associations';
import ControllerDiscu from './controllers/discussion';
import ControllerGestMember from './controllers/member-management';
import ControllerMDPForgot from './controllers/password-forgotten';
import ControllerHomeAssos from './controllers/association-page';

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
router.add('/assosSuperAdmin', () => {
  new ControllerAssosSuperAdmin();
});
router.add('/connection', () => {
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
router.add('/password-forgot', () => {
  new ControllerMDPForgot();
});
router.add('/homeAssos', () => {
  new ControllerHomeAssos();
});
const { pathname } = location;
router.navigateTo(pathname);
