import angular from 'angular';
import config from './config';

import configureStates from './configure-states';
import registerContactController from './contact.controller';

export default function(ngModule, options){
  angular.merge(config, options);

  configureStates(ngModule, options);
  registerContactController(ngModule, options);
}
