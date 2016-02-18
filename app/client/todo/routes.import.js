'use strict';

import { todoModule } from './moduleDefiner';

todoModule.config([
    '$urlRouterProvider',
    '$stateProvider',
    '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider.state('tasks', {
            url: '/tasks',
            template: '<task-list></task-list>'
        });
        $urlRouterProvider.otherwise('/tasks');
    }
]);
