angular.module('gullegg')
.controller('FrontController', ['$scope', '$location', '$http',
function ($scope, $location, $http) {

    var rand = [];
    $scope.pressMeText = "";

    var getRandomString = function() {
        var randomNumber = Math.floor(Math.random()*rand.length);
        $scope.pressMeText = rand[randomNumber].gsx$text.$t;
    };

    $http({method: 'GET', url: "http://spreadsheets.google.com/feeds/list/1v9ZUhtmO9IlyOd9cpdHaHcx2IwmIpbj2HiRCZWVpIEI/od6/public/values?alt=json"}).
      success(function(data, status) {
          console.log(data.feed.entry);
          rand = data.feed.entry;
          getRandomString();
      }).
      error(function(data, status) {
          console.log(data || "Request failed");
    });

    $scope.promo = function() {
        $location.path('/gullegg');
    };
}]);
