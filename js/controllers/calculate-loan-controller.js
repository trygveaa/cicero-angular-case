var loanControllers = angular.module("loanControllers", []);

loanControllers.controller("CalculateLoanController", [
    "$scope", "CalculateLoanService",
    function ($scope, CalculateLoanService) {

        $scope.loan = {
            amount: null,
            years: null,
            interest: null
        };

        $scope.result = {
            payment: null,
            error: null
        };

        function setMonthlyPayment(payment) {
            $scope.result.error = null;
            $scope.result.payment = payment;
        }

        function printError(error) {
            $scope.result.payment = null;
            $scope.result.error = error;
        }

        $scope.calculate = function () {
            if ($scope.calculateLoan.$valid) {
                CalculateLoanService.getMonthlyPayment($scope.loan, setMonthlyPayment, printError);
            }
        };
    }
]);
