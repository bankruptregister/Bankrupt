angular.module("Bankrupt")
    .directive('stDebterSearch', [function() {
      return {
        restrict: 'E',
        require: '^stTable',
        templateUrl: '/static/app/views/debter/customSearch.html',
        link: function(scope, element, attr, table) {

            scope.$watch("debter",function(newValue){
                var query = {};

                //Search both th actual and archive
                //scope.archiveFlag = attr["archive"];

                if(newValue && newValue.id) query.distinct = newValue.id;
                else query.distinct = "";
                table.search(query, 'debterid');
            });
        }
      }
    }])
    .directive('stCourtSearch', [function() {
      return {
        restrict: 'E',
        require: '^stTable',
        templateUrl: '/static/app/views/court/customSearch.html',
        link: function(scope, element, attr, table) {

            scope.$watch("court",function(newValue){
                var query = {};
                //scope.archiveFlag = attr["archive"];
                if(newValue && newValue.id) query.distinct = newValue.id;
                else query.distinct = "";
                table.search(query, 'courtid');
            });
        }
      }
    }]).directive('stJudgeSearch', [function() {
      return {
        restrict: 'E',
        require: '^stTable',
        templateUrl: '/static/app/views/judge/customSearch.html',
        link: function(scope, element, attr, table) {

            scope.$watch("judge",function(newValue){
                var query = {};
                //scope.archiveFlag = attr["archive"];
                if(newValue && newValue.id) query.distinct = newValue.id;
                else query.distinct = "";
                table.search(query, 'judgeid');
            });
        }
      }
    }]).directive('stComissionerSearch', [function() {
      return {
        restrict: 'E',
        require: '^stTable',
        templateUrl: '/static/app/views/comissioner/customSearch.html',
        link: function(scope, element, attr, table) {

            scope.$watch("comissioner",function(newValue){
                var query = {};
                //scope.archiveFlag = attr["archive"];
                if(newValue && newValue.id) query.distinct = newValue.id;
                else query.distinct = "";
                table.search(query, 'comissionerid');
            });
        }
      }
    }]);