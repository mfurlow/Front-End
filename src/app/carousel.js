class CarouselController {
  /** @ngInject */
  constructor($http) {
    this.myInterval = 3000;
    this.noWrapSlides = false;

    $http
      .get('app/carousel.json')
      .then(response => {
        this.carousels = response.data;
      });
  }
}

export const carouselImages = {
  template: require('./carousel.html'),
  controller: CarouselController
};
