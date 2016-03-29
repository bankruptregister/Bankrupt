angular.module("Bankrupt").controller("DetailsCtrl",function($scope,item){
    $scope.item = item.data? item.data:item;
});
