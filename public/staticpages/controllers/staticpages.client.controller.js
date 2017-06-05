angular.module('staticPages').controller('StaticPagesController', ['$scope', '$http', 'Authentication', function($scope, $http, Authentication) {
  $scope.authentication = Authentication;
}])