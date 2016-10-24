angular.element(document).ready(function () {
  setTimeout(
    function () {
      angular.bootstrap(document, ['myApp']);
    }, 0
  )
});

angular.module('myApp', ['ui.router'])
  .controller('MainController', ['$scope', function ($scope) {
    $scope.count = 5;

    setInterval(function () {
      $scope.count++;
    }, 1000);

    $scope.inc = function () {
      $scope.count++;
    }
  }])
  .config(function ($stateProvider) {
    var gradebook = {
      name: 'gradebook',
      url: '/gradebook',
      template: '<h3>hello world!</h3>'
    }

    var profile = {
      name: 'profile',
      url: '/profile',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    $stateProvider.state(gradebook);
    $stateProvider.state(profile);
  });




