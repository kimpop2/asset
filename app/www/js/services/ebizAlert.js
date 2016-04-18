/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 자산마스타
 * File          : assetMasterCtrl.js
 * Description   :
 *                 
 * Author        :
 * Creation Date :
 * Creation Date :
 * ******************************************************************** */
(function() {
    'use strict';

    app.service('ebizAlert', ['SweetAlert',  '$translate',
    function(SweetAlert, $translate){
    
        //메시지 타이틀, 내용, alert 유형(success, warning, error), 2초후 alert창 close됨
        this.alert = function (alert, callback) {
            alert.type = alert.type || 'success';
            alert.timer = 2000;
            alert.confirmButtonColor = alert.confirmButtonColor || "#007AFF";

            SweetAlert.swal(alert);

            if(callback){
                callback();
            }
        };

        this.confirm = function (alert, cbConfirm, cancelAlert, cbCancel) {
            
            $translate('common.message.CONFIRM', {obj: 'common.execute.' + alert.txn_type.toUpperCase()}).then(function (translation) {
                
                alert.type = alert.type || 'warning';
                alert.showCancelButton  =   true;
                alert.confirmButtonColor= alert.confirmButtonColor || "#DD6B55";
                alert.title = translation;
                SweetAlert.swal(alert, function (isConfirm) {
                    // OK
                    if (isConfirm) {
                        // callback
                        if(cbConfirm){  
                            cbConfirm();  
                        }
                    } 
                    // Cancel
                    else {
                        // if confirm attributes exist then show sweetalert message 
                        if(cancelAlert){
                            
                            $translate('common.message.CANCEL', {obj: 'common.execute.' + cancelAlert.txn_type.toUpperCase()}).then(function (translation) {
                                
                                SweetAlert.swal({type: 'error'  , title: translation, timer: 2000}); 
                            });
                        }
                        // callback
                        if(cbCancel){
                            cbCancel();
                        }
                    }
                });    
                
            });
            
        };
        /*
        this.confirm = function (alert, cbConfirm, cancelAlert, cbCancel) {
            
            alert.type = alert.type || 'warning';
            alert.showCancelButton  =   true;
            alert.confirmButtonColor= alert.confirmButtonColor || "#DD6B55";
            
            SweetAlert.swal(alert, function (isConfirm) {
                // OK
                if (isConfirm) {
                    // callback
                    if(cbConfirm){  
                        cbConfirm();  
                    }
                } 
                // Cancel
                else {
                    // if confirm attributes exist then show sweetalert message 
                    if(cancelAlert){
                        cancelAlert.type = cancelAlert.type || 'error';
                        cancelAlert.confirmButtonColor =  "#007AFF";

                        SweetAlert.swal(cancelAlert);
                    }
                    // callback
                    if(cbCancel){
                        cbCancel();
                    }
                }
            });
        };
        */
        this.success = function(obj) {
            
            $translate('common.message.OK', { obj: obj }).then(function (translation) {
                
                SweetAlert.swal({type: 'success', title: translation, timer: 2000}); 
            });
        }

        this.error = function(obj, message) {
            $translate(message, { obj: obj }).then(function (translation) {
                
                SweetAlert.swal({type: 'error'  , title: translation, timer: 2000, confirmButtonColor: '#007AFF'}); 
            });
        }

        this.dbOK = function(txn_type, res) {
            
            if(res.outBinds.out_code === '0') {
            
                $translate("common.message.OK", {obj: 'common.execute.' + txn_type.toUpperCase()}).then(function (translation) {
                    SweetAlert.swal({type: 'success', title: translation, text: res.outBinds.out_code}); 
                });
            }
            else{
                if(res.outBinds.out_code === '-20001') {
                    $translate("common.message." + res.outBinds.out_message, {obj: 'common.execute.' + txn_type.toUpperCase()}).then(function (translation) {
                        SweetAlert.swal({type: 'error', title: translation, text: res.outBinds.out_code}); 
                    });
                }
                else if(res.outBinds.out_code === '-20002') {
                    $translate("common.message.ERROR", {obj:  'common.execute.' + txn_type.toUpperCase()}).then(function (translation) {
                        SweetAlert.swal({type: 'error', title: translation, text:res.outBinds.out_message}); 
                    });
                }
                else{
                    $translate("common.message.ERROR", {obj:  'common.execute.' + txn_type.toUpperCase(),  msg: 'error_code: ' + res.outBinds.out_code}).then(function (translation) {
                        SweetAlert.swal({type: 'error', title: translation, text:res.outBinds.out_message}); 
                    });
                }
                
            }
            
        }

        this.dbError = function(txn_type, error) {

            if (error.hasOwnProperty("outBinds")) {
                
                $translate('common.message.' + error.outBinds.out_message, { obj: 'commmon.execute.' + txn_type.toUpperCase() }).then(function (translation) {
                    
                    SweetAlert.swal({type: 'error'  , title: translation, text: error.outBinds.out_code}); 
                });
            }
            else{

                $translate('common.message.ERR_UNKNOWN', { obj: 'commmon.execute.' + txn_type.toUpperCase() }).then(function (translation) {
                    
                    SweetAlert.swal({type: 'error'  , title: translation }); 
                });
            }

            
        }

    }]);
 })();