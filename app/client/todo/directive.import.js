/**
 * @fileoverview The task list directive
 */
'use strict';
import { todoModule } from './moduleDefiner';

/**
 * Populate a list of tasks with controls to add and remove tasks
 *
 * @param  {Service} 'todoApp.db.tasks'   An interface to the database
 */
let todoModuleDirective = todoModule.directive('taskList', ['todoApp.db.tasks',
  function(db) {
    return {
      restrict: 'E',
      templateUrl: 'client/todo/task-list.html',
      controllerAs: 'taskList',
      /**
       * The controller for the task-list directive
       *
       * @param  {angular.$scope}             $scope    The directive's scope
       * @param  {angular_meteor.$reactive}   $reactive A service that binds meteor reactivity to angular data
       * @return {Void}                       This function returns nothing
       */
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
