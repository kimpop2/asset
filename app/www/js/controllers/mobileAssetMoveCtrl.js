'use strict';
/**
 * controller for Asset List
 */
(function() {
    'use strict';

    app.controller('MobileAssetMoveCtrl',
    ['$scope', '$http', '$log', 'ebizAlert', 'asset_move', 'asset_master', 'ebizList', '$cordovaBarcodeScanner', '$cordovaNfc', '$cordovaNfcUtil',
    function($scope, $http, $log, ebizAlert, asset_move, asset_master, ebizList, $cordovaBarcodeScanner, $cordovaNfc, $cordovaNfcUtil) {

        /* ***************************************************
         * scope variables define
         * ************************************************* */
        var asset_move_data = {};
        
        $scope.store  = asset_move_data;
        $scope.myform = asset_move_data;
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

        /* ***************************************************
         * init function
         * ************************************************* */

        /* ***************************************************
         * scope Functions define
         * ************************************************* */
        function resetForm() {

            asset_move_data = {
	        	txn_type        : 'exec_madd',
	        	move_flag       : 'MOVE',
	        	request_charger : 'ADMIN',
	        	process_charger : 'ADMIN'
	        };
	        
	        $scope.store  = asset_move_data;
	        $scope.myform = asset_move_data;

            $scope.myform = angular.copy($scope.store);
            //form.$setPristine(true);
            if($scope.Form){
            	$scope.Form.$setPristine(true);
            }
        }
        $scope.resetForm();

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

                ebizAlert.confirm({txn_type: asset_move_data.txn_type},
                    // ok call back : insert or update data
                    function() {

                        var txn_type = asset_move_data.txn_type;

                        if( txn_type === 'exec_madd') {
                            // insert Data
                            asset_move.insert($scope.myform).then(
                                // insert success
                                function(response) {
                                    ebizAlert.dbOK(txn_type, response);
                                    $scope.resetForm();
                                },
                                // insert error
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
                    { txn_type: asset_move_data.txn_type, timer: 1000 }
                );
            }

        };

        //-------------------
        //NFC
        //-------------------
        $cordovaNfc.then(function(nfcInstance) {

            //Use the plugins interface as you go, in a more "angular" way
            nfcInstance.addNdefListener(addNfc)
            .then(
                //Success callback
                function(event) {

                    console.log("bound success");
                },
                //Fail callback
                function(err) {
                    alert("error");
                    console.log("error");
                });
        });

        $cordovaNfcUtil.then(function(nfcUtil) {
            
            console.log(nfcUtil.bytesToString("some bytes"))
        });
        
        var nfcList = [];

        var addNfc = function(event) {
            
            var tag         = event.tag;
            var ndefMessage = tag.ndefMessage;

            // dump the raw json of the message
            // note: real code will need to decode the payload from each record
            //alert(JSON.stringify(ndefMessage));
            // assuming the first record in the message has a payload that can be converted to a string.
            //alert('NFC : ' + nfc.bytesToString(ndefMessage[0].payload).substring(3));

            /*nfcList.push({
                text: JSON.stringify(ndefMessage),
                format: nfc.bytesToString(ndefMessage[0].payload).substring(3)
            });

            $scope.nfcs = nfcList;*/

        	$scope.myform.barcode    = JSON.stringify(tag);

            //조회대상컬럼 초기화
            $scope.myform.asset_cat_name         = "";
            $scope.myform.cost_center_name       = "";
            $scope.myform.install_area_name      = "";
            asset_request_data.asset_cat_name    = "";
            asset_request_data.cost_center_name  = "";
            asset_request_data.install_area_name = "";


        	$scope.myform.asset_code = nfc.bytesToString(ndefMessage[0].payload).substring(3);
        	$scope.loadAssetData($scope.myform.asset_code);
        };

        //-------------------
        //Barcode scan
        //-------------------
	    $scope.scanBarcode = function() {
	        $cordovaBarcodeScanner.scan().then(function(imageData) {

                //조회대상컬럼 초기화
                $scope.myform.asset_cat_name         = "";
                $scope.myform.cost_center_name       = "";
                $scope.myform.install_area_name      = "";
                asset_request_data.asset_cat_name    = "";
                asset_request_data.cost_center_name  = "";
                asset_request_data.install_area_name = "";


	        	$scope.myform.asset_code = imageData.text;
	        	$scope.loadAssetData(imageData.text);

	            //alert('Barcode : ' + imageData.text);
	        	$scope.myform.barcode = imageData;

	            console.log("Barcode Format -> " + imageData.format);
	            console.log("Cancelled -> "      + imageData.cancelled);
	        }, function(error) {
	            console.log("An error happened -> " + error);
	        });
	    };

        //-------------------
        //자산정보 load
        //-------------------
        $scope.loadAssetData = function(assetCode){

        	console.log('assetCode::::' + assetCode);

	        var params     = {};
	        params.asset_code = assetCode;
	        asset_master.search(params)
	        .then(function(result){

	            for(var i=0; i<result.length; i++){

	                var rd = result[i];
	                $scope.myform.asset_name        = rd.asset_name;
	                $scope.myform.asset_cat_name    = rd.asset_cat_name;
	                $scope.myform.cost_center_name  = rd.cost_center_name;
	                $scope.myform.install_area_name = rd.install_area_name;
	            }
	        });
        }

        // ng-repeat list
        $scope.asset_master_list         = ebizList.list('asset_master'        );    //자산번호
        $scope.installation_area_list    = ebizList.list('installation_area'   );    //이동대여반납장소
        $scope.move_flag_list            = ebizList.list('move_flag'           );    //이동대여반납구분
        // 이동대여반납일자
        $scope.move_date = {
            disabled : function(date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            },
            min : new Date(2010, 0,   1),
            max : new Date(2199, 11, 31),
            options : {}
        };
        $scope.asset_user_list           = ebizList.list('asset_user'          );    //이동대여반납요청자
    }]);
})();

//enter event
app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});