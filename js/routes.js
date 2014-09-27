var loanApp = angular.module("loanApp", [
    "ngRoute",
    "loanControllers",
    "loanServices"
]);

loanApp.config([
    "$routeProvider",
    function ($routeProvider) {
        $routeProvider.
            when("/calculate-loan", {
                templateUrl: "partials/calculate-loan.html",
                controller: "CalculateLoanController"
            }).
            otherwise({
                redirectTo: "/calculate-loan"
            });
    }
]);
