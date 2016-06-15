import angular from 'angular';
import config from './config';

import registerStateChangeEventHandler from './register-state-change-event-handler';

export default function(ngModule, options){
  angular.merge(config, options);

  registerStateChangeEventHandler(ngModule, options);
}
