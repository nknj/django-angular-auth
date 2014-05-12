'use strict';

app.controller('AuthCtrl', function ($scope, $location, AuthService) {
  $scope.register = function () {
    var username = $scope.register.username;
    var password = $scope.register.password;

    if (username && password) {
      AuthService.register(username, password).then(
        function () {
          $location.path('/dashboard');
        },
        function (error) {
          $scope.error = error;
        }
      );
    } else {
      $scope.error = 'Username and password required';
    }
  };
  $scope.login = function () {
    var username = $scope.login.username;
    var password = $scope.login.password;

    if (username && password) {
      AuthService.login(username, password).then(
        function () {
          $location.path('/dashboard');
        },
        function (error) {
          $scope.loginError = error;
        }
      );
    } else {
      $scope.error = 'Username and password required';
    }
  };
});
