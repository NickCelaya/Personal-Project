angular.module("firstApp").service("mainService", function($http, $stateParams){

// var baseUrl = "http://swapi.co/api/people/"
var endPoint1 = "/imagesUrl"
var endPoint2 = "/products/"
var endPoint3 = "/productsInfo"



this.getData = function(){
  var promise = $http({
    method: "GET",
    url: endPoint2 + $stateParams.id  //enable to test data again
  })
  return promise.then(function(response){
    console.log(response.data);
    return response.data
  })
}




// //example of a post request
// this.createUser = function(objectFromController){
//   return $http({
//     method: "POST",
//     url: "someUrl",
//     data: {
//       objectFromController
//     }
//   })
// }







//end of service
});
