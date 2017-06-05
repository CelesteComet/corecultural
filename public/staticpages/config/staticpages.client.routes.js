var urlBasePath = 'staticpages/views/';

angular.module('staticPages').config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: '/staticpages/views/index.client.view.html'
  }).
  otherwise('/')
}])