(function() {
  'use strict';

  angular.module('app').controller('employeesCtrl', function($scope, $http) {
    function setup() {
      $http.get('https://data.cityofchicago.org/resource/tt4n-kn4t.json').then(function(response) {

        // $scope.employees = response.data;
        $scope.employees = [];
        for (var i=0;i<=100;i++){
          $scope.employees.push(response.data[i]);
          $scope.employees[i].employee_annual_salary = Number(response.data[i].employee_annual_salary)
        }
      });
    }

    setup();



    $scope.ascendOrder = function(orderAttribute) {
      $scope.isReverse = false;
      $scope.orderAttribute = orderAttribute;
    }

    $scope.descendOrder = function(orderAttribute) {
      $scope.isReverse = true;
      $scope.orderAttribute = orderAttribute;
    }

  });
})();
