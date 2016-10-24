angular.element(document).ready(function () {
  setTimeout(
    function () {
      angular.bootstrap(document, ['myApp']);
    }, 0
  )
});

angular.module('myApp', [])
  .controller('MainController', ['$scope', function ($scope) {
    $scope.count = 5;

    setInterval(function () {
      $scope.count++;
    }, 1000);

    $scope.inc = function () {
      $scope.count++;
    }
  }]);

