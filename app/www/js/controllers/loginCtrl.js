//LOGIN
app.controller('LoginCtrl', ['$scope', '$state', '$stateParams', '$rootScope', 'SweetAlertService', 'AuthService', function($scope, $state, $stateParams, $rootScope, SweetAlertService, AuthService) {
	
	$scope.doLogIn = function(){

		AuthService.login($scope.user).then(function(msg, user) {
            $state.go('app.dashboard');
		}, function(errMsg) {
		    SweetAlertService.alert({
				title: '로그인 실패!', 
				text: errMsg,
				type: 'error'
			});
		});
	};

	$scope.user = {};
	
	if($stateParams.user !== null) {
		$scope.user.empno = $stateParams.user.empno;
	}
	// **************************************************
	// **************************************************
	// 테스트 아이디 비번 미리셋팅
	// **************************************************
	// **************************************************
	else{
		$scope.user.empno = '105000049';
		$scope.user.password = '1111';
	}
	//$scope.user.pin = "12345";

	// We need this for the form validation
	/*$scope.selected_tab = "";

	$scope.$on('my-tabs-changed', function (event, data) {
		$scope.selected_tab = data.title;
	});*/
}]);
/*
.controller('SignupCtrl', function($scope, AuthService, $state) {
	$scope.user = {};

	$scope.doSignUp = function(){

		AuthService.register($scope.user).then(function(result) {
			$//state.go('auth.login', {user: result.user});
		    var alertPopup = $ionicPopup.alert({
		        title: '사용자 등록완료',
		        template: result.msg
		    });
		}, function(errMsg) {
		    var alertPopup = $ionicPopup.alert({
		        title: '사용자 등록실패',
		        template: errMsg
		    });
		});
		
	};
})

.controller('ForgotPasswordCtrl', function($scope, $state) {
	$scope.recoverPassword = function(){
		//$state.go('app.feeds-categories');
	};

	$scope.user = {};
})
*/

