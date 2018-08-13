angular.module('rpcApp', [])
            .controller('rpcController', ['$scope', function($scope) {
                $scope.win=0;
                $scope.lose=0;
                $scope.computerCount = 0;
                $scope.userCount=0;
                $scope.computerChoice='';
                $scope.userChoice='';
                $scope.result='';
                /* function to get computer choice*/
                var getComputerChoice = function(){
                    var choices = ['Rock', 'Paper', 'Scissors'];
                    var compChoice = choices[Math.floor(Math.random() * choices.length)];
                    return compChoice;
                }
                $scope.playGame = function(userOption) {
                    $scope.computerChoice=getComputerChoice();
                    $scope.userChoice=userOption;
                    if(userOption==$scope.computerChoice){
                        $scope.result="It is a tie"
                    }
                    else if(userOption=="Rock"){
                        if($scope.computerChoice=="Paper"){
                            $scope.result="Computer won"
                            $scope.lose=$scope.lose+1;
                        }
                        else{
                           $scope.result="You won" 
                            $scope.win=$scope.win+1;
                        }
                    }
                    else if(userOption=="Paper"){
                        if($scope.computerChoice=="Rock"){
                            $scope.result="You won"
                            $scope.win=$scope.win+1;
                        }
                        else{
                           $scope.result="Computer won" 
                            $scope.lose=$scope.lose+1;
                        }
                    }
                    else if(userOption=="Scissors"){
                        if($scope.computerChoice=="Paper"){
                            $scope.result="You won"
                            $scope.win=$scope.win+1;
                        }
                        else{
                           $scope.result="Computer won" 
                            $scope.lose=$scope.lose+1;
                        }
                    }
                    else{
                        $scope.result="some error"
                    }
                    
                
        };
}]);
        
 
