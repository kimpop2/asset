/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 장비교환수리
 * File          : assetExRepairCtrl.js
 * Description   :
 *
 * Author        :
 * Creation Date :
 * Creation Date :
 * ******************************************************************** */
(function() {
    'use strict';

    app.controller('AssetExRepairCtrl', ['$scope', '$rootScope', '$log', 'uiGridConstants', '$aside', 'ebizAlert', 'asset_ex_repair',
    function($scope, $rootScope, $log, uiGridConstants, $aside, ebizAlert, asset_ex_repair) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        $scope.asset_ex_repairs = []; // datas
        $scope.asset_ex_repair  = {}; // selected data
        /* ***************************************************
         * main control and setting define
         * ************************************************* */
        var login = {user_id:'ADMIN', user_name:'ADMINNAME'};// auth.getUser();

        var gridOptions = {
             data                     : 'asset_ex_repairs' // link $scope.asset_ex_repairs
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
                 {name: 'asset_code'          , field: 'asset_code'          , displayName: '자산번호'                , width: 150, enableCellEdit: false, type: 'string', pinnedLeft: true }
                ,{name: 'ex_re_seq'           , field: 'ex_re_seq'           , displayName: '순번'                    , width:  60, enableCellEdit: false, type: 'number'}
                ,{name: 'asset_part_seq'      , field: 'asset_part_seq'      , displayName: '부속품일련번호'          , width: 100, enableCellEdit: false, type: 'number', visible:false }
                ,{name: 'request_seq'         , field: 'request_seq'         , displayName: '교환수리요청번호'        , width: 100, enableCellEdit: false, type: 'number', visible:false }
                ,{name: 'ex_re_req_flag'      , field: 'ex_re_req_flag'      , displayName: '교환수리요청구분'        , width: 150, enableCellEdit: false, type: 'string'}
                ,{name: 'ex_re_part_name'     , field: 'ex_re_part_name'     , displayName: '교환수리품목명'          , width: 150, enableCellEdit: false, type: 'string', visible:false }
                ,{name: 'ex_re_part_desc'     , field: 'ex_re_part_desc'     , displayName: '교환수리품목규격'        , width: 150, enableCellEdit: false, type: 'string', visible:false }
                ,{name: 'req_subject'         , field: 'req_subject'         , displayName: '제목'                    , width: 150, enableCellEdit: false, type: 'string'}
                ,{name: 'req_desc'            , field: 'req_desc'            , displayName: '요청내역'                , width: 150, enableCellEdit: false, type: 'string'}
                ,{name: 'ex_re_req_date'      , field: 'ex_re_req_date'      , displayName: '교환수리요청일자'        , width: 150, enableCellEdit: false, type: 'string'}
                ,{name: 'ex_re_requester'     , field: 'ex_re_requester'     , displayName: '교환수리요청자'          , width: 150, enableCellEdit: false, type: 'string'}
                ,{name: 'ex_re_date'          , field: 'ex_re_date'          , displayName: '교환수리처리일자'        , width: 150, enableCellEdit: false, type: 'string'}
                ,{name: 'ex_re_desc'          , field: 'ex_re_desc'          , displayName: '교환수리처리내역'        , width: 150, enableCellEdit: false, type: 'string'}
                ,{name: 'ex_re_proc_flag'     , field: 'ex_re_proc_flag'     , displayName: '교환수리처리상태'        , width: 150, enableCellEdit: false, type: 'string'}
                ,{name: 'ex_re_cost'          , field: 'ex_re_cost'          , displayName: '교환수리비용'            , width: 100, enableCellEdit: false, type: 'number'}
                ,{name: 'ex_re_charger'       , field: 'ex_re_charger'       , displayName: '교환수리처리담당자'      , width: 150, enableCellEdit: false, type: 'string'}
                ,{name: 'file_key'            , field: 'file_key'            , displayName: '첨부파일'                , width: 150, enableCellEdit: false, type: 'string'}
                ,{name: 'remarks'             , field: 'remarks'             , displayName: '비고'                    , width: 150, enableCellEdit: false, type: 'string'}
                ,{name: 'created_by'          , field: 'created_by'          , displayName: '등록자'                  , width: 150, enableCellEdit: false, type: 'string'}
                ,{name: 'creation_date'       , field: 'creation_date'       , displayName: '등록시각'                , width:  80, enableCellEdit: false, type: 'date'  }
              //,{name: 'last_updated_by'     , field: 'last_updated_by'     , displayName: '수정자'                  , width: 150, enableCellEdit: false, type: 'string'}
              //,{name: 'last_update_date'    , field: 'last_update_date'    , displayName: '수정시각'                , width:  80, enableCellEdit: false, type: 'date'  }
              //,{name: 'object_id'           , field: 'object_id'           , displayName: '객체id'                  , width: 150, enableCellEdit: false, type: 'string'}
            ]
        };

        gridOptions.onRegisterApi = function(gridApi) {

            gridApi.grid.registerRowsProcessor(singleFilter, 200);  // filer function
            gridApi.selection.setMultiSelect(false);                // multi select true/false
            gridApi.selection.setModifierKeysToMultiSelect(false);  // multi select by Ctrl, Shift key
            gridApi.core.notifyDataChange(uiGridConstants.dataChange.OPTIONS);

            // row select callback
            gridApi.selection.on.rowSelectionChanged($scope, function(row) {
                $scope.asset_ex_repair = _.extend({},row.entity);      // grid data copy to form data
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
                [ 'asset_code'].forEach(function(field){
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

            asset_ex_repair.search()
                .then(function(result) {
                    $scope.gridApi.selection.clearSelectedRows();
                    $scope.filterValue   = '';
                    $scope.asset_ex_repair  = {};  // init selected data
                    $scope.asset_ex_repairs = result;
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
            data.ex_re_requester      = login.user_id;   // login
            data.ex_re_charger        = login.user_id;   // login

            openAside('right', data);
        }

        function updateForm() {
            var data = $scope.asset_ex_repair;

            data.txn_type = 'exec_mupd';
            data.write_by = login.user_id;

            if(!checkSeleted(data)) {
                return;
            }

            openAside('right', data);
        }

        function deleteData() {
            var data = $scope.asset_ex_repair;
            data.txn_type = 'exec_mdel';
            if(!checkSeleted(data)) {
                return;
            }

            ebizAlert.confirm({txn_type: data.txn_type},
                function() {
                    asset_ex_repair.remove(data.object_id).then(
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
                templateUrl: 'asset_ex_repair_aside.html',
                placement: position,
                size: 'lg',
                backdrop: false,
                scope: $scope,
                controller: 'AssetExRepairAsideCtrl',
                resolve: {
                    asset_ex_repair_data: function() {
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

    app.controller('AssetExRepairAsideCtrl',
    ['$scope', '$http', '$log', '$uibModalInstance', 'ebizAlert', 'asset_ex_repair_data', 'asset_ex_repair', 'ebizList',
    function($scope, $http, $log, $uibModalInstance, ebizAlert, asset_ex_repair_data, asset_ex_repair, ebizList) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        $scope.store  = asset_ex_repair_data;
        $scope.myform = asset_ex_repair_data;
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

                ebizAlert.confirm({txn_type: asset_ex_repair_data.txn_type},
                    // ok call back : insert or update data
                    function() {

                        var txn_type = asset_ex_repair_data.txn_type;

                        if( txn_type === 'exec_madd') {
                            // insert Data
                            asset_ex_repair.insert($scope.myform).then(
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
                            asset_ex_repair.update(asset_ex_repair_data.object_id, $scope.myform).then(
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
                    { txn_type: asset_ex_repair_data.txn_type, timer: 1000 }
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
        $scope.ex_re_req_flag_list       = ebizList.list('ex_re_req_flag'      );    //교환수리요청구분
        $scope.asset_user_list           = ebizList.list('asset_user'          );    //교환수리요청자
        // 교환수리요청일자
        $scope.ex_re_req_date = {
            disabled : function(date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            },
            min : new Date(2010, 0, 1),
            max : new Date(2030, 11, 31),
            options : {}
        };
        // 교환수리처리일자
        $scope.ex_re_date = {
            disabled : function(date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            },
            min : new Date(2010, 0, 1),
            max : new Date(2030, 11, 31),
            options : {}
        };
        $scope.ex_re_proc_flag_list      = ebizList.list('ex_re_proc_flag'     );    //교환수리처리상태
        $scope.asset_user_list           = ebizList.list('asset_user'          );    //교환수리처리담당자

    }]);
})();

