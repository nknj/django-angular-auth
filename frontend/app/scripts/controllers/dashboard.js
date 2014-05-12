'use strict';

app.controller('DashboardCtrl', function ($scope, $location, $window, AuthService) {
  if (!$window.localStorage.token) {
    $location.path('/');
    return;
  }

  $scope.token = $window.localStorage.token;
  $scope.username = $window.localStorage.username;
  $scope.logout = function () {
    AuthService.logout().then(
      function () {
        $location.path('/');
      },
      function (error) {
        $scope.error = error;
      }
    );
  };
});
