'use strict';
import { todoModule } from './moduleDefiner';

let todoModuleDirective = todoModule.directive('taskList', ['todoApp.db.tasks',
    function(db) {
        return {
            restrict: 'E',
            templateUrl: 'client/todo/task-list.html',
            controllerAs: 'taskList',
            controller: function($scope, $reactive) { // Gives us trouble with ng-strict-di
                $reactive(this).attach($scope);
                $scope.newTask = '';
                this.helpers({
                    tasks: () => { return db.tasks(); }
                });

                this.addTask = () => {
                    db.insert(this.newTask);
                    this.newTask = '';
                };

                this.removeTask = (task) => {
                    db.remove(task);
                };
            }
        };
    }
]);
