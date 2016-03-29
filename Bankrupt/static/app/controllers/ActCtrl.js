angular.module("Bankrupt").controller("ActCtrl",
    function ($scope, $http, $resource, $location, $rootScope, actData, dataStripper,detailsModal, baseUrl) {

        var Act = $resource(baseUrl + "act/:id/", {id: "@id"});
        $scope.actList = Act.query();

        //API
        $scope.delete = function (item) {
            if (angular.isDefined(item)) {
                item.$remove().then(function () {
                    $scope.actList.splice($scope.actList.indexOf(item), 1);
                });
            }
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
        $scope.itemsPerPage = 10;
        $scope.currentPage = 1;
        $scope.maxSize = 7;
        $scope.pageCount = function () {
            return Math.ceil($scope.actList.length / $scope.itemsPerPage);
        };
        $scope.actList.$promise.then(function () {
            $scope.totalItems = $scope.actList.length;
            $scope.$watch('currentPage + itemsPerPage + actList.length', function () {
                var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                    end = begin + $scope.itemsPerPage;

                $scope.filteredacts = $scope.actList.slice(begin, end);
            });
        });
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
        $scope.getJudges = function () {
            $scope.loadjudge = true;
            actData.getJudges().then(function (response) {
                $scope.judges = response.data;
                $scope.loadjudge = false;
            });
        };
        $scope.getCourts = function () {
            $scope.loadcourt = true;
            actData.getCourts().then(function (response) {
                $scope.courts = response.data;
                $scope.loadcourt = false;
            });
        };
        $scope.getComissioners = function () {
            $scope.loadcomissioner = true;
            actData.getComissioners().then(function (response) {
                $scope.comissioners = response.data;
                $scope.loadcomissioner = false;
            });
        };
        $scope.getDebters = function () {
            $scope.loaddebter = true;
            actData.getDebters().then(function (response) {
                $scope.debters = response.data;
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

    });


