import Router from 'vanilla-router';
import cookie from 'js-cookie';

import ControllerHome from './controllers/home';
import Controller404Page from './controllers/404-page';
import ControllerAddUser from './controllers/admin-add-user';
import ControllerChangeUser from './controllers/admin-modify-user';
import ControllerShowProf from './controllers/show-profile';
import ControllerAddGroup from './controllers/add-group';
import ControllerAssoSuperAdmin from './controllers/asso-super-admin';
import ControllerConnection from './controllers/connection';
import ControllerCreateArticle from './controllers/create-article';
import ControllerCreateAssociation from './controllers/create-associations';
import ControllerMemberManagement from './controllers/member-management';
import ControllerPasswordForgotten from './controllers/password-forgotten';
import ControllerAssociationPage from './controllers/association-page';
import ControllerChangeProfile from './controllers/change-profile';
import ControllerDelGroup from './controllers/delete-group';
import ControllerGenProfile from './controllers/general-profile';

import './index.scss';
import './404.scss';

const router = new Router({
  mode: 'history',
  page404: () => {
    new Controller404Page();
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
  new ControllerShowProf();
});

router.add('/addGrp', () => {
  new ControllerAddGroup();
});

router.add('/delGrp', () => {
  new ControllerDelGroup();
});

router.add('/assosSuperAdmin', () => {
  new ControllerAssoSuperAdmin();
});

router.add('/connection', () => {
  new ControllerConnection();
});

router.add('/createArticle', () => {
  new ControllerCreateArticle();
});

router.add('/createAssos', () => {
  new ControllerCreateAssociation();
});

router.add('/gestMember', () => {
  new ControllerMemberManagement();
});

router.add('/password-forgot', () => {
  new ControllerPasswordForgotten();
});

router.add('/homeAssos', () => {
  new ControllerAssociationPage();
});

router.add('/change-profile', () => {
  new ControllerChangeProfile();
});

router.add('/general-profile', () => {
  new ControllerGenProfile();
});

const queryString = window.location.search;
const { pathname } = location;

if (cookie.get('token') || (pathname === '/password-forgot')) {
  router.navigateTo(pathname + queryString);
} else {
  router.navigateTo('/connection');
}
