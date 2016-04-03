angular.module("Bankrupt").controller("JudgeCtrl", function ($scope, $http, $resource, $location, $rootScope, baseUrl) {
    var Judge = $resource(baseUrl + "judge/:id/", {id: "@id"});
    $scope.judgeList = Judge.query();
    $scope.archiveFlag = false;


    //API
    $scope.delete = function (item) {
        item.archive = true;
        item.$save();
    };
    $scope.add = function (item) {
        new Judge(item).$save().then(function (item) {
             $scope.judgeList.push(item);
        }, function () {
        });
        $location.path("/judge");
    };
    $scope.edit = function (item) {
        item.$save().then(function () {
            $location.path("judge/");
        });
    };

    //Pagination
    //$scope.itemsPerPage = 10;
    //$scope.currentPage = 1;
    //$scope.maxSize = 7;
    //$scope.pageCount = function () {
    //    return Math.ceil( $scope.judgeList.length / $scope.itemsPerPage);
    //};
    //$scope.judgeList.$promise.then(function () {
    //    $scope.totalItems =  $scope.judgeList.length;
    //    $scope.$watch('currentPage + itemsPerPage + judgeList.length', function () {
    //        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
    //            end = begin + $scope.itemsPerPage;
    //
    //        $scope.filteredJudges = $scope.judgeList.slice(begin, end);
    //    });
    //});

    $scope.editStart = function (item) {
        $location.path("judge/edit");
        $rootScope.currentItem = item;
    };





});

