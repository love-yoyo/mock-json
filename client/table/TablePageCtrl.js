/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('app.table')
        .controller('TablePageCtrl', [
            '$scope', '$filter', '$http', 'editableOptions', 'editableThemes',
            function($scope, $filter, $http, editableOptions, editableThemes) {
                $http({
                        method: 'POST',
                        url: '/api/query/all',
                        withCredentials: false,
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        }
                    })
                    .success(function(data) {
                        var _data = data;
                        if ((_data instanceof Array) && (_data.length === 0)) {
                            _data = [];
                        }
                        $scope.mocks = _data;
                    })
                    .error(function() {

                    });

                $scope.submit = function(index) {
                    console.log('enter in submit');
                    console.log(this.rowform.$data);
                    var _params = this.rowform.$data || {};
                    _params.api = _params.api || $scope.mocks[index].api;
                    $http({
                            method: 'POST',
                            url: '/api/update',
                            withCredentials: false,
                            headers: {
                                'Content-Type': 'application/json;charset=utf-8'
                            },
                            data: _params
                        })
                        .success(function(data) {

                        })
                        .error(function() {

                        });
                }

                /*$scope.statuses = [
                    { value: 1, text: 'Good' },
                    { value: 2, text: 'Awesome' },
                    { value: 3, text: 'Excellent' },
                ];*/

                $scope.showStatus = function(user) {
                    var selected = [];
                    if (user.status) {
                        selected = $filter('filter')($scope.statuses, { value: user.status });
                    }
                    return selected.length ? selected[0].text : 'Not set';
                };


                $scope.removeMock = function(index) {
                    var _params = this.rowform.$data || {};
                    _params.api = $scope.mocks[index].api;
                    $http({
                            method: 'POST',
                            url: '/api/delete',
                            withCredentials: false,
                            headers: {
                                'Content-Type': 'application/json;charset=utf-8'
                            },
                            data: _params
                        })
                        .success(function(data) {
                            $scope.mocks.splice(index, 1);
                        })
                        .error(function() {

                        });
                };

                $scope.addMock = function() {
                    $scope.inserted = {
                        id: $scope.mocks.length + 1,
                        api: '',
                        json: null,
                        respCfg: null,
                        creator: null,
                        createTime: null,
                        lastModifyTime: null,
                    };
                    $scope.mocks.push($scope.inserted);
                };

                editableOptions.theme = 'bs3';
                editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
                editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

            }
        ]);

})();
