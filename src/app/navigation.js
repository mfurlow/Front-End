// if there were injections this is where they would go
class NavigationController {
  /** @ngInject */
  constructor($cookies) {
    this.logout = function () {
      $cookies.put('UserEmail', '');
      $cookies.put('UserPassword', '');
      $cookies.put('id', '');
    };
  }
}

export const navigation = {
  template: require('./navigation.html'),
  controller: NavigationController
};

