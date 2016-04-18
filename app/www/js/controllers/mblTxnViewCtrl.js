'use strict';
/**
 * controller for main list view
 */
app.controller('MblTxnViewCtrl', ["$scope", "$state", "$interval",
	function($scope, $state, $interval) {

		$scope.noAvatarImg = "images/default-user.png";
		var date = new Date();
		var d    = date.getDate();
		var m    = date.getMonth();
		var y    = date.getFullYear();

	    //Menu 정의
	    $scope.slideCarouselMenu = [{
	        id:    1,
	        menuTitle: '이동',
	        menuIcon : 'ti-layout-grid4'
	    },
	    {
	        id:    2,
	        menuTitle: '신고',
	        menuIcon : 'ti-layout-grid4'
	    },
	    {
	        id:    3,
	        menuTitle: '교환수리',
	        menuIcon : 'ti-layout-grid4'
	    },
	    {
	        id:    4,
	        menuTitle: '실사',
	        menuIcon : 'ti-layout-grid4'
	    },
	    {
	        id:    5,
	        menuTitle: '폐기',
	        menuIcon : 'ti-layout-grid4'
	    }];
    }
]);

