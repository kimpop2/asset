/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 공통코드
 * File          : common_codeCtrl.js
 * Description   :
 *
 * Author        :
 * Creation Date :
 * Creation Date :
 * ******************************************************************** */
(function() {
    'use strict';

    app.controller('CommonCodeCtrl', ['$scope', '$rootScope', '$log', 'uiGridConstants', '$aside', 'ebizAlert', 'common_code',
    function($scope, $rootScope, $log, uiGridConstants, $aside, ebizAlert, common_code) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        $scope.common_codes = []; // datas
        $scope.common_code  = {}; // selected data
        /* ***************************************************
         * main control and setting define
         * ************************************************* */
        var login = {user_id:'ADMIN', user_name:'ADMINNAME'};// auth.getUser();

        var gridOptions = {
             data                     : 'common_codes' // link $scope.common_codes
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
            ,enablePaginationControls : false
          //,paginationPageSizes      : [10, 20, 50, 100]
            ,paginationPageSize       : 10
            ,rowIdentity              : function(row) { return row.object_id; }
            ,getRowIdentity           : function(row) { return row.object_id; }
            ,columnDefs : [
                 {name: 'code_type'           , field: 'code_type'           , displayName: '공통코드'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'display_seq'         , field: 'display_seq'         , displayName: '출력순서'                , width:100, enableCellEdit: false, type: 'number' , pinnedLeft: true }
                ,{name: 'lang'                , field: 'lang'                , displayName: '언어코드'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'code'                , field: 'code'                , displayName: '코드'                  , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'code_desc'           , field: 'code_desc'           , displayName: '언어별코드명'              , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'status'              , field: 'status'              , displayName: '사용여부'                , width: 100, enableCellEdit: false, type: 'string' }
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
                $scope.common_code = _.extend({},row.entity);      // grid data copy to form data
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
                [ 'code_desc', 'remarks'].forEach(function(field){
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

            common_code.search()
                .then(function(result) {
                    $scope.gridApi.selection.clearSelectedRows();
                    $scope.filterValue   = '';
                    $scope.common_code  = {};  // init selected data
                    $scope.common_codes = result;
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
            data.status               = 'Y'; // 사용여부

            openAside('right', data);
        }

        function updateForm() {
            var data = $scope.common_code;

            data.txn_type = 'exec_mupd';
            data.write_by = login.user_id;

            if(!checkSeleted(data)) {
                return;
            }

            openAside('right', data);
        }

        function deleteData() {
            var data = $scope.common_code;
            data.txn_type = 'exec_mdel';
            if(!checkSeleted(data)) {
                return;
            }

            ebizAlert.confirm({txn_type: data.txn_type},
                function() {
                    common_code.remove(data.object_id).then(
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
                templateUrl: 'common_code_aside.html',
                placement: position,
                size: 'lg',
                backdrop: false,
                scope: $scope,
                controller: 'CommonCodeAsideCtrl',
                resolve: {
                    common_code_data: function() {
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

    app.controller('CommonCodeAsideCtrl',
    ['$scope', '$http', '$log', '$uibModalInstance', 'ebizAlert', 'common_code_data', 'common_code', 'ebizList',
    function($scope, $http, $log, $uibModalInstance, ebizAlert, common_code_data, common_code, ebizList) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        $scope.store  = common_code_data;
        $scope.myform = common_code_data;
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

                ebizAlert.confirm({txn_type: common_code_data.txn_type},
                    // ok call back : insert or update data
                    function() {

                        var txn_type = common_code_data.txn_type;

                        if( txn_type === 'exec_madd') {
                            // insert Data
                            common_code.insert($scope.myform).then(
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
                            common_code.update(common_code_data.object_id, $scope.myform).then(
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
                    { txn_type: common_code_data.txn_type, timer: 1000 }
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
        $scope.language_list             = ebizList.list('language'            );    //언어코드

    }]);
})();

