angular.module("Bankrupt").controller("ActCtrl",
    function ($scope, $http, $resource, $location, $rootScope, actData, dataStripper,detailsModal,filterFilter, baseUrl) {

        var Act = $resource(baseUrl + "act/:id/", {id: "@id"});
        $scope.actList = Act.query();
        $scope.archiveFlag = false;


        //API
        $scope.delete = function (item) {
            item.archive = true;
            item.$save();
        };
        $scope.add = function (item) {
            new Act(item).$save().then(function (item) {
                $scope.actList.push(item);
            }, function () {

            });
        };
        $scope.edit = function (item) {
            item.$save();
        };
        //

        //Pagination
        //

        $scope.editStart = function (item) {
            $location.path("act/edit");

            var act = angular.copy(item);
            act.startdate = new Date(act.startdate);
            act.finishdate = new Date(act.finishdate);
            actData.getJudge(act.judgeid).then(function (response) {
                act.judgeid = response.data;
            });
            actData.getCourt(act.courtid).then(function (response) {
                act.courtid = response.data;
            });
            actData.getDebter(act.debterid).then(function (response) {
                act.debterid = response.data;
            });
            actData.getComissioner(act.comissionerid).then(function (response) {
                act.comissionerid = response.data;
            });
            $rootScope.currentItem = act;
        };

        //DropDowns
        $scope.getJudges = function (archiveFl) {
            $scope.loadjudge = true;
            actData.getJudges().then(function (response) {
                $scope.judges = angular.isDefined(archiveFl) ? filterFilter(response.data,{archive: archiveFl}): response.data;
                $scope.loadjudge = false;
            });
        };
        $scope.getCourts = function (archiveFl) {
            $scope.loadcourt = true;
            actData.getCourts().then(function (response) {
                $scope.courts = angular.isDefined(archiveFl) ? filterFilter(response.data,{archive: archiveFl}): response.data;
                $scope.loadcourt = false;
            });
        };
        $scope.getComissioners = function (archiveFl) {
            $scope.loadcomissioner = true;
            actData.getComissioners().then(function (response) {
                $scope.comissioners = angular.isDefined(archiveFl) ? filterFilter(response.data,{archive: archiveFl}): response.data;
                $scope.loadcomissioner = false;
            });
        };
        $scope.getDebters = function (archiveFl) {
            $scope.loaddebter = true;
            actData.getDebters().then(function (response) {
                $scope.debters = angular.isDefined(archiveFl) ? filterFilter(response.data,{archive: archiveFl}): response.data;
                $scope.loaddebter = false;
            });
        };
        //

        $scope.stripAndAdd = function (item) {
            $location.path("/act");
            $scope.add(dataStripper.stripAct(angular.copy(item)));
        };
        $scope.stripAndEdit = function (item) {
            $location.path("/act");
            $scope.edit(dataStripper.stripAct(angular.copy(item)));
        };

        //Details
        $scope.courtDetails = function (item) {
            detailsModal.showModal(actData.getCourt(item.courtid),"court");
        };
        $scope.comissionerDetails = function (item) {
            detailsModal.showModal(actData.getComissioner(item.comissionerid),"comissioner");
        };
        $scope.judgeDetails = function (item) {
            detailsModal.showModal(actData.getJudge(item.judgeid),"judge");
        };
        $scope.debterDetails = function (item) {
            detailsModal.showModal(actData.getDebter(item.debterid),"debter");
        };
        //
        //
        //$scope.$watch('item.debterid',function(newValue,oldValue){
        //    if(newValue && newValue.id)
        //        $scope.displayedCollection = filterFilter( $scope.displayedCollection,{debterid: newValue.id});
        //    else
        //        $scope.displayedCollection = $scope.actList;
        //
        //
        //
        //});


    });


