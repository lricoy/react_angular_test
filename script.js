var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.data = [];
  for (var i = 0; i < 1000; i++) {
      $scope.data[i] = {"author": i, "text": i};
  };
}]);

app.directive('myList', function(){
  return {
    scope: {
      data: '='
    },
    link: function($scope, iElm, iAttrs, controller) {
      $scope.$watch('data', function(newVal, oldVal){

        React.renderComponent(CommentBox({data: $scope.data}), document.getElementById('content'));
      });
    }
  };
});
