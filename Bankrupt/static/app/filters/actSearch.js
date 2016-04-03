angular.module("Bankrupt").filter('actSearch', ['$filter', function ($filter) {
    var filterFilter = $filter('filter');
    var standardComparator = function standardComparator(obj, text) {
        text = ('' + text).toLowerCase();
        return ('' + obj).toLowerCase().indexOf(text) > -1;
    };
    return function customFilter(array, expression) {
        function customComparator(actual, expected) {
            if (angular.isObject(expected)) {
                //exact match
                if (expected.distinct) {
                    return !(!actual || actual !== expected.distinct);
                }
                //matchAny
                if (expected.matchAny) {
                    if (expected.matchAny.all) return true;
                    if (!actual) return false;

                    for (var i = 0; i < expected.matchAny.items.length; i++)
                        if (actual === expected.matchAny.items[i]) return true;

                    return false;
                }

                //etc
                return true;
            }
            return standardComparator(actual, expected);
        }

        return filterFilter(array, expression, customComparator);

    };

}]);