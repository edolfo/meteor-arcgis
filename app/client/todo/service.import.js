'use strict';

import { todoModule } from './moduleDefiner';
let todoModuleService = todoModule.service('todoApp.db.tasks', function(){
    function tasks() {
        return Tasks.find({});
    }
    function insert(task) {
        return Tasks.insert({text: task});
    }
    function remove(task) {
        return Tasks.remove({_id: task._id});
    }
    return {
        tasks: tasks,
        insert: insert,
        remove: remove
    };
});
