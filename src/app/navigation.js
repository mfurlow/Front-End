// if there were injections this is where they would go
class NavigationController {
  /** @ngInject */
  constructor($cookies, $location) {
    this.logout = function () {
      $cookies.put('UserEmail', '');
      $cookies.put('UserPassword', '');
      $cookies.put('id', '');
      $location.path('/');
    };
  }
}

export const navigation = {
  template: require('./navigation.html'),
  controller: NavigationController
};

