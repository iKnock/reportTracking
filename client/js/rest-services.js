'use strict';

angular.module('myApp.restServices', ['ngResource'])
    .factory('dataFactory', ['$resource',
        function ($resource) {
            var urlBase = 'http://localhost:3000/api/v1';
            var dataFactory = {};

            //POST============================================================
            dataFactory.registerUser = function (userName, password, secondAuthEnabled, email, verified, status, remark, callback) {
                console.log('registerUser rest dispatcher is called')
                var user = $resource(urlBase + '/user/register', {}, {
                    'create': { method: 'POST' }
                });

                return user.save(
                    {
                        userName: userName,
                        password: password,
                        secondAuthEnabled: secondAuthEnabled,
                        email: email,
                        verified: verified,
                        status: status,
                        remark: remark
                    },
                    function (res, httpHeader) {
                        callback(res.data);
                    });
            };
            return dataFactory;
        }]);