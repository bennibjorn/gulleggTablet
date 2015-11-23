angular.module('gullegg', ['ngRoute', 'ngMaterial']);


angular.module('gullegg').config(
    function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'views/front.html',
                controller: 'FrontController'
            })
            .when('/gullegg', {
                templateUrl: 'views/promo.html',
                controller: 'PromoController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
);
