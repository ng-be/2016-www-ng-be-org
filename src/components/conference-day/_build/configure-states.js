export default function(ngModule, options){

  ngModule.config(configureStates);

  /**
   * Configure states
   *
   * @param $stateProvider
   */
  function configureStates($stateProvider){

    $stateProvider
      .state('app.public.conferenceDay', {
        url: '/conference-day',
        views: {
          'content@': {
            templateUrl: options.baseUrl + '/conference-day.html',
            controller: 'ConferenceDayController'
          }
        }
      });

  }

  // Inject dependencies
  configureStates.$inject = ['$stateProvider'];

}

