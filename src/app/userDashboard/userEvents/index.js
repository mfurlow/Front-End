import angular from 'angular';

// importing compononents that define the controller and template
import {userEvent} from './userEvent';
import {userEvents} from './userEvents';

// allows for exporting module that is defined in the app module
export const userEventsModule = 'userEvents';

// defines components within the techmodule component
angular
  .module(userEventsModule, [])
  .component('eventualEvent', userEvent)
  .component('eventualEvents', userEvents);
