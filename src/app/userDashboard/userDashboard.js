
class UserDashboardController {
  /** @ngInject */

  constructor($http, $cookies, $location) {
    const user = {
      UserEmail: $cookies.get('UserEmail'),
      UserPassword: $cookies.get('UserPassword'),
      UserID: ($cookies.get('id') + '/')
    };
    const userEventsUrl = 'http://localhost:52784/api/users/getusersevents/' +
      user.UserID + '/' + user.UserEmail + '/' + user.UserPassword + '/';
    $http({
      url: userEventsUrl,
      method: 'GET'
    }).then(response => {
      this.userEvents = response.data;
    }).catch(error => {
      $location.path('/');
      this.authenticationError = error;
    });
  }
}

export const userDashboardInfo = {
  template: require('./userDashboard.html'),
  controller: UserDashboardController
};
