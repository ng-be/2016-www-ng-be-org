export default function(ngModule, options){

  ngModule.config(enableHtml5Routing);

  /**
   * Enable HTML5 routing mode
   */
  function enableHtml5Routing($locationProvider) {
    $locationProvider.html5Mode(true);
  }

  // Inject dependencies;
  enableHtml5Routing.$inject = ['$locationProvider'];

}

