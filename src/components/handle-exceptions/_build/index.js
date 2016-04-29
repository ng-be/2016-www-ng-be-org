import angular from 'angular';
import config from './config';

import registerExceptionHandlerDecorator from './exception-handler.decorator';

export default function(ngModule, options){
  angular.merge(config, options);

  registerExceptionHandlerDecorator(ngModule, config);
}
