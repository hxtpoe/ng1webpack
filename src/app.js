angular.element(document).ready(function () {
  angular.bootstrap(document, ['myApp']);
});

angular.module('myApp', [])
  .controller('TodoController', ['$scope', function ($scope) {
    this.count = 5;
  }]);

