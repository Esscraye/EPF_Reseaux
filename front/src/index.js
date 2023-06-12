import Router from 'vanilla-router';

import ControllerHome from './controllers/gestionmembre';

import './index.scss';

const router = new Router({
  mode: 'history',
  page404: () => {
    new ControllerHome();
  }
});

router.add('', () => {
  new ControllerHome();
});

const { pathname } = location;
router.navigateTo(pathname);
