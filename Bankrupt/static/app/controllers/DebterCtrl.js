angular.module("Bankrupt").controller("DebterCtrl", function ($scope, $http, $resource, $location, $rootScope,detailsModal, baseUrl) {
    var Debter = $resource(baseUrl + "debter/:id/", {id: "@id"});
    $scope.debterList = Debter.query();
    $scope.archiveFlag = false;


    //API
    $scope.delete = function (item) {
        item.archive = true;
        item.$save();
    };
    $scope.add = function (item) {
        new Debter(item).$save().then(function (item) {
             $scope.debterList.push(item);
        }, function () {
        });
        $location.path("/debter");
    };
    $scope.edit = function (item) {
        item.$save().then(function () {
            $location.path("debter/");
        });
    };

    //Pagination
    //$scope.itemsPerPage = 10;
    //$scope.currentPage = 1;
    //$scope.maxSize = 7;
    //$scope.pageCount = function () {
    //    return Math.ceil( $scope.debterList.length / $scope.itemsPerPage);
    //};
    //$scope.debterList.$promise.then(function () {
    //    $scope.totalItems =  $scope.debterList.length;
    //    $scope.$watch('currentPage + itemsPerPage + debterList.length', function () {
    //        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
    //            end = begin + $scope.itemsPerPage;
    //
    //        $scope.filteredDebters = $scope.debterList.slice(begin, end);
    //    });
    //});

    $scope.editStart = function (item) {
        $location.path("debter/edit");
        item.number = parseInt(item.number);
        $rootScope.currentItem = item;
    };
    $scope.debterDetails = function (item) {
            detailsModal.showModal(item,"debter");
        };





});
