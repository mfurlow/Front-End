import angular from 'angular';

import {techsModule} from './app/techs/index';
import {eventDetailModule} from './app/events/index';
import {loginModule} from './app/login/index';
import {userUpdateModule} from './app/userupdate/index';
import {userDashboardModule} from './app/userDashboard/index';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';
import {nav} from './app/nav';
import {carouselImages} from './app/carousel';
import {navigation} from './app/navigation';

// import './app/index.scss';
// this registers all of the components, modules, and libraries to a module
angular
  .module('app', [techsModule, eventDetailModule, loginModule, userUpdateModule,
    userDashboardModule, 'ngCookies', 'ui.router', 'ui.bootstrap'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer)
  .component('fountainNav', nav)
  .component('fountainCarousel', carouselImages)
  .component('fountainNavigation', navigation);
