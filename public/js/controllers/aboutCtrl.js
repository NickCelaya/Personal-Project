angular.module("firstApp").controller("aboutCtrl", function($scope, mainService) {


  $scope.returnData = function(){
    console.log("Nick the Data is flowing");
    var promise = mainService.getData()
      promise.then(function(response){
        $scope.images = response.images
        $scope.info = response.info
        $scope.product = response.product[0]
      })
  }


  $scope.returnData();



// $scope.getImages = function(){
//   let promise = mainService.getImages()
//   promise.then(function(response){
//     $scope.images = response
//   })
// }

// $scope.getImages();

// end of controller
});
