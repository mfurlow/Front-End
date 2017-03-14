class UserEventsController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('http://localhost:52784/api/events/getevents/')
      .then(response => {
        this.userEvents = response.data;
      });
  }
}

export const userEvents = {
  template: require('./userEvents.html'),
  controller: UserEventsController
};
