var urlBasePath = 'users/views/';
angular.module('users').config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/signin', {
    templateUrl: urlBasePath + 'signin.client.view.html'
  }).
  when('/signup', {
    templateUrl: urlBasePath + 'signup.client.view.html'
  }).
  when('/signout', {
    
  });
}])