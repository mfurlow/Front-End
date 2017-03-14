class EventDetailController {
  /** @ngInject */
  constructor($http, $stateParams) {
    $http({
      url: 'http://localhost:52784/api/events/getevent/',
      method: 'GET',
      params: {id: $stateParams.id}
    }).then(response => {
      this.event = response.data;
    });
  }
}

export const eventInfo = {
  template: require('./event.html'),
  controller: EventDetailController
};
