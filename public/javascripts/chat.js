var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope) {
    $scope.messages = [
        {
            'sender': 'USER',
            'text': 'hello'
    	},
        {
            'sender': 'BOT',
            'text': 'hello what are you doing'
    	},
        {
            'sender': 'USER',
            'text': 'sleeping'
    	}
    ];


});