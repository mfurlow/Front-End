import angular from 'angular';

import {userDashboardInfo} from './userDashboard';

export const userDashboardModule = 'userDashboard';

angular
  .module(userDashboardModule, [])
  .component('eventualUserDashboard', userDashboardInfo);
