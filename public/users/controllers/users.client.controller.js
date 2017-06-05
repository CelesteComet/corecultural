angular.module('users').controller('UsersController', ['$scope', '$http', '$location', function($scope, $http, $location) {

  $scope.errorMessage = "";

  $scope.signin = function() {
    var email = $scope.email;
    var password = $scope.password;
    var data = {username: email, password: password};
    $http.post('/signin', data).then(function(res) {
      if(res.data._id) {
        window.user = res.data;
        $location.path('/');
      } else {
        $scope.errorMessage = "Username or password is not correct."
      }
    })
  }
  
}])