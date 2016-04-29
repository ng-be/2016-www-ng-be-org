import angular from 'angular';
import config from './config';

import registerInvalidRouteHandler from './register-invalid-route-handler';

export default function(ngModule, options){
  angular.merge(config, options);

  registerInvalidRouteHandler(ngModule, config);
}
