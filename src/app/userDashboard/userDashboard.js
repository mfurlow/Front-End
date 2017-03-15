
class UserDashboardController {
  /** @ngInject */

// need to re-add $state, $location,$cookies
  constructor($http, $cookies, $location, $state) {
    const user = {
      UserEmail: $cookies.get('UserEmail'),
      UserPassword: $cookies.get('UserPassword'),
      UserID: ($cookies.get('id') + '/')
    };
    const userEventsUrl = 'http://localhost:52784/api/users/getusersevents/' +
      user.UserID + '/' + user.UserEmail + '/' + user.UserPassword + '/';
    // const demoUrl = 'http://localhost:52784/api/users/getusersevents/500000023/sashafierce@gmail.com/secret';
    $http({
      url: userEventsUrl,
      method: 'GET'
    }).then(response => {
      this.userEvents = response.data;
    }).catch(error => {
      $location.path('/');
      this.authenticationError = error;
    });

    this.registerEvent = function (EventID) {
      const registerEventURL = 'http://localhost:52784/api/users/registerevent/' +
        $cookies.get('id') + '/' + EventID + '/' + $cookies.get('UserEmail') + '/' +
        $cookies.get('UserPassword');

      $http.post(registerEventURL, {
        withCredentials: true
      }).then(response => {
        $state.reload();
        this.user = response.data;
      }).catch(error => {
        this.errorMessage = error;
      });
    };

    this.deleteRegisteredEvent = function (EventID) {
      const dropRegisteredEventURL = 'http://localhost:52784/api/users/dropregisteredevent/' +
        $cookies.get('id') + '/' + EventID + '/' + $cookies.get('UserEmail') + '/' +
        $cookies.get('UserPassword');

      $http.delete(dropRegisteredEventURL, {
        withCredentials: true
      }).then(response => {
        $state.reload();
        this.user = response.data;
      }).catch(error => {
        this.errorMessage = error;
      });
    };

    this.deleteSavedEvent = function (EventID) {
      const dropSavedEventURL = 'http://localhost:52784/api/users/dropsavedevent/' +
        $cookies.get('id') + '/' + EventID + '/' + $cookies.get('UserEmail') + '/' +
        $cookies.get('UserPassword');

      $http.delete(dropSavedEventURL, {
        withCredentials: true
      }).then(response => {
        this.user = response.data;
        $state.reload();
      }).catch(error => {
        this.errorMessage = error;
      });
    };
  }
}

export const userDashboardInfo = {
  template: require('./userDashboard.html'),
  controller: UserDashboardController
};
