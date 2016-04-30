export default function(ngModule, options){

  ngModule.config(configureStates);

  /**
   * Configure states
   *
   * @param $stateProvider
   */
  function configureStates($stateProvider){

    $stateProvider
      .state('app.public.team', {
        url: '/team',
        views: {
          'content@': {
            templateUrl: options.baseUrl + '/team.html',
            controller: 'HomepageController'
          }
        }
      });

  }

  // Inject dependencies
  configureStates.$inject = ['$stateProvider'];

}

