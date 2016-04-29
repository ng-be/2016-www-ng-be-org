export default function(ngModule, options){

  ngModule.config(configureStates);

  /**
   * Configure states
   *
   * @param $stateProvider
   */
  function configureStates($stateProvider){

    $stateProvider
      .state('app.public.location', {
        url: '/location',
        views: {
          'content@': {
            templateUrl: options.baseUrl + '/location.html',
            controller: 'HomepageController'
          }
        }
      });

  }

  // Inject dependencies
  configureStates.$inject = ['$stateProvider'];

}

