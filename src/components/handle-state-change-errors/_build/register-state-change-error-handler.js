export default function(ngModule, options){

  ngModule.run(registerErrorHandler);

  /**
   * Register error handler for ui-router state change errors
   *
   * This catches errors that are thrown while the state is changing e.g. during resource resolution.
   */
  function registerErrorHandler($rootScope, $log, $state) {

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

      $log.debug('$stateChangeError: error occurred', error);

      // Ignore 401 because that is handled already in handle-api-401-responses
      // If we don't ignore, the error page is show briefly, before the user
      // is redirected to the sign-in page.
      if(error.status === 401){
        return;
      }

      event.preventDefault();
      $state.go('app.public.error');
    });

  }

  // Inject dependencies;
  registerErrorHandler.$inject = ['$rootScope', '$log', '$state'];

}

