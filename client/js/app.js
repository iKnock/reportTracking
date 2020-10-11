'use strict';

angular.module('myApp', [
    'ngResource',
    'ngRoute',
    'myApp.controllers',
    'myApp.restServices'
]).config(['$routeProvider', '$locationProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $httpProvider) {         

    $routeProvider.when('/home', {templateUrl: '/partials/home.html', controller: 'HomeController'});
    $routeProvider.when('/reports', {templateUrl: '/partials/reports.html', controller: 'ReportController'});
    $routeProvider.when('/login', {templateUrl: '/partials/login.html', controller: 'LoginController'});
    $routeProvider.when('/signup', {templateUrl: '/partials/signup.html', controller: 'SignUpController'});

    $routeProvider.otherwise({redirectTo: '/home'});

}]);//end of config