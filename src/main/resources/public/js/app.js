angular.module('demo', [])
    .controller('hotel', function($scope, $http) {
        $http.get('/api/scm/v1/hotels').
        then(function(response) {
            $scope.hotels = response.data;
            $scope.size = $scope.hotels.length-1;
        });
    });