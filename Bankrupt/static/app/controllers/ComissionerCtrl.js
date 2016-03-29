angular.module("Bankrupt").controller("ComissionerCtrl", function ($scope, $http, $resource, $location, $rootScope,dataStripper, baseUrl) {
    var Comissioner = $resource(baseUrl + "comissioner/:id/", {id: "@id"});
    $scope.comissionerList = Comissioner.query();

    //API
    $scope.delete = function (item) {
        if (angular.isDefined(item)) {
            item.$remove().then(function () {
                 $scope.comissionerList.splice($scope.comissionerList.indexOf(item), 1);
            });
        }
    };
    $scope.add = function (item) {
        new Comissioner(item).$save().then(function (item) {
             $scope.comissionerList.push(item);
        }, function () {
        });
        $location.path("/comissioner");
    };
    $scope.edit = function (item) {
        item.$save().then(function () {
            $location.path("comissioner/");
        });
    };

    //Pagination
    $scope.itemsPerPage = 10;
    $scope.currentPage = 1;
    $scope.maxSize = 7;
    $scope.pageCount = function () {
        return Math.ceil( $scope.comissionerList.length / $scope.itemsPerPage);
    };
    $scope.comissionerList.$promise.then(function () {
        $scope.totalItems =  $scope.comissionerList.length;
        $scope.$watch('currentPage + itemsPerPage + comissionerList.length', function () {
            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                end = begin + $scope.itemsPerPage;

            $scope.filteredComissioners = $scope.comissionerList.slice(begin, end);
        });
    });

    $scope.editStart = function (item) {
        $location.path("comissioner/edit");
        var comm = angular.copy(item);
        comm.setdate = new Date(comm.setdate);
        $rootScope.currentItem = comm;
    };
    $scope.stripAndAdd = function(item){
        $scope.add(dataStripper.stripComm(angular.copy(item)));
    };
    $scope.stripAndEdit = function(item){
        $scope.edit(dataStripper.stripComm(angular.copy(item)));
    };





});
