'use strict';
/**
 * controller for Messages
 */
app.controller('AssetTopNavbarCtrl', ["$scope", "$state", "$interval", "$timeout", "asset_dashboard",
	function($scope, $state, $interval, $timeout, asset_dashboard) {

	$scope.noAvatarImg = "images/default-user.png";
	$scope.messages    = [];
	$scope.notiCount   = 0; //처리알림건수

	var date = new Date();
	var d    = date.getDate();
	var m    = date.getMonth();
	var y    = date.getFullYear();

	//test
	$scope.loadData = loadData;
	$scope.loadData();

	//데이타 load
	function loadData(){

		//자산 고장신고 리스트(미완료내역)
        var params     = {};
        params.command = "sql_10";
        asset_dashboard.search(params)
        .then(function(result){

            for(var i=0; i<result.length; i++){

                var rd   = result[i];
                var data = {
					"from"        : rd.data1,
					"date"        : new Date(rd.data6),  //new Date(y, m, d - 1, 19, 0),
					"subject"     : rd.data2,
					"email"       : "",
					"avatar"      : $scope.noAvatarImg,
					"starred"     : true,
					"sent"        : false,
					"spam"        : false,
					"read"        : false,
					"content"     : rd.data3,
					"id"          : rd.key1,
					"location"    : rd.data7,
					"status"      : rd.data5,
					"asset_code"  : rd.key2,
					"asset_name"  : rd.key3
				};

				$scope.messages.push(data);
            }
        });

		$scope.notiCount++;
	};

	//timer
	/*var add = $interval(function() {
		loadData();
	}, 10000);*/

	/*//timer
	var add = $interval(function() {
		if($scope.notiCount <= 100){
			loadData();
		}
		else{
			$scope.notiCount = 0;
			loadData();
		}
	}, 10000);*/

	$scope.stopAdd = function() {
		if (angular.isDefined(add)) {
			$interval.cancel(add);
			add = undefined;
		}
	};
}]);

