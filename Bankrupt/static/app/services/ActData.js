angular.module("Bankrupt").factory("actData",function($http,baseUrl){

    return{
        getJudges: function(){
            return $http.get(baseUrl+"judge/");
        },
        getCourts: function(){
            return $http.get(baseUrl+"court/");
        },
        getComissioners: function(){
            return $http.get(baseUrl+"comissioner/");
        },
        getDebters: function(){
            return $http.get(baseUrl+"debter/");
        },
        getJudge: function(id){
            return $http.get(baseUrl+"judge/"+id);
        },
        getCourt: function(id){
            return $http.get(baseUrl+"court/"+id);
        },
        getComissioner: function(id){
            return $http.get(baseUrl+"comissioner/"+id);
        },
        getDebter: function(id){
            return $http.get(baseUrl+"debter/"+id);
        }


    }
});
