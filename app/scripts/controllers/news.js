function NewsCtrl($scope, $http) {
    'use strict';

    $scope.news = [];
    $scope.categories = [];
    $scope.catFilter = {};

    $http.get('endpoint/news.json').success(function(data) {
        $scope.news = data;
        for (var i = 0; i < data.length; i++) {
            $scope.catFilter[data[i].category] = true;
        }

        $scope.categories = Object.keys($scope.catFilter);
    });

    $scope.categoryFilter = function(item) {
        return $scope.catFilter[item.category];
    };
}
