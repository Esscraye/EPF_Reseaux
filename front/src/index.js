import Router from 'vanilla-router';

import ControllerHome from './controllers/home';
import Page404 from './controllers/page-404';

import './index.scss';

const router = new Router({
  mode: 'history',
  page404: () => {
    new Page404();
  }
});

router.add('', () => {
  new ControllerHome();
});

const { pathname } = location;
router.navigateTo(pathname);
