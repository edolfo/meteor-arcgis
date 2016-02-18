'use strict';
import { todoModule } from './moduleDefiner';

let todoModuleDirective = todoModule.directive('taskList', ['todoApp.db.tasks',
    function(db_tasks) {
        return {
            restrict: 'E',
            templateUrl: 'client/todo/task-list.html',
            controllerAs: 'taskList',
            controller: function($scope, $reactive) { // Gives us trouble with ng-strict-di
                $reactive(this).attach($scope);

                this.helpers({
                    tasks: () => { return db_tasks.tasks; }
                });
            }
        };
    }
]);
