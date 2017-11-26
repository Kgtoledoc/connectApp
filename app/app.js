angular.module('app',[
  'ngRoute',
  'app.Controller'
]).config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl:'views/post.html',
    }).when('/post/:id', {
      templateUrl: 'views/singlePost.html',
    }).otherwise({
      redirecTo:'/'
    });
  });
