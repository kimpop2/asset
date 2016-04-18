﻿/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 검교정
 * File          : asset_calibrationCtrl.js
 * Description   :
 *
 * Author        :
 * Creation Date :
 * Creation Date :
 * ******************************************************************** */
(function() {
    'use strict';

    app.controller('AssetCalibrationCtrl', ['$scope', '$rootScope', '$log', 'uiGridConstants', '$aside', 'ebizAlert', 'asset_calibration',
    function($scope, $rootScope, $log, uiGridConstants, $aside, ebizAlert, asset_calibration) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        $scope.asset_calibrations = []; // datas
        $scope.asset_calibration  = {}; // selected data
        /* ***************************************************
         * main control and setting define
         * ************************************************* */
        var login = {user_id:'ADMIN', user_name:'ADMINNAME'};// auth.getUser();

        var gridOptions = {
             data                     : 'asset_calibrations' // link $scope.asset_calibrations
            ,enableRowSelection       : true
            ,enableColumnResizing     : true
            ,enableCellEdit           : false
            ,enableFiltering          : false
            ,enableCellEditOnFocus    : false
            ,enableGridMenu           : true
            ,showGridFooter           : true
            ,showColumnFooter         : true
            ,fastWatch                : true
            ,enableRowSelection       : true
            ,enableRowHeaderSelection : true
            ,noUnselect               : true
            ,enableSelectAll          : false
            ,rowIdentity              : function(row) { return row.object_id; }
            ,getRowIdentity           : function(row) { return row.object_id; }
            ,columnDefs : [
                 {name: 'asset_code'          , field: 'asset_code'          , displayName: '자산번호'                , width: 150, enableCellEdit: false, type: 'string' }
                //,{name: 'calibration_seq'     , field: 'calibration_seq'     , displayName: '검교정일련번호'             , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'calibration_date'    , field: 'calibration_date'    , displayName: '검교정일자'               , width:150 , enableCellEdit: false, type: 'string' , pinnedLeft: true }
                ,{name: 'calibration_code'    , field: 'calibration_code'    , displayName: '검교정측정코드'             , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'calibration_charger' , field: 'calibration_charger' , displayName: '검교정담당자'              , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'calibration_result'  , field: 'calibration_result'  , displayName: '검교정내역'               , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'remarks'             , field: 'remarks'             , displayName: '비고'                  , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'created_by'          , field: 'created_by'          , displayName: '등록자'                 , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'creation_date'       , field: 'creation_date'       , displayName: '등록시각'                , width:80, enableCellEdit: false, type: 'date'   }
                //,{name: 'last_updated_by'     , field: 'last_updated_by'     , displayName: '수정자'                 , width: 150, enableCellEdit: false, type: 'string' }
                //,{name: 'last_update_date'    , field: 'last_update_date'    , displayName: '수정시각'                , width:80, enableCellEdit: false, type: 'date'   }
                //,{name: 'object_id'           , field: 'object_id'           , displayName: '객체id'                , width:100, enableCellEdit: false, type: 'number' }
            ]
        };

        gridOptions.onRegisterApi = function(gridApi) {

            //gridApi.grid.registerRowsProcessor(singleFilter, 200);  // filer function
            gridApi.selection.setMultiSelect(false);                // multi select true/false
            gridApi.selection.setModifierKeysToMultiSelect(false);  // multi select by Ctrl, Shift key
            gridApi.core.notifyDataChange(uiGridConstants.dataChange.OPTIONS);

            // row select callback
            gridApi.selection.on.rowSelectionChanged($scope, function(row) {
                $scope.asset_calibration = _.extend({},row.entity);      // grid data copy to form data
            });

            //multi row select callback
            gridApi.selection.on.rowSelectionChangedBatch($scope, function(rows) {
                $log.log('rows changed ' + rows.length);
            });

            $scope.gridApi = gridApi;
        };

        // filter function
        var singleFilter = function(renderableRows){
            var match = false;
            var matcher = new RegExp($scope.filterValue, 'i');

            renderableRows.forEach(function(row){
                // filter column define
                [ 'calibration_date', 'calibration_code', 'calibration_charger', 'calibration_result', 'remarks'].forEach(function(field){
                    if(row.entity[field].match(matcher)){
                      match = true;
                    }
                });
                if (!match) row.visible = false;
            });

            return renderableRows;
        };

        $scope.gridOptions = gridOptions;

        /* ***************************************************
         * scope function
         * ************************************************* */
        // 리스트 갱신
        $scope.reloadData = reloadData;

        // Search 버튼클릭 --> fileter 검색
        $scope.searchData = searchData;

        // 입력폼 출력
        $scope.insertForm = insertForm;

        // 수정폼 출력
        $scope.updateForm = updateForm;

        // 삭제처리
        $scope.deleteData = deleteData;

        /* ***************************************************
         * init function
         * ************************************************* */
        reloadData();

        /* ***************************************************
         * scope Functions define
         * ************************************************* */

        /* ---------------------------------------------------
         * search function
         * ------------------------------------------------- */
        function reloadData() {

            asset_calibration.search()
                .then(function(result) {
                    $scope.gridApi.selection.clearSelectedRows();
                    $scope.filterValue   = '';
                    $scope.asset_calibration  = {};  // init selected data
                    $scope.asset_calibrations = result;
                });
        };

        function searchData() {
            $scope.gridApi.grid.refresh();
        };

        /* ---------------------------------------------------
         * transection function
         * ------------------------------------------------- */
        function insertForm() {
            var data = {};

            data.txn_type = 'exec_madd';
            data.write_by = login.user_id;
            // default value setting
            data.calibration_charger  = login.user_id;   // login

            openAside('right', data);
        }

        function updateForm() {
            var data = $scope.asset_calibration;

            data.txn_type = 'exec_mupd';
            data.write_by = login.user_id;

            if(!checkSeleted(data)) {
                return;
            }

            openAside('right', data);
        }

        function deleteData() {
            var data = $scope.asset_calibration;
            data.txn_type = 'exec_mdel';
            if(!checkSeleted(data)) {
                return;
            }

            ebizAlert.confirm({txn_type: data.txn_type},
                function() {
                    asset_calibration.remove(data.object_id).then(
                        // delete success
                        function(response) {

                            reloadData();
                            ebizAlert.dbOK('exec_mdel', response);
                        },
                        // delete error
                        function(error){
                            ebizAlert.dbError('exec_mdel', error);
                        }
                    );
                },
                { txn_type: data.txn_type, timer: 1000  }
            );
        };

        function checkSeleted(data) {
            // check the selected data
            if (angular.isUndefined(data.object_id)) {
                ebizAlert.error('common.execute.' + data.txn_type.toUpperCase() ,'common.message.NOSELECT');

                return false;
            }
            return true;
        }

        function openAside(position, data) {
            $aside.open({
                templateUrl: 'asset_calibration_aside.html',
                placement: position,
                size: 'lg',
                backdrop: false,
                scope: $scope,
                controller: 'AssetCalibrationAsideCtrl',
                resolve: {
                    asset_calibration_data: function() {
                        return data;
                    }
                }
            });
        };

        /* ***************************************************
         * Functions define
         * ************************************************* */


        /* ---------------------------------------------------
         * control function
         * ------------------------------------------------- */

    }]);
})();


/* *********************************************************************
 * Aside Form
 * ******************************************************************** */
(function() {
    'use strict';

    app.controller('AssetCalibrationAsideCtrl',
    ['$scope', '$http', '$log', '$uibModalInstance', 'ebizAlert', 'asset_calibration_data', 'asset_calibration', 'ebizList',
    function($scope, $http, $log, $uibModalInstance, ebizAlert, asset_calibration_data, asset_calibration, ebizList) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        $scope.store  = asset_calibration_data;
        $scope.myform = asset_calibration_data;
        /* ***************************************************
         * main control and setting define
         * ************************************************* */


        /* ***************************************************
         * scope function
         * ************************************************* */
        // insert or update data
        $scope.saveData = saveData;
        // form reset
        $scope.resetForm = resetForm;
        // cancel and close form
        $scope.cancel = cancel;

        /* ***************************************************
         * init function
         * ************************************************* */

        /* ***************************************************
         * scope Functions define
         * ************************************************* */
        function resetForm(form) {
            $scope.myform = angular.copy($scope.store);
            form.$setPristine(true);
        }

        /* ---------------------------------------------------
         * search function
         * ------------------------------------------------- */

        /* ---------------------------------------------------
        * transection function
        * ------------------------------------------------- */
        // insert or update data
        function saveData(form) {

            var firstError = null;
            if (form.$invalid) {

                var field = null, firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }

                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }

                angular.element('.ng-invalid[name=' + firstError + ']').focus();

                return;

            } else {

                ebizAlert.confirm({txn_type: asset_calibration_data.txn_type},
                    // ok call back : insert or update data
                    function() {

                        var txn_type = asset_calibration_data.txn_type;

                        if( txn_type === 'exec_madd') {
                            // insert Data
                            asset_calibration.insert($scope.myform).then(
                                // insert success
                                function(response) {
                                    $scope.reloadData();
                                    ebizAlert.dbOK(txn_type, response);
                                    $uibModalInstance.close();
                                },
                                // insert error
                                function(error){
                                    ebizAlert.dbError(txn_type, error);
                                }
                            );
                        }
                        else if(txn_type === 'exec_mupd') {
                            // update Data
                            asset_calibration.update(asset_calibration_data.object_id, $scope.myform).then(
                                // update success
                                function(response) {
                                    ebizAlert.dbOK(txn_type, response);
                                    $uibModalInstance.close();
                                },
                                // update error
                                function(error){
                                    ebizAlert.dbError(txn_type, error);
                                }
                            );
                        }
                        else {
                            // txn_type error
                            ebizAlert.error('common.execute.' + txn_type.toUpperCase() ,'common.message.ERR_TXNTYPE');
                        }
                    },
                    // cencel confirm message
                    { txn_type: asset_calibration_data.txn_type, timer: 1000 }
                );
            }

        };
        /* ---------------------------------------------------
        * control function
        * ------------------------------------------------- */
        // cancel, close form
        function cancel() {
            $uibModalInstance.dismiss();
            //e.stopPropagation();
        };

        // ng-repeat list
        $scope.asset_code_list           = ebizList.list('asset_code'          );    //자산번호
        // 검교정일자
        $scope.calibration_date = {
            disabled : function(date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            },
            min : new Date(2010, 0, 1),
            max : new Date(2030, 11, 31),
            options : {}
        };
        $scope.calibration_range_list    = ebizList.list('calibration_range'   );    //검교정측정코드
        $scope.asset_user_list           = ebizList.list('asset_user'          );    //검교정담당자

    }]);
})();

