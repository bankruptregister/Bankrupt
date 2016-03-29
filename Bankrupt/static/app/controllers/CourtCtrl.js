angular.module("Bankrupt").controller("CourtCtrl", function ($scope, $http, $resource, $location, $rootScope, baseUrl) {
    var Court = $resource(baseUrl + "court/:id/", {id: "@id"});
    $scope.courtList = Court.query();

    //API
    $scope.delete = function (item) {
        if (angular.isDefined(item)) {
            item.$remove().then(function () {
                 $scope.courtList.splice($scope.courtList.indexOf(item), 1);
            });
        }
    };
    $scope.add = function (item) {
        new Court(item).$save().then(function (item) {
             $scope.courtList.push(item);
        }, function () {
        });
        $location.path("/court");
    };
    $scope.edit = function (item) {
        item.$save().then(function () {
            $location.path("court/");
        });
    };

    //Pagination
    $scope.itemsPerPage = 10;
    $scope.currentPage = 1;
    $scope.maxSize = 7;
    $scope.pageCount = function () {
        return Math.ceil( $scope.courtList.length / $scope.itemsPerPage);
    };
    $scope.courtList.$promise.then(function () {
        $scope.totalItems =  $scope.courtList.length;
        $scope.$watch('currentPage + itemsPerPage + courtList.length', function () {
            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                end = begin + $scope.itemsPerPage;
            $scope.filteredCourts = $scope.courtList.slice(begin, end);
        });
    });

    $scope.editStart = function (item) {
        $location.path("court/edit");
        $rootScope.currentItem = item;
    };





});
