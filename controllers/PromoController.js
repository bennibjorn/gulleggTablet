angular.module('gullegg')
.controller('PromoController', ['$scope', '$location', '$window',
function ($scope, $location, $window) {

    $scope.gulleggLink = function() {
        $window.location.href = 'http://gulleggid.is';
    };

    $scope.back = function() {
        $location.path('/');
    };

}]);
