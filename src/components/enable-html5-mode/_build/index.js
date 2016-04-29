import angular from 'angular';
import config from './config';

import configureHtml5Mode from './configure-html5-mode';

export default function(ngModule, options){
  angular.merge(config, options);

  configureHtml5Mode(ngModule, options);
}
