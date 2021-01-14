'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$filter', '$location', '$http', 'dataFactory',
        function ($scope, $rootScope, $window, $filter, $location, $http, dataFactory) {
            $scope.slide = '';

            $rootScope.showlogIn=true;

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
                dataFactory.signUpUser(
                    $scope.user.userName,
                    $scope.user.password,
                    "false",
                    $scope.user.email,
                    "false",
                    "active",
                    "user registered",
                    function (userInfo) {
                        console.log('Sucessfully registered user = ' + JSON.stringify(userInfo));
                        if (userInfo.responseCode == '200') {
                            delete $scope.user;

                            $rootScope.userId = JSON.stringify(userInfo.responseData.userId)
                            $rootScope.userName = JSON.stringify(userInfo.responseData.userName)
                            $rootScope.email = JSON.stringify(userInfo.responseData.email)
                            $rootScope.twoFactor = JSON.stringify(userInfo.responseData.isSecondAuthEnabled)
                            $rootScope.verified = JSON.stringify(userInfo.responseData.verified)

                            $rootScope.showUserInfo = true;
                            $rootScope.showlogIn=false;

                            $scope.go('/userInfo')

                            //clear the page
                            //traverse to home page
                            //enable the user info icon page at the header
                            //put the user object to the rootscope user object
                            //
                        } else {
                            delete $scope.user;
                            $rootScope.cause = userInfo.responseMessage;
                            $rootScope.message = JSON.stringify(userInfo.responseData.message);
                            $scope.go('/error');
                        }
                    });
            }

        }])
    .controller('UserInfoController', ['$scope', '$rootScope', '$window', '$routeParams', 'dataFactory',
        function ($scope, $rootScope, $window, $routeParams, dataFactory, leafletData) {

        }])
    .controller('ErrorController', ['$scope', '$rootScope', '$window', '$routeParams', 'dataFactory',
        function ($scope, $rootScope, $window, $routeParams, dataFactory, leafletData) {

        }])
    .controller('ReportController', ['$scope', '$rootScope', '$routeParams', '$upload', 'dataFactory',
        function ($scope, $rootScope, $routeParams, $upload, dataFactory) {

        }]);