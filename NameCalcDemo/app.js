(function() {
  'use strict'
  angular.module("NameCalc",[])
  .controller("NameCalcController", function ($scope) {
  $scope.name = "";
  $scope.totalVal=0;
  $scope.displayNameVal=function() {
//  var tVal = CalNameVal($scope.name);
  $scope.totalVal=CalNameVal($scope.name);
};

function CalNameVal(str) {
  var totalStringValue = 0;
      for (var i = 0; i < str.length; i++) {
        totalStringValue += str.charCodeAt(i);
      }
  return totalStringValue;
}

});
})();
