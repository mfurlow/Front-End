import angular from 'angular';

import {loginPage} from './login';

export const loginModule = 'login';

angular
  .module(loginModule, [])
  .component('eventualLogin', loginPage);

