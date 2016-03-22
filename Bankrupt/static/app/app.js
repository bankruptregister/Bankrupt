angular.module("Bankrupt",["ngRoute","ngResource","ui.bootstrap"])
    .constant("baseUrl","/restapi/")
    .config(function($routeProvider,$resourceProvider){
        $resourceProvider.defaults.stripTrailingSlashes = false;

        $routeProvider.when('/judge',{
            templateUrl: '/static/app/views/judge/list.html',
            controller: "JudgeCtrl"
        });
        $routeProvider.when('/judge/add',{
            templateUrl: '/static/app/views/judge/add.html',
            controller: "JudgeCtrl"
        });
        $routeProvider.when('/judge/edit',{
            templateUrl: '/static/app/views/judge/edit.html',
            controller: "JudgeCtrl"
        });
});

