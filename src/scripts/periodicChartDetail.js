(function() {
    'use strict';

    angular
        .module('chemistryApp')
        .directive('periodicChartDetail',periodicChartDetail);

    periodicChartDetail.$inject= ['chemistryService'];

    function periodicChartDetail (chemistryService) {
    return {
        restrict: 'E',
        templateUrl: './template/periodic-detail.html',
        scope:{
            element:'='
        }

    };
    }
})();