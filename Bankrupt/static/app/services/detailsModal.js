angular.module("Bankrupt").factory("detailsModal",function($modal){
    return {
        showModal : function(obj,templateName){
            $modal.open({
                animation: true,
                controller: "DetailsCtrl",
                templateUrl: '/static/app/views/'+templateName+'/details.html',
                resolve: {
                    item: function(){
                        return obj;
                    }
                }
            });
        }
    }
});