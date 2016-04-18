/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 자산마스타
 * File          : asset_masterCtrl.js
 * Description   :
 *
 * Author        :
 * Creation Date :
 * Creation Date :
 * ******************************************************************** */
(function() {
    'use strict';

    app.controller('AssetMasterCtrl', ['$scope', '$rootScope', '$log', 'uiGridConstants', '$aside', 'ebizAlert', 'asset_master',
    function($scope, $rootScope, $log, uiGridConstants, $aside, ebizAlert, asset_master) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        $scope.asset_masters = []; // datas
        $scope.asset_master  = {}; // selected data
        /* ***************************************************
         * main control and setting define
         * ************************************************* */
        var login = {user_id:'ADMIN', user_name:'ADMINNAME'};// auth.getUser();

        var gridOptions = {
             data                     : 'asset_masters' // link $scope.asset_masters
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
            ,paginationPageSizes      : [10, 20, 50, 100]
            ,paginationPageSize       : 10
            ,rowIdentity              : function(row) { return row.object_id; }
            ,getRowIdentity           : function(row) { return row.object_id; }
            ,columnDefs : [
                 {name: 'asset_code'          , field: 'asset_code'          , displayName: '자산번호'                , width: 150, enableCellEdit: false, type: 'string', cellClass: 'grid-align'}
                ,{name: 'asset_name'          , field: 'asset_name'          , displayName: '자산명'                 , width: 150, enableCellEdit: false, type: 'string' , pinnedLeft: true }
                ,{name: 'asset_name_local'    , field: 'asset_name_local'    , displayName: '자산명_지역'              , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'asset_cat_code'      , field: 'asset_cat_code'      , displayName: '자산분류'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'cost_center_code'    , field: 'cost_center_code'    , displayName: '관리부서'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'main_mgr_no'         , field: 'main_mgr_no'         , displayName: '관리자_정'               , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'sub_mgr_no'          , field: 'sub_mgr_no'          , displayName: '관리자_부'               , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'asset_model_name'    , field: 'asset_model_name'    , displayName: '모델명'                 , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'manufacturer_name'   , field: 'manufacturer_name'   , displayName: '제작회사'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'purchaser_name'      , field: 'purchaser_name'      , displayName: '구입처'                 , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'acquisition_date'    , field: 'acquisition_date'    , displayName: '취득일자'                , width:150 , enableCellEdit: false, type: 'string' }
                ,{name: 'depreciation_a'      , field: 'depreciation_a'      , displayName: '감가상각년수a'             , width:100, enableCellEdit: false, type: 'number' }
                ,{name: 'depreciation_b'      , field: 'depreciation_b'      , displayName: '감가상각년수b'             , width:100, enableCellEdit: false, type: 'number' }
                ,{name: 'salvage_amount'      , field: 'salvage_amount'      , displayName: '잔존가액'                , width:100, enableCellEdit: false, type: 'number' }
                ,{name: 'manufacture_no'      , field: 'manufacture_no'      , displayName: '제조번호'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'manufacture_date'    , field: 'manufacture_date'    , displayName: '제조일자'                , width:150 , enableCellEdit: false, type: 'string' }
                ,{name: 'external_apperance'  , field: 'external_apperance'  , displayName: '기계의외형'               , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'gross_weight'        , field: 'gross_weight'        , displayName: '중량'                  , width:100, enableCellEdit: false, type: 'number' }
                ,{name: 'inspection_flag'     , field: 'inspection_flag'     , displayName: '검교정대상여부'             , width: 100, enableCellEdit: false, type: 'string' }
                ,{name: 'inspection_period'   , field: 'inspection_period'   , displayName: '검교정_점검주기'            , width:100, enableCellEdit: false, type: 'number' }
                ,{name: 'inspection_unit'     , field: 'inspection_unit'     , displayName: '검교정_점검단위'            , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'acquisition_amount'  , field: 'acquisition_amount'  , displayName: '취득가액'                , width:100, enableCellEdit: false, type: 'number' }
                ,{name: 'install_area_code'   , field: 'install_area_code'   , displayName: '설치장소'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'file_key'            , field: 'file_key'            , displayName: '첨부파일'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'final_move_seq'      , field: 'final_move_seq'      , displayName: '최종이동일련번호'            , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'final_disuse_seq'    , field: 'final_disuse_seq'    , displayName: '최종폐기일련번호'            , width: 150, enableCellEdit: false, type: 'string' }
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
                $scope.asset_master = _.extend({},row.entity);      // grid data copy to form data
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
                [ 'asset_name', 'asset_name_local', 'asset_cat_code', 'cost_center_code', 'main_mgr_no', 'sub_mgr_no', 'asset_model_name', 'manufacturer_name', 'purchaser_name', 'acquisition_date', 'manufacture_no', 'manufacture_date', 'external_apperance', 'inspection_unit', 'install_area_code', 'file_key', 'final_move_seq', 'final_disuse_seq', 'remarks'].forEach(function(field){
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

            asset_master.search()
                .then(function(result) {
                    $scope.gridApi.selection.clearSelectedRows();
                    $scope.filterValue   = '';
                    $scope.asset_master  = {};  // init selected data
                    $scope.asset_masters = result;
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
            data.main_mgr_no          = login.user_id;   // login
            data.sub_mgr_no           = login.user_id;   // login
            data.inspection_flag      = 'Y'; // 검교정대상여부
            data.status               = 'Y'; // 사용여부

            openAside('right', data);
        }

        function updateForm() {
            var data = $scope.asset_master;

            data.txn_type = 'exec_mupd';
            data.write_by = login.user_id;

            if(!checkSeleted(data)) {
                return;
            }

            openAside('right', data);
        }

        function deleteData() {
            var data = $scope.asset_master;
            data.txn_type = 'exec_mdel';
            if(!checkSeleted(data)) {
                return;
            }

            ebizAlert.confirm({txn_type: data.txn_type},
                function() {
                    asset_master.remove(data.object_id).then(
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
                templateUrl: 'asset_master_aside.html',
                placement: position,
                size: 'lg',
                backdrop: false,
                scope: $scope,
                controller: 'AssetMasterAsideCtrl',
                resolve: {
                    asset_master_data: function() {
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

    app.controller('AssetMasterAsideCtrl',
    ['$scope', '$http', '$log', '$uibModalInstance', 'ebizAlert', 'asset_master_data', 'asset_master', 'ebizList',
    function($scope, $http, $log, $uibModalInstance, ebizAlert, asset_master_data, asset_master, ebizList) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        $scope.store  = asset_master_data;
        $scope.myform = asset_master_data;
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

                ebizAlert.confirm({txn_type: asset_master_data.txn_type},
                    // ok call back : insert or update data
                    function() {

                        var txn_type = asset_master_data.txn_type;

                        if( txn_type === 'exec_madd') {
                            // insert Data
                            asset_master.insert($scope.myform).then(
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
                            asset_master.update(asset_master_data.object_id, $scope.myform).then(
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
                    { txn_type: asset_master_data.txn_type, timer: 1000 }
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
        $scope.asset_category_list       = ebizList.list('asset_category'      );    //자산분류
        $scope.cost_center_list          = ebizList.list('cost_center'         );    //관리부서
        $scope.asset_user_list           = ebizList.list('asset_user'          );    //관리자_정
        $scope.asset_user_list           = ebizList.list('asset_user'          );    //관리자_부
        // 취득일자
        $scope.acquisition_date = {
            disabled : function(date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            },
            min : new Date(2010, 0, 1),
            max : new Date(2030, 11, 31),
            options : {}
        };
        // 제조일자
        $scope.manufacture_date = {
            disabled : function(date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            },
            min : new Date(2010, 0, 1),
            max : new Date(2030, 11, 31),
            options : {}
        };
        $scope.inspection_unit_list      = ebizList.list('inspection_unit'     );    //검교정_점검단위
        $scope.installation_area_list    = ebizList.list('installation_area'   );    //설치장소

    }]);
})();

