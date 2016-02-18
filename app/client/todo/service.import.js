'use strict';

import { todoModule } from './moduleDefiner';
let todoModuleService = todoModule.service('todoApp.db.tasks', function(){
    return {
        tasks: Tasks.find({})
    };
});
