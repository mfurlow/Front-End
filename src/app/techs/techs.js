class TechsController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('http://localhost:52784/api/events/getevents/')
      .then(response => {
        this.techs = response.data;
      });
  }
}

export const techs = {
  template: require('./techs.html'),
  controller: TechsController
};
