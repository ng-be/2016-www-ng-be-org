export default function(ngModule, options){

  ngModule.run(registerEventHandler);

  /**
   * Register event handler for ui-router state change
   *
   * See https://github.com/angular-ui/ui-router/wiki for more information.
   */
  function registerEventHandler($rootScope, $document) {

    // Fired when the transition begins
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

      // Jump to top
      $document.scrollTop(0, 0);
    });

  }

  // Inject dependencies;
  registerEventHandler.$inject = ['$rootScope', '$document'];

}

