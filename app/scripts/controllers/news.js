function NewsCtrl($scope, $http) {
    'use strict';

    $scope.news = [];
    $scope.categories = [];
    $scope.catSelect = {};
    $scope.allDisabled = true;

    $http.get('endpoint/news.json').success(function(data) {
        $scope.news = data;
        for (var i = 0; i < data.length; i++) {
            $scope.catSelect[data[i].category] = false;
        }

        $scope.categories = Object.keys($scope.catSelect);
    });

    $scope.toggleCatSelect = function(category) {
        $scope.catSelect[category] = !$scope.catSelect[category];
        for (var key in $scope.catSelect) {
            if ($scope.catSelect.hasOwnProperty(key) && $scope.catSelect[key]) {
                $scope.allDisabled = false;
                return;
            }
        }
        $scope.allDisabled = true;
    };

    $scope.categoryFilter = function(item) {
        if ($scope.allDisabled) {
            return true;
        }

        return $scope.catSelect[item.category];
    };
}
