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

    app.service('ebizAlert', ['SweetAlert', '$translate',
    function(SweetAlert, $translate){
        
        this.confirm = function (alert, cbConfirm, cancelAlert, cbCancel) {

            var txntype = alert.txn_type;
            var message = alert.msg || '';

            $translate(message, { obj: 'commmon.execute.' + txntype.toUpperCase() }).then(function (translation) {
                alert.title = translation;
                alert.type || 'warning';
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
                            cancelAlert();
                        }
                        // callback
                        if(cbCancel){
                            cbCancel();
                        }
                    }
                });    
            });
            
            
        };


        this.db = function(txn_type, res, wait) {
            var alert = {};
            alert.timer = wait;
            
            if(res.outBinds.out_message.toUpperCase() === 'OK') {
                $translate('common.message.OK').then(function (translation) {
                  alert.type  = 'success';
                  alert.title = translation;
                });
            }
            else {
                $translate('common.message.' + res.outBinds.out_message.toUpperCase(), { obj: 'commmon.execute.' + txn_type.toUpperCase() }).then(function (translation) {
                    alert.type  = 'error';
                    alert.title = translation;
                });
            }

            SweetAlert.swal(alert); 
        }

        this.warn = function(txn_type, msg, wait) {
            var alert = {};
            alert.timer = wait;
            alert.type  = 'warning';
            var txntype = txn_type || '';
            $translate(msg, { obj: 'commmon.execute.' + txntype.toUpperCase() }).then(function (translation) {
              alert.title = translation;
            });
        
            SweetAlert.swal(alert); 
        }

        this.error = function(txn_type, msg, wait) {
            var alert = {};
            alert.timer = wait;
            alert.type  = 'error';
            console.log(txn_type);
            var txntype = txn_type || '';
            $translate(msg, { obj: 'commmon.execute.' + txntype.toUpperCase() }).then(function (translation) {
              alert.title = translation;
            });
        
            SweetAlert.swal(alert); 
        }

        this.ask = function(txn_type, msg, wait) {
            var alert = {};
            alert.timer = wait;
            alert.type  = 'warning';
            var txntype = txn_type || '';
            $translate(msg, { obj: 'commmon.execute.' + txntype.toUpperCase() }).then(function (translation) {
              alert.title = translation;
            });
        
            SweetAlert.swal(alert); 
        }
    }]);
 })();