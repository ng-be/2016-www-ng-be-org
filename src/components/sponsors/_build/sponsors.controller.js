export default function(ngModule, options){

  ngModule.controller('HomepageController', HomepageController);

  function HomepageController($scope){
  }

  // Inject dependencies
  HomepageController.$inject = ['$scope'];

}
