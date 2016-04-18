/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 자산처리요청
 * File          : asset_requestCtrl.js
 * Description   :
 *
 * Author        :
 * Creation Date :
 * Creation Date :
 * ******************************************************************** */
(function() {
    'use strict';

    app.controller('AssetRequestCtrl', ['$scope', '$rootScope', '$log', 'uiGridConstants', '$aside', 'ebizAlert', 'asset_request',
    function($scope, $rootScope, $log, uiGridConstants, $aside, ebizAlert, asset_request) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        $scope.asset_requests = []; // datas
        $scope.asset_request  = {}; // selected data
        /* ***************************************************
         * main control and setting define
         * ************************************************* */
        var login = {user_id:'ADMIN', user_name:'ADMINNAME'};// auth.getUser();

        var gridOptions = {
             data                     : 'asset_requests' // link $scope.asset_requests
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
                // {name: 'request_seq'         , field: 'request_seq'         , displayName: '요청일련번호'              , width:100, enableCellEdit: false, type: 'number' }
                ,{name: 'asset_code'          , field: 'asset_code'          , displayName: '자산번호'                , width: 150, enableCellEdit: false, type: 'string' , pinnedLeft: true }
                ,{name: 'request_flag'        , field: 'request_flag'        , displayName: '요청구분'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'request_date'        , field: 'request_date'        , displayName: '요청일시'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'request_charger'     , field: 'request_charger'     , displayName: '요청자'                 , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'req_subject'         , field: 'req_subject'         , displayName: '제목'                  , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'request_desc'        , field: 'request_desc'        , displayName: '신고내역'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'file_key'            , field: 'file_key'            , displayName: '첨부파일'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'process_flag'        , field: 'process_flag'        , displayName: '처리구분'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'process_date'        , field: 'process_date'        , displayName: '처리일시'                , width:150 , enableCellEdit: false, type: 'string' }
                ,{name: 'process_charger'     , field: 'process_charger'     , displayName: '처리자'                 , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'process_desc'        , field: 'process_desc'        , displayName: '처리내역'                , width: 150, enableCellEdit: false, type: 'string' }
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
                $scope.asset_request = _.extend({},row.entity);      // grid data copy to form data
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
                [ 'asset_code', 'request_flag', 'request_date', 'request_charger', 'req_subject', 'request_desc', 'file_key', 'process_flag', 'process_date', 'process_charger', 'process_desc', 'remarks'].forEach(function(field){
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

            asset_request.search()
                .then(function(result) {
                    $scope.gridApi.selection.clearSelectedRows();
                    $scope.filterValue   = '';
                    $scope.asset_request  = {};  // init selected data
                    $scope.asset_requests = result;
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
            data.request_charger      = login.user_id;   // login
            data.process_charger      = login.user_id;   // login
            data.status               = 'Y'; // 사용여부

            openAside('right', data);
        }

        function updateForm() {
            var data = $scope.asset_request;

            data.txn_type = 'exec_mupd';
            data.write_by = login.user_id;

            if(!checkSeleted(data)) {
                return;
            }

            openAside('right', data);
        }

        function deleteData() {
            var data = $scope.asset_request;
            data.txn_type = 'exec_mdel';
            if(!checkSeleted(data)) {
                return;
            }

            ebizAlert.confirm({txn_type: data.txn_type},
                function() {
                    asset_request.remove(data.object_id).then(
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
                templateUrl: 'asset_request_aside.html',
                placement: position,
                size: 'lg',
                backdrop: false,
                scope: $scope,
                controller: 'AssetRequestAsideCtrl',
                resolve: {
                    asset_request_data: function() {
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

    app.controller('AssetRequestAsideCtrl',
    ['$scope', '$http', '$log', '$uibModalInstance', 'ebizAlert', 'asset_request_data', 'asset_request', 'ebizList',
    function($scope, $http, $log, $uibModalInstance, ebizAlert, asset_request_data, asset_request, ebizList) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        $scope.store  = asset_request_data;
        $scope.myform = asset_request_data;
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

                ebizAlert.confirm({txn_type: asset_request_data.txn_type},
                    // ok call back : insert or update data
                    function() {

                        var txn_type = asset_request_data.txn_type;

                        if( txn_type === 'exec_madd') {
                            // insert Data
                            asset_request.insert($scope.myform).then(
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
                            asset_request.update(asset_request_data.object_id, $scope.myform).then(
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
                    { txn_type: asset_request_data.txn_type, timer: 1000 }
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
        $scope.asset_master_list         = ebizList.list('asset_master'        );    //자산번호
        $scope.asset_req_flag_list       = ebizList.list('asset_req_flag'      );    //요청구분
        $scope.asset_user_list           = ebizList.list('asset_user'          );    //요청자
        $scope.asset_proc_flag_list      = ebizList.list('asset_proc_flag'     );    //처리구분
        // 처리일시
        $scope.process_date = {
            disabled : function(date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            },
            min : new Date(2010, 0, 1),
            max : new Date(2030, 11, 31),
            options : {}
        };
        $scope.asset_user_list           = ebizList.list('asset_user'          );    //처리자

    }]);
})();

