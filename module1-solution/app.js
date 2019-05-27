(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('LunchCheckController', function ($scope) {
  $scope.ate="";
  $scope.checkout = function(){
    var foodArrT = $scope.ate.split(',');
    var foodArr = foodArrT.filter(function (element) {
      return (element.length > 1 && element && element.trim().length >1);
    });
    if(foodArr.length == 0)
      $scope.output = "Please enter data first";
    else if(foodArr.length <= 3)
      $scope.output = "Enjoy!";
    else
      $scope.output = "Too much!";
  };
});
})();
