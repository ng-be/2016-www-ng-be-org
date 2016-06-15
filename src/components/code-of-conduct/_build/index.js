import angular from 'angular';
import config from './config';

import configureStates from './configure-states';
import registerCodeOfConductController from './code-of-conduct.controller';

export default function(ngModule, options){
  angular.merge(config, options);

  configureStates(ngModule, options);
  registerCodeOfConductController(ngModule, options);
}
