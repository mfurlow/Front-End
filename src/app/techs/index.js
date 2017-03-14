import angular from 'angular';

// importing compononents that define the controller and template
import {tech} from './tech';
import {techs} from './techs';

// allows for exporting module that is defined in the app module
export const techsModule = 'techs';

// defines components within the techmodule component
angular
  .module(techsModule, [])
  .component('fountainTech', tech)
  .component('fountainTechs', techs);
