export default function(ngModule, options){

  ngModule.config(configureStates);

  /**
   * Configure states
   *
   * @param $stateProvider
   */
  function configureStates($stateProvider){

    $stateProvider
      .state('app.public.terms', {
        url: '/terms',
        views: {
          'content@': {
            templateUrl: options.baseUrl + '/terms.html',
            controller: 'HomepageController'
          }
        }
      });

  }

  // Inject dependencies
  configureStates.$inject = ['$stateProvider'];

}

