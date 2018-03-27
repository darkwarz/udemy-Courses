angular.module('myApp', ['ngRoute']).config();

function config($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MyController',
        controllerAs: 'vm'
    }).when('/about', {
        templateUrl: 'templates/about.html'
        controller: 'AboutController',
        controllerAs: 'vm'
    }).when('/404', {
        ...
    })
    .otherwise({
        redirectTo: '/404'
    });
}