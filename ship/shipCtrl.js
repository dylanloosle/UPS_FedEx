var app = angular.module('rates');

app.controller('shipCtrl', function($scope, mainService){

    $scope.getStates = function() {
        $scope.states = mainService.getStates();
    };

    $scope.shipFromCompany = '';
    $scope.shipFromAddr1 = '';
    $scope.shipFromAddr2 = '';
    $scope.shipFromCity = '';
    $scope.shipFromState = '';
    $scope.shipFromZip = '';
    $scope.shipFromCtry = '';
    $scope.shipFromPh = '';

    $scope.shipToCompany = '';
    $scope.shipToAddr1 = '';
    $scope.shipToCity = '';
    $scope.shipToState = '';
    $scope.shipToZip = '';
    $scope.shipToCtry = '';
    $scope.shipToPh = '';

    $scope.length = '';
    $scope.width = '';
    $scope.height = '';
    $scope.weight = '';



    $scope.getRates = function(){
        $scope.rates = mainService.getRates($scope.shipFromCompany, $scope.shipFromAddr1, $scope.shipFromAddr2, $scope.shipFromCity, $scope.shipFromState, $scope.shipFromZip, $scope.shipFromCtry, $scope.shipFromPh, $scope.shipToCompany, $scope.shipToAddr1, $scope.shipToCity, $scope.shipToState, $scope.shipToZip, $scope.shipToCtry, $scope.shipToPh, $scope.length, $scope.width, $scope.height, $scope.weight)

    };







});