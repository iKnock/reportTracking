'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$filter', '$location', '$http', 'dataFactory',
        function ($scope, $rootScope, $window, $filter, $location, $http, dataFactory) {
            $scope.slide = '';
            $rootScope.back = function () {
                $scope.slide = 'slide-right';
                $window.history.back();
            };

            $rootScope.go = function (path) {
                $scope.slide = 'slide-left';
                $location.url(path);
            };
        }])


    .controller('LoginController', ['$scope', '$rootScope', '$http', '$location', '$routeParams', 'dataFactory', '$timeout',
        function ($scope, $rootScope, $http, $location, $routeParams, dataFactory, $timeout) {
            console.log('login controller called')
        }])

    .controller('SignUpController', ['$scope', '$rootScope', '$routeParams', '$filter', 'dataFactory',
        function ($scope, $rootScope, $routeParams, $filter, dataFactory) {
        }])

    .controller('HomeCtrl', ['$scope', '$rootScope', '$routeParams', 'dataFactory',
        function ($scope, $rootScope, $routeParams, dataFactory) {
            //========================================
            console.log('home controller called')

        }])

    .controller('AboutController', ['$scope', '$rootScope', '$window', '$routeParams', 'dataFactory', 'leafletData',
        function ($scope, $rootScope, $window, $routeParams, dataFactory, leafletData) {

        }])
    .controller('ReportController', ['$scope', '$rootScope', '$routeParams', '$upload', 'dataFactory',
        function ($scope, $rootScope, $routeParams, $upload, dataFactory) {

        }])

    .controller('EventManageCtrl', ['$scope', '$rootScope', '$routeParams', '$upload', 'toaster', '$filter', 'dataFactory',
        function ($scope, $rootScope, $routeParams, $upload, toaster, $filter, dataFactory) {


        }]);