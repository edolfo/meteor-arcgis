/**
 * @fileoverview Defines the dependencies for the main angular app
 */
import { todoModule } from '/client/todo/entry';

let todoApp = angular.module('todoApp', [
  'angular-meteor',
  'ui.router',
  'todoApp.todo'
]);
export { todoApp };
