export default function(ngModule, options){

  ngModule.config(configureStates);

  /**
   * Configure states
   *
   * @param $stateProvider
   */
  function configureStates($stateProvider){

    $stateProvider
      .state('app.public.contact', {
        url: '/contact',
        views: {
          'content@': {
            templateUrl: options.baseUrl + '/contact.html',
            controller: 'HomepageController'
          }
        }
      });

  }

  // Inject dependencies
  configureStates.$inject = ['$stateProvider'];

}

