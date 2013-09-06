function NewsCtrl($scope, $http) {
    'use strict';

    $scope.news = [];
    $scope.categories = [];
    $scope.catFilter = {};

    $http.get('endpoint/news.json').success(function(data) {
        $scope.news = data;
        for (var i = 0; i < data.length; i++) {
            $scope.categories.push(data[i].category);
            $scope.catFilter[data[i].category] = true;
        }
        console.log(data);
    });

    $scope.categoryFilter = function(item) {
        return $scope.catFilter[item.category];
    };
}
