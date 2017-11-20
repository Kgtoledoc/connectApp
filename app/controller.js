angular.module('app.Controller', [])
  .controller('appController', function($scope, $http){
    $http.get('data/users.json').success(function(data){
      $scope.datos = data;
    });
  })
  .controller('singlePostController',function($scope, $http, $routeParams){
      $http.get('data/userId.json').success(function(data){
      $scope.post = data[$routeParams.id];
    });


  }).controller('appController1', function($scope, $http,$routeParams){
    $http.get('data/users.json').success(function(data){
      $scope.datos1 = data[$routeParams.id];
    });
  });
