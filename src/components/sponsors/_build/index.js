import angular from 'angular';
import config from './config';

import configureStates from './configure-states';
import registerSponsorsController from './sponsors.controller';

export default function(ngModule, options){
  angular.merge(config, options);

  configureStates(ngModule, options);
  registerSponsorsController(ngModule, options);
}
