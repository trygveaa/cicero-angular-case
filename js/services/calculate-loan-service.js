var loanServices = angular.module("loanServices", []);

loanServices.factory("CalculateLoanService", [
    "$http",
    function ($http) {

        function getLoanCalculation(loan, successCallback, errorCallback) {
            var date = new Date();
            var url = "https://cfs-ws-itera.cicero.no/cfp/6/ws/rest/calculator/calculateLoan?_jsonp=JSON_CALLBACK";
            var args =
                "&loanRaisingMonth=" + (date.getMonth() + 1) +
                "&loanRaisingYear=" + (date.getYear() + 1900) +
                "&principalAmount=" + loan.amount +
                "&annualNominalInterestRate=" + loan.interest +
                "&totalNumberOfPayments=" + Math.round(loan.years * 12);

            $http.jsonp(url + args,
                { method: "GET"}
            ).success(successCallback).error(errorCallback);
        }

        function getMonthlyPayment(loan, successCallback, errorCallback) {
            getLoanCalculation(loan,
                function (data) {
                    successCallback(data.amortizationSchedule[0].payment);
                },
                function (data, status) {
                    errorCallback(status + " " + (data || ""));
                }
            );
        }

        return {
            getMonthlyPayment: getMonthlyPayment
        };
    }
]);
