import angular from 'angular';
import config from './config';

import configureStates from './configure-states';
import registerTermsController from './terms.controller';

export default function(ngModule, options){
  angular.merge(config, options);

  configureStates(ngModule, options);
  registerTermsController(ngModule, options);
}
