import PlayerModule from './player/player-module';
import UserModule from './user/user-module';

angular.element(document).ready(function () {
  setTimeout(
    function () {
      angular.bootstrap(document, ['myApp']);
    }, 0
  )
});

angular.module('myApp', ['ui.router', 'userModule'])
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
      template: '<h3>Gradebook</h3>' +
      ''
    }

    var profile = {
      name: 'profile',
      url: '/profile',
      template: '<user-list my-var="22424"></user-list>' +
      '<user-list my-var="22424"></user-list>'
    }

    $stateProvider.state(gradebook);
    $stateProvider.state(profile);
  });




