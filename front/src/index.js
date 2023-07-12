import Router from 'vanilla-router';
import config from '../config';

import ControllerHome from './controllers/home';
import Controller404Page from './controllers/404-page';
import ControllerChangeUser from './controllers/admin-modify-user';
import ControllerShowProf from './controllers/show-profile';
import ControllerAssoSuperAdmin from './controllers/asso-super-admin';
import ControllerConnection from './controllers/connection';
import ControllerCreateArticle from './controllers/create-article';
import ControllerCreateAssociation from './controllers/create-associations';
import ControllerMemberManagement from './controllers/member-management';
import ControllerPasswordForgotten from './controllers/password-forgotten';
import ControllerAssociationPage from './controllers/association-page';
import ControllerChangeProfile from './controllers/change-profile';
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

router.add('/changeUser', () => {
  new ControllerChangeUser();
});

router.add('/profil', () => {
  new ControllerShowProf();
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

router.add('/logout', () => {
  localStorage.clear();
  router.navigateTo('/connection');
});

const docTitle = document.title;
window.addEventListener('blur', () => {
  document.title = 'Reviens ! ;(';
});

window.addEventListener('focus', () => {
  document.title = docTitle;
});

const queryString = window.location.search;
const { pathname } = location;

let xsrfToken = localStorage.getItem('xsrfToken');

if (pathname === '/connection' || pathname === '/password-forgot') {
  router.navigateTo(pathname + queryString);
} else if (xsrfToken && localStorage.getItem('token')) {
  xsrfToken = JSON.parse(xsrfToken);

  const headers = new Headers();
  headers.append('x-xsrf-token', xsrfToken);

  const options = {
    method: 'GET',
    mode: 'cors',
    headers,
    credentials: 'include',
    origin: config.IP_API
  };

  const response = await fetch(`${config.IP_API}/checkToken`, options);

  if (response.status === 200) {
    router.navigateTo(pathname + queryString);
  } else {
    router.navigateTo('/connection');
  }
} else {
  router.navigateTo('/connection');
}
