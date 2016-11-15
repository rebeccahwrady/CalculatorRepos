var app = angular.module('myCalculator', [])

app.controller('myCalculateCtrl', ['$scope', '$rootScope', function ($scope, $rootScope){
        $scope.operand1 = 0;
        $scope.operand2 = 0;
        $scope.op1 = 0;
        $scope.op2 = 0;
        $scope.math = "adding";
        $scope.word = "and";
        $scope.result = 0;

        $rootScope.add = function(){
            if($scope.operand1 == "" || $scope.operand2 == ""){
                alert("You cannot leave your operands blank!!")
            }
            else{
                $scope.result = parseInt($scope.operand1) + parseInt($scope.operand2);
                $scope.math = "adding";
                $scope.word = "and";
                $scope.op1 = $scope.operand1;
                $scope.op2 = $scope.operand2;
                $scope.operand1 = 0;
                $scope.operand2 = 0;
            }
        }

        $rootScope.subtract = function(){
            if($scope.operand1 == "" || $scope.operand2 == ""){
                alert("You cannot leave your operands blank!!")
            }
            else{
                $scope.result = $scope.operand1 - $scope.operand2;
                $scope.math = "subtracting";
                $scope.word = "from";
                $scope.op1 = $scope.operand2;
                $scope.op2 = $scope.operand1;
                $scope.operand1 = 0;
                $scope.operand2 = 0;
            }
        }

        $rootScope.multiply = function(){
            if($scope.operand1 == "" || $scope.operand2 == ""){
                alert("You cannot leave your operands blank!!")
            }
            else{
                $scope.result = $scope.operand1 * $scope.operand2;
                $scope.math = "multiplying";
                $scope.word = "by";
                $scope.op1 = $scope.operand1;
                $scope.op2 = $scope.operand2;
                $scope.operand1 = 0;
                $scope.operand2 = 0;
            }
        }

        $rootScope.divide = function(){
            if ($scope.operand2 == 0){
                alert("Sorry, you cannot divide by zero!!");
            }
            else if($scope.operand1 == "" || $scope.operand2 == ""){
                alert("You cannot leave your operands blank!!")
            }
            else{  
                $scope.result = $scope.operand1 / $scope.operand2;
                $scope.math = "dividing";
                $scope.word = "by";
                $scope.op1 = $scope.operand1;
                $scope.op2 = $scope.operand2;
                $scope.operand1 = 0;
                $scope.operand2 = 0;
            };
        }
        
    }])