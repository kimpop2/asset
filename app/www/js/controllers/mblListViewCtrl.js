'use strict';
/**
 * controller for main list view
 */
app.controller('MblListViewCtrl', ["$scope", "$state", "$interval", 'asset_master',
	function($scope, $state, $interval, asset_master) {

		$scope.noAvatarImg = "images/default-user.png";
		var date = new Date();
		var d    = date.getDate();
		var m    = date.getMonth();
		var y    = date.getFullYear();

	    //Menu 정의
	    $scope.slideCarouselMenu = [{
	        id:    1,
	        menuTitle: '자산',
	        menuIcon : 'ti-layout-grid4'
	    },
	    {
	        id:    2,
	        menuTitle: '분류',
	        menuIcon : 'ti-layout-grid4'
	    },
	    {
	        id:    3,
	        menuTitle: '부서',
	        menuIcon : 'ti-layout-grid4'
	    },
	    {
	        id:    4,
	        menuTitle: '장소',
	        menuIcon : 'ti-layout-grid4'
	    },
	    {
	        id:    5,
	        menuTitle: 'User',
	        menuIcon : 'ti-layout-grid4'
	    },
	    {
	        id:    6,
	        menuTitle: '부품',
	        menuIcon : 'ti-layout-grid4'
	    }];

		$scope.messages = [];

	    //자산정보
	    $scope.loadData = function loadData(){

	        var params     = {};
	        asset_master.search(params)
	        .then(function(result){

	        	//초기화
	        	$scope.messages = [];
	            
	            for(var i=0; i<result.length; i++){

	                var rd = result[i];
	                var list = {
						"id"                 : rd.object_id             , //inbox 전용
						"starred"            : false                    , //inbox 전용
						"avatar"             : "images/default-user.png", //inbox 전용
						"asset_code"         : rd.asset_code            ,
						"asset_name"         : rd.asset_name            ,
						"cost_center_code"   : rd.cost_center_code      ,
						"asset_cat_code"     : rd.asset_cat_code        ,
						"main_mgr_no"        : rd.main_mgr_no           ,
						"sub_mgr_no"         : rd.sub_mgr_no            ,
						"acquisition_date"   : rd.acquisition_date      ,
						"install_area_code"  : rd.install_area_code     ,
						"remarks"            : rd.remarks
	                };
	                $scope.messages.push(list);
	            }
	        });
	    };
	    $scope.loadData();
    }
]);

/**
 * controller for 자산분류
 */
app.controller('MblListViewCategoryCtrl', ["$scope", "$state", "$interval", 'asset_category',
	function($scope, $state, $interval, asset_category) {

		$scope.noAvatarImg = "images/default-user.png";
		var date = new Date();
		var d    = date.getDate();
		var m    = date.getMonth();
		var y    = date.getFullYear();

		$scope.messages = [];

	    //자산분류
	    $scope.loadData = function loadData(){

	        var params     = {};
	        asset_category.search(params)
	        .then(function(result){

	        	//초기화
	        	$scope.messages = [];
	            
	            for(var i=0; i<result.length; i++){

	                var rd = result[i];
	                var list = {
						"id"                 : rd.object_id             , //inbox 전용
						"starred"            : false                    , //inbox 전용
						"avatar"             : "images/default-user.png", //inbox 전용
						"asset_cat_code"     : rd.asset_cat_code        ,
						"asset_cat_name"     : rd.asset_cat_name        ,
						"remarks"            : rd.remarks               ,
						"creation_date"      : rd.creation_date
	                };
	                $scope.messages.push(list);
	            }
	        });
	    };
	    $scope.loadData();
    }
]);

/**
 * controller for 관리부서
 */
app.controller('MblListViewCostCenterCtrl', ["$scope", "$state", "$interval", 'cost_center',
	function($scope, $state, $interval, cost_center) {

		$scope.noAvatarImg = "images/default-user.png";
		var date = new Date();
		var d    = date.getDate();
		var m    = date.getMonth();
		var y    = date.getFullYear();

		$scope.messages = [];

	    //자산분류
	    $scope.loadData = function loadData(){

	        var params     = {};
	        cost_center.search(params)
	        .then(function(result){

	        	//초기화
	        	$scope.messages = [];
	            
	            for(var i=0; i<result.length; i++){

	                var rd = result[i];
	                var list = {
						"id"                 : rd.object_id             , //inbox 전용
						"starred"            : false                    , //inbox 전용
						"avatar"             : "images/default-user.png", //inbox 전용
						"cost_center_code"   : rd.cost_center_code      ,
						"cost_center_name"   : rd.cost_center_name      ,
						"remarks"            : rd.remarks               ,
						"creation_date"      : rd.creation_date
	                };
	                $scope.messages.push(list);
	            }
	        });
	    };
	    $scope.loadData();
    }
]);

/**
 * controller for 설치장소
 */
app.controller('MblListViewInstallAreaCtrl', ["$scope", "$state", "$interval", 'installation_area',
	function($scope, $state, $interval, installation_area) {

		$scope.noAvatarImg = "images/default-user.png";
		var date = new Date();
		var d    = date.getDate();
		var m    = date.getMonth();
		var y    = date.getFullYear();

		$scope.messages = [];

	    //자산분류
	    $scope.loadData = function loadData(){

	        var params     = {};
	        installation_area.search(params)
	        .then(function(result){

	        	//초기화
	        	$scope.messages = [];
	            
	            for(var i=0; i<result.length; i++){

	                var rd = result[i];
	                var list = {
						"id"                 : rd.object_id             , //inbox 전용
						"starred"            : false                    , //inbox 전용
						"avatar"             : "images/default-user.png", //inbox 전용
						"install_area_code"  : rd.install_area_code     ,
						"install_area_name"  : rd.install_area_name     ,
						"remarks"            : rd.remarks               ,
						"creation_date"      : rd.creation_date
	                };
	                $scope.messages.push(list);
	            }
	        });
	    };
	    $scope.loadData();
    }
]);

/**
 * controller for 공통품목
 */
app.controller('MblListViewCommonPartCtrl', ["$scope", "$state", "$interval", 'asset_common_part',
	function($scope, $state, $interval, asset_common_part) {

		$scope.noAvatarImg = "images/default-user.png";
		var date = new Date();
		var d    = date.getDate();
		var m    = date.getMonth();
		var y    = date.getFullYear();

		$scope.messages = [];

	    //자산분류
	    $scope.loadData = function loadData(){

	        var params     = {};
	        asset_common_part.search(params)
	        .then(function(result){

	        	//초기화
	        	$scope.messages = [];
	            
	            for(var i=0; i<result.length; i++){

	                var rd = result[i];
	                var list = {
						"id"                 : rd.object_id             , //inbox 전용
						"starred"            : false                    , //inbox 전용
						"avatar"             : "images/default-user.png", //inbox 전용
						"part_no"            : rd.part_no               ,
						"part_name"          : rd.part_name             ,
						"part_spec"          : rd.part_spec             ,
						"remarks"            : rd.remarks               ,
						"creation_date"      : rd.creation_date
	                };
	                $scope.messages.push(list);
	            }
	        });
	    };
	    $scope.loadData();
    }
]);

/**
 * controller for 사용자
 */
app.controller('MblListViewUserCtrl', ["$scope", "$state", "$interval", 'asset_user',
	function($scope, $state, $interval, asset_user) {

		$scope.noAvatarImg = "images/default-user.png";
		var date = new Date();
		var d    = date.getDate();
		var m    = date.getMonth();
		var y    = date.getFullYear();

		$scope.messages = [];

	    //자산분류
	    $scope.loadData = function loadData(){

	        var params     = {};
	        asset_user.search(params)
	        .then(function(result){

	        	//초기화
	        	$scope.messages = [];
	            
	            for(var i=0; i<result.length; i++){

	                var rd = result[i];
	                var list = {
						"id"                 : rd.object_id             , //inbox 전용
						"starred"            : false                    , //inbox 전용
						"avatar"             : "images/default-user.png", //inbox 전용
						"user_id"            : rd.user_id               ,
						"user_name"          : rd.user_name             ,
						"phone"              : rd.phone                 ,
						"email"              : rd.email                 ,
						"remarks"            : rd.remarks               ,
						"creation_date"      : rd.creation_date
	                };
	                $scope.messages.push(list);
	            }
	        });
	    };
	    $scope.loadData();
    }
]);
