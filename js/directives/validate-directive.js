var loanDirectives = angular.module("loanDirectives", []);

loanDirectives.directive("inputValidate", function () {
    return {
        link: function (scope, el) {
            var input = angular.element(el[0].getElementsByTagName("input")[0]);

            input.on("blur", function () {
                var invalid = input.hasClass("ng-invalid");
                el.toggleClass("invalid", invalid);
            });

            input.on("input", function () {
                var invalid = input.hasClass("ng-dirty") && input.hasClass("ng-invalid-number");
                el.toggleClass("invalid", invalid);
            });
        }
    };
});
