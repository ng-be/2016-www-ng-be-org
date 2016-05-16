import angular from 'angular';
import config from './config';

import configureStates from './configure-states';
import registerWorkshopsController from './workshops.controller';

export default function(ngModule, options){
  angular.merge(config, options);

  configureStates(ngModule, options);
  registerWorkshopsController(ngModule, options);
}
