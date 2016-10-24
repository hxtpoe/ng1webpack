angular.module('userModule', [])
  .directive('userList', function () {
    return {
      restrict: 'E',
      scope: {},
      template: '<h2>List</h2><div>' +
      '<p ng-repeat="element in ctrl.usersArray">{{element.name}} - <b>{{element.surname}}</b> - {{element.phone}}</p></div>',
      controllerAs: "ctrl",
      bindToController: true,
      controller: function ($http) {
        var self = this;

        this.myVar = 17;

        $http.get("http://localhost:9000/api/users", {
            headers: {
              token: "xx"
            },
            transformResponse: function (data) {
              var temp = [];
              var original = JSON.parse(data) || [];

              original.results.forEach(function (element) {
                var user = element.split(",");
                temp.push({
                  name: user[0],
                  surname: user[1],
                  phone: user[2]
                })
              });

              return temp;
            }
          }
        ).then(function (data) {
          self.usersArray = data.data;
        });
      }
    };
  });



