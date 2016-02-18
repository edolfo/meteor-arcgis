'use strict';

import { todoModule } from './moduleDefiner';
let todoModuleService = todoModule.service('todoApp.db.tasks', function(){
    function tasks() {
        return Tasks.find({});
    }
    function insert(task) {
        return Tasks.insert({text: task}, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
    function remove(task) {
        return Tasks.remove({_id: task._id}, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
    return {
        tasks: tasks,
        insert: insert,
        remove: remove
    };
});
