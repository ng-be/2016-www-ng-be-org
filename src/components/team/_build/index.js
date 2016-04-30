import angular from 'angular';
import config from './config';

import configureStates from './configure-states';
import registerTeamController from './team.controller';

export default function(ngModule, options){
  angular.merge(config, options);

  configureStates(ngModule, options);
  registerTeamController(ngModule, options);
}
