angular.module('userModule', [])
  .directive('userList', function () {
    return {
      restrict: 'E',
      scope: {},
      template: '<div>' +
      '<p ng-repeat="element in ctrl.usersArray">{{element}}</p></div>',
      controllerAs: "ctrl",
      bindToController: true,
      controller: function ($http) {
        var self = this;

        this.myVar = 17;


        $http.get("http://localhost:9000/api/users", {headers: {token: "xx"}}).then(function (data) {
          self.usersArray = data.data.results;
        });
      }
    };
  });



