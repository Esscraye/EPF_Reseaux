import ControllerPage from './page';
import ViewGenProfile from '../views/general_profile';

const GenProfile = class GenProfile {
  constructor() {
    this.run();
    this.data = { infoPerso: {} };
  }

  run() {
    new ControllerPage(ViewGenProfile(this.data));
    this.onHandleClick();
  }
};

export default GenProfile;
