import angular from 'angular';
import config from './config';

import configureStates from './configure-states';
import registerLocationController from './location.controller';

export default function(ngModule, options){
  angular.merge(config, options);

  configureStates(ngModule, options);
  registerLocationController(ngModule, options);
}
