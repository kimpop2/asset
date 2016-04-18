/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 사원마스타
 * File          : employeeCtrl.js
 * Description   :
 *
 * Author        :
 * Creation Date :
 * Creation Date :
 * ******************************************************************** */
(function() {
    'use strict';

    app.controller('EmployeeCtrl', ['$scope', '$rootScope', '$log', 'uiGridConstants', '$aside', 'ebizAlert', 'employee',
    function($scope, $rootScope, $log, uiGridConstants, $aside, ebizAlert, employee) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        $scope.employees = []; // datas
        $scope.employee  = {}; // selected data
        /* ***************************************************
         * main control and setting define
         * ************************************************* */
        // grid settings
        var gridOptions = {
             data                     : 'employees' // link $scope.employees
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
                 {name: 'emp_no'              , field: 'emp_no'              , displayName: '사번'                  , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'emp_name'            , field: 'emp_name'            , displayName: '이름'                  , width: 150, enableCellEdit: false, type: 'string' , pinnedLeft: true }
                ,{name: 'emp_pass'            , field: 'emp_pass'            , displayName: '비밀번호'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'role'                , field: 'role'                , displayName: '역할'                  , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'class_nm'            , field: 'class_nm'            , displayName: '근무구분'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'dept_cd'             , field: 'dept_cd'             , displayName: '부서코드'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'dept_nm'             , field: 'dept_nm'             , displayName: '부서명'                 , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'enter_dt'            , field: 'enter_dt'            , displayName: '입사일'                 , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'term_yr'             , field: 'term_yr'             , displayName: '근속년'                 , width:100, enableCellEdit: false, type: 'number' }
                ,{name: 'phone'               , field: 'phone'               , displayName: '전화번호'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'admin_salary'        , field: 'admin_salary'        , displayName: '급여담당'                , width: 150, enableCellEdit: false, type: 'string' }
                ,{name: 'admin_duty'          , field: 'admin_duty'          , displayName: '근태담당'                , width: 150, enableCellEdit: false, type: 'string' }
            ]
        };

        gridOptions.onRegisterApi = function(gridApi) {

            //gridApi.grid.registerRowsProcessor(singleFilter, 200);  // filer function
            gridApi.selection.setMultiSelect(false);                // multi select true/false
            gridApi.selection.setModifierKeysToMultiSelect(false);  // multi select by Ctrl, Shift key
            gridApi.core.notifyDataChange(uiGridConstants.dataChange.OPTIONS);

            // row select callback
            gridApi.selection.on.rowSelectionChanged($scope, function(row) {
                $scope.employee = _.extend({},row.entity);      // grid data copy to form data
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
                ['asset_code', 'asset_name', 'cost_center_code'].forEach(function(field){
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

            employee.search()
                .then(function(result) {
                    $scope.gridApi.selection.clearSelectedRows();
                    $scope.filterValue   = '';
                    $scope.employee  = {};  // init selected data
                    $scope.employees = result;
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
            // default value setting

            openAside('right', data);
        }

        function updateForm() {
            var data = $scope.employee;

            if(!checkSeleted(data)) {
                return;
            }

            data.txn_type = 'exec_mudt';

            openAside('right', data);
        }

        function deleteData() {
            var data = $scope.employee;

            if(!checkSeleted(data)) {
                return;
            }

            ebizAlert.confirm({
                title: '삭제확인', text: '선택된 데이타를 삭제 하시겠습니까?',
                confirmButtonColor: '#007AFF'
            },
            function() {
                employee.remove(data.object_id)
                    .then(function(response) {

                        reloadData();
                        ebizAlert.alertOK('exec_mdel', response);
                    }, function(error){
                        ebizAlert.alertError('exec_mdel', error);
                    });
            },
            {
                title: '삭제취소', text: '삭제작업이 취소되었습니다', timer: 1000
            });
        };

        function checkSeleted(data) {
            // check the selected data
            if (angular.isUndefined(data.object_id)) {
                ebizAlert.alert({
                    type: 'error', title: '데이타확인', text: '선택된 데이타가 존재하지 않습니다',
                    time: 5000, confirmButtonColor: '#007AFF'
                });

                return false;
            }

            return true;
        }

        function openAside(position, data) {
            $aside.open({
                templateUrl: 'employee_aside.html',
                placement: position,
                size: 'lg',
                backdrop: false,
                scope: $scope,
                controller: 'EmployeeAsideCtrl',
                resolve: {
                    employee_data: function() {
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

    app.controller('EmployeeAsideCtrl',
    ['$scope', '$http', '$log', '$uibModalInstance', 'ebizAlert', 'employee_data', 'employee', 'ebizList',
    function($scope, $http, $log, $uibModalInstance, ebizAlert, employee_data, employee, ebizList) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        $scope.store  = employee_data;
        $scope.myform = employee_data;

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

                ebizAlert.confirm({
                    title: employee_data.txn_type + '확인',
                    text: '선택된 데이타를 저장하시겠습니까?',
                    confirmButtonColor: '#007AFF'
                },
                // ok call back : insert or update data
                function() {

                    var txn_type = employee_data.txn_type;

                    if( txn_type === 'exec_madd') {
                        // insert Data
                        employee.insert($scope.myform)
                            .then(function(response) {
                                $scope.reloadData();
                                ebizAlert.alertOK(txn_type, response);    // insert ok
                                $uibModalInstance.close();
                            },
                            function(error){
                                ebizAlert.alertError(txn_type, error);    // insert error
                            });
                    }
                    else if(txn_type === 'exec_mudt') {
                        // update Data
                        employee.update(employee_data.object_id, $scope.myform)
                            .then(function(response) {
                                ebizAlert.alertOK(txn_type, response);    // update ok
                                $uibModalInstance.close();
                            },
                            function(error){
                                ebizAlert.alertError(txn_type, error);    // update error
                            });
                    }
                    else {
                        // txn_type error
                        ebizAlert.alert({type: 'error' , title: 'txn_type error', text: 'txn_type error'});
                    }
                },
                // cencel confirm message
                {
                    title: '작업취소', text: '작업이 취소되었습니다', timer: 1000
                });
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

    }]);
})();

