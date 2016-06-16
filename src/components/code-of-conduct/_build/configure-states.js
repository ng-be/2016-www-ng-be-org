export default function(ngModule, options){

  ngModule.config(configureStates);

  /**
   * Configure states
   *
   * @param $stateProvider
   */
  function configureStates($stateProvider){

    $stateProvider
      .state('app.public.codeOfConduct', {
        url: '/code-of-conduct',
        views: {
          'content@': {
            templateUrl: options.baseUrl + '/code-of-conduct.html',
            controller: 'HomepageController'
          }
        }
      });

  }

  // Inject dependencies
  configureStates.$inject = ['$stateProvider'];

}

