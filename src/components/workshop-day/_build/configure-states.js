export default function(ngModule, options){

  ngModule.config(configureStates);

  /**
   * Configure states
   *
   * @param $stateProvider
   */
  function configureStates($stateProvider){

    $stateProvider
      .state('app.public.workshopDay', {
        url: '/workshop-day',
        views: {
          'content@': {
            templateUrl: options.baseUrl + '/workshop-day.html',
            controller: 'WorkshopDayController'
          }
        }
      });

  }

  // Inject dependencies
  configureStates.$inject = ['$stateProvider'];

}

