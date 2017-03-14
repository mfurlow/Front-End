class EventDetailController {
  /** @ngInject */
  constructor($http, $stateParams, $location, $cookies) {
    $http({
      url: 'http://localhost:52784/api/events/getevent/',
      method: 'GET',
      params: {id: $stateParams.id}
    }).then(response => {
      this.event = response.data;
    }).catch(error => {
      $location.path('/');
      this.errorMessage = error;
    });

    this.registerEvent = function (EventID) {
      const registerEventURL = 'http://localhost:52784/api/users/registerevent/' +
        $cookies.get('id') + '/' + EventID + '/' + $cookies.get('UserEmail') + '/' +
        $cookies.get('UserPassword');

      $http.post(registerEventURL, {
        withCredentials: true
      }).then(response => {
        this.user = response.data;
        this.successMessage = 'Event added to your dashboard';
      }).catch(error => {
        this.errorMessage = error;
      });
    };

    this.favoriteEvent = function (EventID) {
      const registerEventURL = 'http://localhost:52784/api/users/saveevent/' +
        $cookies.get('id') + '/' + EventID + '/' + $cookies.get('UserEmail') + '/' +
        $cookies.get('UserPassword');

      $http.post(registerEventURL, {
        withCredentials: true
      }).then(response => {
        this.user = response.data;
        this.successMessage = 'Event added to your dashboard';
      }).catch(error => {
        this.errorMessage = error;
      });
    };
  }
}

export const eventInfo = {
  template: require('./event.html'),
  controller: EventDetailController
};
