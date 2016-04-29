export default function(ngModule, options){

  ngModule.config(registerExceptionHandler);

  /**
   * This decorator allows custom logic to be executed
   * when an exception is thrown.
   *
   * By default, it first delegates to the built-in
   * AngularJS exception handler that logs a stacktrace
   * in the console.
   *
   * @param $delegate
   * @returns {Function}
   */
  function exceptionHandler($delegate, $log){
    return function(exception, cause) {

      // Delegate to AngularJS handler first
      $delegate(exception, cause);

      $log.debug('exceptionHandler: exception was thrown', exception);
    };
  }

  // Inject dependencies
  exceptionHandler.$inject = ['$delegate', '$log'];

  /**
   * Register the exception handler with the provider
   *
   * @param $provide
   */
  function registerExceptionHandler($provide){
    $provide.decorator('$exceptionHandler', exceptionHandler);
  }

  // Inject dependencies
  registerExceptionHandler.$inject = ['$provide'];

}

