angular.module("Bankrupt").controller("ComissionerCtrl",
    function ($scope, $http, $resource, $location, $rootScope,dataStripper,detailsModal,actData, baseUrl) {
    var Comissioner = $resource(baseUrl + "comissioner/:id/", {id: "@id"});
    $scope.comissionerList = Comissioner.query();
    $scope.archiveFlag = false;


    //API
    $scope.delete = function (item) {
        item.archive = true;
        item.$save();
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
    $scope.comissionerDetails = function (item) {
            detailsModal.showModal(actData.getComissioner(item.id),"comissioner");
    };





});
