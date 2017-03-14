export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('EventID', {
      url: '/event/:id',
      component: 'eventualEvent'
    })
    .state('Login', {
      url: '/login',
      component: 'eventualLogin'
    })
    .state('UserInfo', {
      url: '/user/userinfo',
      component: 'eventualUserInfo'
    })
    .state('UserDashboard', {
      url: '/user/userDashboard',
      component: 'eventualUserDashboard'
    });
}

