var app = angular.module('app', []);
app.controller('appController', function($scope, $http){
  $http.get('date/users.json').success(function(data){
    $scope.datos = data;
  });
});
