/**
 * @fileoverview app.client.db.tasks
 *     Database communication functions
 * Usage:
 *     Inject 'todoApp.db.tasks' to get access to task listing, insertion, removal
 */

'use strict';

import { todoModule } from './moduleDefiner';
/**
 * todoApp.db.tasks provides an interface for interacting with the Tasks collection
 */
let todoModuleService = todoModule.service('todoApp.db.tasks', function() {
  /**
   * Get a list of tasks
   *
   * @return  {Task[]}   An array of task objects
   */
  function tasks() {
    return Tasks.find({});
  }

  /**
   * Add a task to the list
   *
   * @param  {String}   task  The task to add
   * @return {String}         The task's UID
   */
  function insert(task) {
    return Tasks.insert({text: task}, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  /**
   * Remove a task from the list.
   *
   * @param  {Task}   task  The task object to remove
   * @return {Void}         This function returns nothing
   */
  function remove(task) {
    return Tasks.remove({_id: task._id}, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  /**
   * The interface this service exposes
   */
  return {
    tasks: tasks,
    insert: insert,
    remove: remove
  };
});
