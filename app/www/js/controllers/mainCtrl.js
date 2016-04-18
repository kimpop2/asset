'use strict';
/**
 * Clip-Two Main Controller
 */
app.controller('AppCtrl', ['$rootScope', '$scope', '$state', '$translate', '$localStorage', '$window', '$document', '$timeout', '$http', 'cfpLoadingBar', 'SweetAlertService', 'AuthService', 'AUTH_EVENTS', 'AUTH_PATH',
function($rootScope, $scope, $state, $translate, $localStorage, $window, $document, $timeout, $http, cfpLoadingBar, SweetAlertService, AuthService, AUTH_EVENTS, AUTH_PATH) {

	// Loading bar transition
	// -----------------------------------
	var $win = $($window);

	// from mobp ****************************************************************
	//403 Session Error
	$scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
	    
	    SweetAlertService.alert({
			title: '인증에러!', 
			text: '인증 기간이 만료되었습니다!',
			type: 'error'
		},
		// Callback
		function() {
			AuthService.logout();
			$state.go('login.signin');
		});
	    
	});
	
	//401 Permission Error
	$scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
		
		SweetAlertService.alert({
			title: '권한없음!', 
			text: '사용권한이 없습니다!', 
			type: 'error'
		},
		// Callback
		function() {
			$state.go('app.dashboard');
		});

	});
	
	/*
	$http.get(AUTH_PATH.url + '/userinfo').then(function(result) {
	    console.log('home:' + result.data);
	    //////// $scope.userinfo = result.data.msg;
	});
	*/ 

	$scope.logout = function() {
	    
	    SweetAlertService.confirm({
            title: "로그아웃 확인",
            text: "로그아웃 하시겠습니까?",
            confirmButtonColor: "#007AFF"
        },
        // Confirm Callback
        function () {
            AuthService.logout();
	    	$state.go('login.signin');
	    },
	    // Confirm SweetAlert
	    {
            title: "로그아웃 확인",
            text: "로그아웃 되었습니다.",
            timer: 2000
        },
        // Cancel Callback
        null, 
        // Cancel SweetAlert
	    {
            title: "취소 확인",
            text: "로그아웃을 취소했습니다.",
            timer: 2000
        });
	    
	};
	// end mobp *****************************************************************
	
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		//start loading bar on stateChangeStart
		cfpLoadingBar.start();

	});
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

		//stop loading bar on stateChangeSuccess
		event.targetScope.$watch("$viewContentLoaded", function() {

			cfpLoadingBar.complete();
		});

		// scroll top the page on change state
		$('#app .main-content').css({
			position : 'relative',
			top : 'auto'
		});
		
		$('footer').show();
		
		window.scrollTo(0, 0);

		if (angular.element('.email-reader').length) {
			angular.element('.email-reader').animate({
				scrollTop : 0
			}, 0);
		}

		// Save the route title
		$rootScope.currTitle = $state.current.title;
	});

	// State not found
	$rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
		//$rootScope.loading = false;
		console.log(unfoundState.to);
		// "lazy.state"
		console.log(unfoundState.toParams);
		// {a:1, b:2}
		console.log(unfoundState.options);
		// {inherit:false} + default options
	});

	$rootScope.pageTitle = function() {
		return $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
	};

	// save settings to local storage
	if (angular.isDefined($localStorage.layout)) {
		$scope.app.layout = $localStorage.layout;

	} else {
		$localStorage.layout = $scope.app.layout;
	}
	$scope.$watch('app.layout', function() {
		// save to local storage
		$localStorage.layout = $scope.app.layout;
	}, true);

	//global function to scroll page up
	$scope.toTheTop = function() {

		$document.scrollTopAnimated(0, 600);

	};

	// angular translate
	// ----------------------

	$scope.language = {
		// Handles language dropdown
		listIsOpen : false,
		// list of available languages
		available : {
			'ko' : '한국어',
			'en' : 'English'
			//'it_IT' : 'Italiano',
			
		},
		// display always the current ui language
		init : function() {
			var proposedLanguage = $translate.proposedLanguage() || $translate.use();
			var preferredLanguage = $translate.preferredLanguage();
			// we know we have set a preferred one in app.config
			$scope.language.selected = $scope.language.available[(proposedLanguage || preferredLanguage)];
		},
		set : function(localeId, ev) {
			$translate.use(localeId);
			$scope.language.selected = $scope.language.available[localeId];
			$scope.language.listIsOpen = !$scope.language.listIsOpen;
		}
	};

	$scope.language.init();

	// Function that find the exact height and width of the viewport in a cross-browser way
	var viewport = function() {
		var e = window, a = 'inner';
		if (!('innerWidth' in window)) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		return {
			width : e[a + 'Width'],
			height : e[a + 'Height']
		};
	};
	// function that adds information in a scope of the height and width of the page
	$scope.getWindowDimensions = function() {
		return {
			'h' : viewport().height,
			'w' : viewport().width
		};
	};
	// Detect when window is resized and set some variables
	$scope.$watch($scope.getWindowDimensions, function(newValue, oldValue) {
		$scope.windowHeight = newValue.h;
		$scope.windowWidth = newValue.w;
		
		if (newValue.w >= 992) {
			$scope.isLargeDevice = true;
		} else {
			$scope.isLargeDevice = false;
		}
		if (newValue.w < 992) {
			$scope.isSmallDevice = true;
		} else {
			$scope.isSmallDevice = false;
		}
		if (newValue.w <= 768) {
			$scope.isMobileDevice = true;
		} else {
			$scope.isMobileDevice = false;
		}
	}, true);
	// Apply on resize
	$win.on('resize', function() {
		
		$scope.$apply();
		if ($scope.isLargeDevice) {
			$('#app .main-content').css({
				position : 'relative',
				top : 'auto',
				width: 'auto'
			});
			$('footer').show();
		}
	});
}]);
