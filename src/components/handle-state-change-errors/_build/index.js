import angular from 'angular';
import config from './config';

import registerStateChangeErrorHandler from './register-state-change-error-handler';

export default function(ngModule, options){
  angular.merge(config, options);

  registerStateChangeErrorHandler(ngModule, options);
}
