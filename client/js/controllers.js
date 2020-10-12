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

    .controller('HomeController', ['$scope', '$rootScope', '$routeParams', 'dataFactory',
        function ($scope, $rootScope, $routeParams, dataFactory) {
            console.log('home controller called')
        }])

    .controller('LoginController', ['$scope', '$rootScope', '$http', '$location', '$routeParams', 'dataFactory', '$timeout',
        function ($scope, $rootScope, $http, $location, $routeParams, dataFactory, $timeout) {
            console.log('login controller called')
        }])

    .controller('SignUpController', ['$scope', '$rootScope', '$routeParams', '$filter', 'dataFactory',
        function ($scope, $rootScope, $routeParams, $filter, dataFactory) {
            console.log('sign up controller called')

            $scope.signUp = function () {
                const userName = $scope.user.userName;
                const password = $scope.user.password;
                const email = $scope.user.email;
                const secondAuthEnabled = "false";
                const verified = "false";
                const status = "active";
                const remark = "user registered";

                dataFactory.signUpUser(
                    userName,
                    password,
                    secondAuthEnabled,
                    email,
                    verified,
                    status,
                    remark,
                    function (user) {
                        console.log('Sucessfully registered user = ' + JSON.stringify(user));
                        if (user.responseCode == '200') {
                            //clear the page
                            //traverse to home page
                            //enable the user info icon page at the header
                            //put the user object to the rootscope user object
                            //
                        } else {
                            $rootScope.cause = user.responseMessage;
                            $rootScope.message = JSON.stringify(user.responseData.message);
                            $scope.go('/error');                   
                        }
                    });
            }

        }])

    .controller('ErrorController', ['$scope', '$rootScope', '$window', '$routeParams', 'dataFactory',
        function ($scope, $rootScope, $window, $routeParams, dataFactory, leafletData) {         

        }])
    .controller('ReportController', ['$scope', '$rootScope', '$routeParams', '$upload', 'dataFactory',
        function ($scope, $rootScope, $routeParams, $upload, dataFactory) {

        }]);