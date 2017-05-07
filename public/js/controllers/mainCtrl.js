angular.module("firstApp").controller("mainCtrl", function($scope, mainService){

$scope.data;


$scope.returnData = function(){
  var promise = mainService.getData()
    promise.then(function(response){
      $scope.data = response
    })
}


$scope.returnData();





// end of controller
});
