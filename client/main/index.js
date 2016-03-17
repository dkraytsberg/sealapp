var app = angular.module('sealapp',[]);

app.controller('indexctrl', function ($scope, $http) {

  // $scope.header = 'This is not a seal';

  $scope.press_button = function (button, amount) {
    $http.post('/buttons/press?button='+button+'&amount='+amount)
    .then(function (res) {

      $scope.seal_presses = res.data.seal.presses;
      $scope.notseal_presses = res.data.notseal.presses;

      if($scope.seal_presses > $scope.notseal_presses) {
        $scope.header = 'This is a seal';
      }
      else {
        $scope.header = 'This is not a seal';
      }
    });
  };

  $scope.reset_counters = function () {
    $http.post('/buttons/reset').then($scope.press_button('seal', 0));
  };

  $scope.press_button('seal', 0);

});
