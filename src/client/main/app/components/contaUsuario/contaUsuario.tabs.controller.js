(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('ContaUsuarioTabsController', ['$scope', '$state', ContaUsuarioTabsController]);

    function ContaUsuarioTabsController($scope, $state) {

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('contaUsuarioList');
                    break;
                case 1:
                    $state.transitionTo('contaUsuarioCreate');
                    break;
            }
        });
    }

})();
