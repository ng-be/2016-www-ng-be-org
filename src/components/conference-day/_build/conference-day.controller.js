export default function(ngModule, options){

  ngModule.controller('ConferenceDayController', ConferenceDayController);

  function ConferenceDayController($scope){
  }

  // Inject dependencies
  ConferenceDayController.$inject = ['$scope'];

}
