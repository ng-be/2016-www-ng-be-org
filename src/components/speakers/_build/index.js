import angular from 'angular';
import config from './config';

import configureStates from './configure-states';
import registerSpeakersController from './speakers.controller';

export default function(ngModule, options){
  angular.merge(config, options);

  configureStates(ngModule, options);
  registerSpeakersController(ngModule, options);
}
