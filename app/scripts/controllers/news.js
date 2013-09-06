function NewsCtrl($scope, $http) {
    'use strict';

    $scope.news = [];
    $scope.categories = [];

    $http.get('endpoint/news.json').success(function(data) {
        $scope.news = data;
        for (var i = 0; i < data.length; i++) {
            $scope.categories.push(data[i].category);
        }
        console.log(data);
    });
}
