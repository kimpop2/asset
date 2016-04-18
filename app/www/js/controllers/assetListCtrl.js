'use strict';
/**
 * controller for Asset List
 */
app.controller('AssetListCtrl', ["$scope", "$state", "$interval", 'cost_center', 'asset_master',
	function($scope, $state, $interval, cost_center, asset_master) {

		$scope.noAvatarImg = "images/default-user.png";
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();

		$scope.lists    = [];
		$scope.messages = [];

	    //전체 데이타 load
	    $scope.loadMessages = function loadMessages(cost_center_code){

	    	//관리부서 load
	        var params     = {};
	        params.cost_center_code = cost_center_code;
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
						"asset_model_name"   : rd.asset_model_name      ,
						"manufacturer_name"  : rd.manufacturer_name     ,
						"purchaser_name"     : rd.purchaser_name        ,
						"acquisition_date"   : rd.acquisition_date      ,
						"depreciation_a"     : rd.depreciation_a        ,
						"depreciation_b"     : rd.depreciation_b        ,
						"salvage_amount"     : rd.salvage_amount        ,
						"manufacture_no"     : rd.manufacture_no        ,
						"manufacture_date"   : rd.manufacture_date      ,
						"external_apperance" : rd.external_apperance    ,
						"gross_weight"       : rd.gross_weight          ,
						"inspection_flag"    : rd.inspection_flag       ,
						"inspection_period"  : rd.inspection_period     ,
						"inspection_unit"    : rd.inspection_unit       ,
						"acquisition_amount" : rd.acquisition_amount    ,
						"install_area_code"  : rd.install_area_code     ,
						"final_move_seq"     : rd.final_move_seq        ,
						"final_disuse_seq"   : rd.final_disuse_seq      ,
						"status"             : rd.status                ,
						"remarks"            : rd.remarks               ,
						"created_by"         : rd.created_by            ,
						"creation_date"      : rd.creation_date         ,
						"last_updated_by"    : rd.last_updated_by       ,
						"last_update_date"   : rd.last_update_date      ,
						"object_id"          : rd.object_id
	                };
	                $scope.messages.push(list);
	            }
	        });
	    };

	    //관리부서
	    loadData();
	    function loadData(){

	    	//관리부서 load
	        var params     = {};
	        //params.command = "sql_9";
	        cost_center.search()
	        .then(function(result){

	            for(var i=0; i<result.length; i++){

	                var rd = result[i];

	                var list = {
	                	code : rd.cost_center_code,
	                	name : rd.cost_center_name,
	                	cnt  : rd.cnt
	                };

	                $scope.lists.push(list);
	            }
	        });
	    }
    }
]);

//자산상세이력 - 메인
app.controller('AssetDetailCrtl', ['$scope', '$stateParams', '$state', "$filter", "ngTableParams", "asset_part",

	function($scope, $stateParams, $state, $filter, ngTableParams, asset_part) {

		function getById(arr, id) {
			for (var d = 0, len = arr.length; d < len; d += 1) {
				if (arr[d].id == id) {

					return arr[d];
				}
			}
		}

		console.log("AssetDetailCrtl started...");
		$scope.message = getById($scope.messages, $stateParams.detailID);

		//Carousel 관련설정
		$scope.myInterval   = 3000;
		$scope.noWrapSlides = false;
		$scope.active       = 0;
		var slides          = $scope.slides = [];
		var currIndex       = 0;

		/*
		$scope.addSlide = function() {
			var newWidth = 600 + slides.length + 1;
			slides.push({
				image: 'http://lorempixel.com/' + newWidth + '/300',
				text: ['image 1','image 2','image 3','image 4'][slides.length % 4],
				id: currIndex++
			});
		};

		for (var i = 0; i < 10; i++) {
			$scope.addSlide();
		}
		*/

		//test
		slides.push(
			{image: 'images/africa-17344_640.jpg',
			 text: 'africa-17344_640.jpg',
			 id: 0
			},
			{image: 'images/lion-403764_640.jpg',
			 text: 'lion-403764_640.jpg',
			 id: 1
			},
			{image: 'images/lion-565820_640.jpg',
			 text: 'lion-565820_640.jpg',
			 id: 2
			}
		);

		/*
		$scope.randomize = function() {
			var indexes = generateIndexesArray();
			assignNewIndexesToSlides(indexes);
		};

		// Randomize logic below
		function assignNewIndexesToSlides(indexes) {
			for (var i = 0, l = slides.length; i < l; i++) {
				slides[i].id = indexes.pop();
			}
		}

		function generateIndexesArray() {
			var indexes = [];
			for (var i = 0; i < currIndex; ++i) {
				indexes[i] = i;
			}
			return shuffle(indexes);
		}

		// http://stackoverflow.com/questions/962802#962890
		function shuffle(array) {
			var tmp, current, top = array.length;

			if (top) {
				while (--top) {
					current = Math.floor(Math.random() * (top + 1));
					tmp = array[current];
					array[current] = array[top];
					array[top] = tmp;
				}
			}
			return array;
		}
		*/
	}
]);

//자산상세이력 - 메뉴
app.controller('AssetDetailMenuCrtl', ['$scope',

	function($scope) {

	    //Menu 정의
	    $scope.slideCarouselMenu = [{
	        id:    1,
	        menuTitle: '부품',
	        menuIcon : 'ti-info-alt'
	    },
	    {
	        id:    2,
	        menuTitle: '능력',
	        menuIcon : 'ti-bar-chart-alt'
	    },
	    {
	        id:    3,
	        menuTitle: '수리',
	        menuIcon : 'ti-layout-grid4'
	    },
	    {
	        id:    4,
	        menuTitle: '이동',
	        menuIcon : 'ti-reload'
	    }];
	}
]);

//자산상세이력 - 부속품묙
app.controller('AssetDetailPartCrtl', ['$scope', '$stateParams', '$state', "$filter", "ngTableParams", "asset_part",

	function($scope, $stateParams, $state, $filter, ngTableParams, asset_part) {

		//ngTable
	    var data = [];

	    //자산-부속품묙
	    loadData();
	    function loadData(){

	        var params     = {};
	        params.asset_code = $stateParams.assetCode;
	        asset_part.search()
	        .then(function(result){

	            for(var i=0; i<result.length; i++){

	                var rd = result[i];

	                var list = {
	                	asset_code      : rd.asset_code,
	                	asset_part_seq  : rd.asset_part_seq,
	                	part_no         : rd.part_no,
	                	part_name       : rd.part_name,
	                	part_spec       : rd.part_spec,
	                	quantity        : rd.quantity,
	                	unit_price      : rd.unit_price,
	                	status          : rd.status,
	                	remarks         : rd.remarks,
	                	created_by      : rd.created_by,
	                	creation_date   : rd.creation_date,
	                	last_update_date: rd.last_update_date,
	                	last_updated_by : rd.last_updated_by,
	                	object_id       : rd.object_id
	                };

	                data.push(list);
	            }

	            //테이블 초기화
			    $scope.tableParamsPart = new ngTableParams({
			        page: 1,
			        count: 10
			    }, {
			        total: data.length,
			        getData: function ($defer, params) {
			            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
			            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			        }
			    });
	        });
	    }
	}
]);

//자산상세이력 - 능력
app.controller('AssetDetailCapaCrtl', ['$scope', '$stateParams', '$state', "$filter", "ngTableParams", "asset_capa",

	function($scope, $stateParams, $state, $filter, ngTableParams, asset_capa) {

		//ngTable
	    var data = [];

	    //능력
	    loadData();
	    function loadData(){

	        var params = {};
	        params.asset_code = $stateParams.assetCode;
	        asset_capa.search(params)
	        .then(function(result){

	            for(var i=0; i<result.length; i++){

	                var rd = result[i];

	                var list = {
	                	asset_code      : rd.asset_code,
	                	capa_seq        : rd.capa_seq,
	                	name            : rd.name,
	                	description     : rd.description,
	                	status          : rd.status,
	                	remarks         : rd.remarks,
	                	created_by      : rd.created_by,
	                	creation_date   : rd.creation_date,
	                	last_update_date: rd.last_update_date,
	                	last_updated_by : rd.last_updated_by,
	                	object_id       : rd.object_id
	                };

	                data.push(list);
	            }

	            //테이블 초기화
			    $scope.tableParamsCapa = new ngTableParams({
			        page: 1,
			        count: 10
			    }, {
			        total: data.length,
			        getData: function ($defer, params) {
			            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
			            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			        }
			    });
	        });
	    }
	}
]);

//자산상세이력 - 자산이동
app.controller('AssetDetailMoveCrtl', ['$scope', '$stateParams', '$state', "$filter", "ngTableParams", "asset_move",

	function($scope, $stateParams, $state, $filter, ngTableParams, asset_move) {

		//ngTable
	    var data = [];

	    //자산이동
	    loadData();
	    function loadData(){

	        var params        = {};
	        params.asset_code = $stateParams.assetCode;
	        asset_move.search(params)
	        .then(function(result){

	            for(var i=0; i<result.length; i++){

	                var rd = result[i];

	                var list = {
						asset_code           : rd.asset_code,
						move_seq             : rd.move_seq,
						install_area_code    : rd.install_area_code,
						move_flag            : rd.move_flag,
						move_date            : rd.move_date,
						move_reason          : rd.move_reason,
						asset_name           : rd.asset_name,
						install_area_name    : rd.install_area_name,
						request_charger_name : rd.request_charger_name,
						process_charger_name : rd.process_charger_name
	                };

	                data.push(list);
	            }

	            //테이블 초기화
			    $scope.tableParamsMove = new ngTableParams({
			        page: 1,
			        count: 10
			    }, {
			        total: data.length,
			        getData: function ($defer, params) {
			            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
			            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			        }
			    });
	        });
	    }
	}
]);

//자산상세이력 - 자산처리요청
app.controller('AssetDetailRequestCrtl', ['$scope', '$stateParams', '$state', "$filter", "ngTableParams", "asset_request",

	function($scope, $stateParams, $state, $filter, ngTableParams, asset_request) {

		//ngTable
	    var data = [];

	    //자산처리요청
	    loadData();
	    function loadData(){

	        var params     = {};
	        params.asset_code = $stateParams.assetCode;
	        asset_request.search(params)
	        .then(function(result){

	            for(var i=0; i<result.length; i++){

	                var rd = result[i];

	                var list = {
						request_seq      : rd.request_seq     ,
						asset_code       : rd.asset_code      ,
						request_flag     : rd.request_flag    ,
						request_date     : rd.request_date    ,
						request_charger  : rd.request_charger ,
						req_subject      : rd.req_subject     ,
						request_desc     : rd.request_desc    ,
						file_key         : rd.file_key        ,
						process_flag     : rd.process_flag    ,
						process_date     : rd.process_date    ,
						process_charger  : rd.process_charger ,
						process_desc     : rd.process_desc    ,
						status           : rd.status          ,
						remarks          : rd.remarks         ,
						created_by       : rd.created_by      ,
						creation_date    : rd.creation_date   ,
						last_updated_by  : rd.last_updated_by ,
						last_update_date : rd.last_update_date,
						object_id        : rd.object_id
	                };

	                data.push(list);
	            }

	            //테이블 초기화
			    $scope.tableParamsRequest = new ngTableParams({
			        page: 1,
			        count: 10
			    }, {
			        total: data.length,
			        getData: function ($defer, params) {
			            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
			            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			        }
			    });
	        });
	    }
	}
]);

//자산상세이력 - 교환수리
app.controller('AssetDetailExRepairCrtl', ['$scope', '$stateParams', '$state', "$filter", "ngTableParams", "asset_ex_repair",

	function($scope, $stateParams, $state, $filter, ngTableParams, asset_ex_repair) {

		//ngTable
	    var data = [];

	    //교환수리
	    loadData();
	    function loadData(){

	        var params     = {};
	        params.asset_code = $stateParams.assetCode;
	        asset_ex_repair.search(params)
	        .then(function(result){

	            for(var i=0; i<result.length; i++){

	                var rd = result[i];

	                var list = {
						asset_code       : rd.asset_code      ,
						ex_re_seq        : rd.ex_re_seq       ,
						asset_part_seq   : rd.asset_part_seq  ,
						request_seq      : rd.request_seq     ,
						ex_re_req_flag   : rd.ex_re_req_flag  ,
						ex_re_part_name  : rd.ex_re_part_name ,
						ex_re_part_desc  : rd.ex_re_part_desc ,
						req_subject      : rd.req_subject     ,
						req_desc         : rd.req_desc        ,
						ex_re_requester  : rd.ex_re_requester ,
						ex_re_req_date   : rd.ex_re_req_date  ,
						ex_re_date       : rd.ex_re_date      ,
						ex_re_desc       : rd.ex_re_desc      ,
						ex_re_proc_flag  : rd.ex_re_proc_flag ,
						ex_re_cost       : rd.ex_re_cost      ,
						ex_re_charger    : rd.ex_re_charger   ,
						file_key         : rd.file_key        ,
						remarks          : rd.remarks         ,
						created_by       : rd.created_by      ,
						creation_date    : rd.creation_date   ,
						last_updated_by  : rd.last_updated_by ,
						last_update_date : rd.last_update_date,
						object_id        : rd.object_id
	                };

	                data.push(list);
	            }

	            //테이블 초기화
			    $scope.tableParamsExRepair = new ngTableParams({
			        page: 1,
			        count: 10
			    }, {
			        total: data.length,
			        getData: function ($defer, params) {
			            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
			            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			        }
			    });
	        });
	    }
	}
]);

//자산상세이력 - 자산실사
app.controller('AssetDetailSurveyCrtl', ['$scope', '$stateParams', '$state', "$filter", "ngTableParams", "asset_survey",

	function($scope, $stateParams, $state, $filter, ngTableParams, asset_survey) {

		//ngTable
	    var data = [];

	    //자산실사
	    loadData();
	    function loadData(){

	        var params     = {};
	        params.asset_code = $stateParams.assetCode;
	        asset_survey.search(params)
	        .then(function(result){

	            for(var i=0; i<result.length; i++){

	                var rd = result[i];

	                var list = {
						asset_code       : rd.asset_code      ,
						survey_seq       : rd.survey_seq      ,
						move_seq         : rd.move_seq        ,
						survey_date      : rd.survey_date     ,
						survey_desc      : rd.survey_desc     ,
						survey_result    : rd.survey_result   ,
						survey_charger   : rd.survey_charger  ,
						file_key         : rd.file_key        ,
						remarks          : rd.remarks         ,
						created_by       : rd.created_by      ,
						creation_date    : rd.creation_date   ,
						last_updated_by  : rd.last_updated_by ,
						last_update_date : rd.last_update_date,
						object_id        : rd.object_id
	                };

	                data.push(list);
	            }

	            //테이블 초기화
			    $scope.tableParamsSurvey = new ngTableParams({
			        page: 1,
			        count: 10
			    }, {
			        total: data.length,
			        getData: function ($defer, params) {
			            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
			            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			        }
			    });
	        });
	    }
	}
]);

//자산상세이력 - 자산폐기
app.controller('AssetDetailDisuseCrtl', ['$scope', '$stateParams', '$state', "$filter", "ngTableParams", "asset_disuse",

	function($scope, $stateParams, $state, $filter, ngTableParams, asset_disuse) {

		//ngTable
	    var data = [];

	    //자산폐기
	    loadData();
	    function loadData(){

	        var params     = {};
	        params.asset_code = $stateParams.assetCode;
	        asset_disuse.search(params)
	        .then(function(result){

	            for(var i=0; i<result.length; i++){

	                var rd = result[i];

	                var list = {
						asset_code       : rd.asset_code      ,
						disuse_seq       : rd.disuse_seq      ,
						disuse_date      : rd.disuse_date     ,
						disuse_reason    : rd.disuse_reason   ,
						disuse_desc      : rd.disuse_desc     ,
						disuse_charger   : rd.disuse_charger  ,
						file_key         : rd.file_key        ,
						remarks          : rd.remarks         ,
						created_by       : rd.created_by      ,
						creation_date    : rd.creation_date   ,
						last_updated_by  : rd.last_updated_by ,
						last_update_date : rd.last_update_date,
						object_id        : rd.object_id
	                };

	                data.push(list);
	            }

	            //테이블 초기화
			    $scope.tableParamsDisuse = new ngTableParams({
			        page: 1,
			        count: 10
			    }, {
			        total: data.length,
			        getData: function ($defer, params) {
			            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
			            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			        }
			    });
	        });
	    }
	}
]);
