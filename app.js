(function() {
  'use strict'
  angular.module("myFirstApp",[])

  .controller("MyFirstController", function ($scope) {
  $scope.name = "Niranjan";
  $scope.displayName = function() {
    return "Angular";
  }

});

})();
