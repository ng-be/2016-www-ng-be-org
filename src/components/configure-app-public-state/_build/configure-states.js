export default function(ngModule, options){

  ngModule.config(configureStates);

  /**
   * Configure states
   *
   * @param $stateProvider
   */
  function configureStates($stateProvider){

    $stateProvider
      .state('app.public', {
        abstract: true
      });

  }

  // Inject dependencies
  configureStates.$inject = ['$stateProvider'];

}

