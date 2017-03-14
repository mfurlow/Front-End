import angular from 'angular';

import {eventInfo} from './event';

export const eventDetailModule = 'eventDetail';

angular
  .module(eventDetailModule, [])
  .component('eventualEvent', eventInfo);
