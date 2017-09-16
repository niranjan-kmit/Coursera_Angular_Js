(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.eatList = "";
  $scope.message="";
  $scope.eat=function() {
    var eItemList = trimArray($scope.eatList.split(","));
    console.log(eItemList.length);
    if(eItemList.length > 0){
      if(eItemList.length < 3) $scope.message="Enjoy!";
      else if(eItemList.length > 3) $scope.message="Too much!";
    }else{
    $scope.message="Please enter data first";
    }
  }
  function trimArray(arr) {
    var newArray=[];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]!="") newArray.push(arr[i]);
    }
    return newArray;
  }
}
})();
