import { todoModule } from '/client/todo/entry';

let todoApp = angular.module('todoApp', ['angular-meteor', 'ui.router', 'todoApp.todo']);
export { todoApp };
