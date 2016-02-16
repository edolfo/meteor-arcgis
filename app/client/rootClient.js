let todoApp = angular.module('todo', ['angular-meteor']);

todoApp.controller('todoCtrl', ['$scope',
function($scope) {
    $scope.tasks = [
        {text: 'This is task 1'},
        {text: 'This is task 2'},
        {text: 'This is task 3'},
    ];
}]);
