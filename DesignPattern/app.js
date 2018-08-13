/*
Author:Sourabha Bhat
Pattern: Singleton Pattern(Creational pattern)

Here angular services are used to achieve the pattern
Instead of defining data, we can use API to make application more realistic.

ConvertController: for currency conversion
dispController:for current rate display
*/
var app = angular.module('currConverter', [])
    app.service('currencyData',function(){
         //data based on Euro
        var rates={"CHF":1.152083,"EUR":1,"GBP":0.898627,"USD":1.159153,}
        this.get=function(){
            return rates;
        }
     });
    app.controller('ConvertCurrencyCtrl', ['$scope','currencyData' , function($scope, currencyData) {
            $scope.rates=currencyData.get();
            $scope.toCurType = $scope.rates.CHF;
            $scope.fromCurType = $scope.rates.EUR;
            $scope.fromValue = 1;
            $scope.convertCurrency = function() {
            $scope.toValue = $scope.fromValue * ($scope.toCurType * (1 / $scope.fromCurType));
        };
         $scope.convertCurrency(); 
        

    }]);
        app.controller('dispCurrentRateCtrl',['$scope','currencyData',function($scope,currencyData){
             $scope.rates=currencyData.get();
          
        }]);
