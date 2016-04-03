angular.module("Bankrupt").controller("CourtCtrl", function ($scope, $http, $resource, $location, $rootScope, baseUrl) {
    var Court = $resource(baseUrl + "court/:id/", {id: "@id"});
    $scope.courtList = Court.query();
    $scope.archiveFlag = false;

    //API
    $scope.delete = function (item) {
        item.archive = true;
        item.$save();
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

    $scope.editStart = function (item) {
        $location.path("court/edit");
        $rootScope.currentItem = item;
    };





});
