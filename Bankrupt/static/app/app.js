angular.module("Bankrupt",["ngRoute","ngResource","ui.bootstrap"])
    .constant("baseUrl","/restapi/")
    .config(function($routeProvider,$resourceProvider){
        $resourceProvider.defaults.stripTrailingSlashes = false;
        //judge routes
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

        //act routes
        $routeProvider.when('/act',{
            templateUrl: '/static/app/views/act/list.html',
            controller: "ActCtrl"
        });
        $routeProvider.when('/act/add',{
            templateUrl: '/static/app/views/act/add.html',
            controller: "ActCtrl"
        });
        $routeProvider.when('/act/edit',{
            templateUrl: '/static/app/views/act/edit.html',
            controller: "ActCtrl"
        });
        
        //court routes
        $routeProvider.when('/court',{
            templateUrl: '/static/app/views/court/list.html',
            controller: "CourtCtrl"
        });
        $routeProvider.when('/court/add',{
            templateUrl: '/static/app/views/court/add.html',
            controller: "CourtCtrl"
        });
        $routeProvider.when('/court/edit',{
            templateUrl: '/static/app/views/court/edit.html',
            controller: "CourtCtrl"
        });
        
        //debter routes
        $routeProvider.when('/debter',{
            templateUrl: '/static/app/views/debter/list.html',
            controller: "DebterCtrl"
        });
        $routeProvider.when('/debter/add',{
            templateUrl: '/static/app/views/debter/add.html',
            controller: "DebterCtrl"
        });
        $routeProvider.when('/debter/edit',{
            templateUrl: '/static/app/views/debter/edit.html',
            controller: "DebterCtrl"
        });
        
        //comissioner routes
        $routeProvider.when('/comissioner',{
            templateUrl: '/static/app/views/comissioner/list.html',
            controller: "ComissionerCtrl"
        });
        $routeProvider.when('/comissioner/add',{
            templateUrl: '/static/app/views/comissioner/add.html',
            controller: "ComissionerCtrl"
        });
        $routeProvider.when('/comissioner/edit',{
            templateUrl: '/static/app/views/comissioner/edit.html',
            controller: "ComissionerCtrl"
        });
});

