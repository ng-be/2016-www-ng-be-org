export default function(ngModule, options){

  ngModule.controller('WorkshopDayController', WorkshopDayController);

  function WorkshopDayController($scope){
  }

  // Inject dependencies
  WorkshopDayController.$inject = ['$scope'];

}
