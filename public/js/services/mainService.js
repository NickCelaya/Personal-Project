angular.module("firstApp").service("mainService", function($http, $stateParams){

// var baseUrl = "http://swapi.co/api/people/"
var endPoint1 = "/imagesUrl"
var endPoint2 = "/products"
var endPoint3 = "/productsInfo"



this.getData = function(){
  var promise = $http({
    method: "GET",
    url: '/products/'+ $stateParams.id  //enable to test data again
  })
  return promise.then(function(response){
    console.log(response.data);
    return response.data
  })
}










//end of service
});
