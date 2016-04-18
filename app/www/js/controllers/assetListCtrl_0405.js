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

		/*$scope.messages = [
			{
				"id"                 : 50223456           ,
				"starred"            : false              ,
				"avatar"             : "images/lion-565818_640.jpg",
				"asset_code"         : "A100001"          ,
				"asset_name"         : "시험장비1"        ,
				"cost_center_code"   : "CC10010"          ,
				"asset_cat_code"     : "AC10020"          ,
				"main_mgr_no"        : "ADMIN"            ,
				"sub_mgr_no"         : "105000049"        ,
				"asset_model_name"   : "MD339993899883"   ,
				"manufacturer_name"  : "HMC"              ,
				"purchaser_name"     : "일동"             ,
				"acquisition_date"   : "2010-01-01"       ,
				"depreciation_a"     : 3                  ,
				"depreciation_b"     : 8                  ,
				"salvage_amount"     : 3000000            ,
				"manufacture_no"     : "MM30399333"       ,
				"manufacture_date"   : "2009-01-01"       ,
				"external_apperance" : "기계장치 매뉴얼 참조",
				"gross_weight"       : "30"               ,
				"inspection_flag"    : "Y"                ,
				"inspection_period"  : "3"                ,
				"inspection_unit"    : "M"                ,
				"acquisition_amount" : 50000000           ,
				"install_area_code"  : "LC10060"          ,
				"final_move_seq"     : "최종이동일련번호" ,
				"final_disuse_seq"   : "최종폐기일련번호" ,
				"status"             : "Y"                ,
				"remarks"            : "비고1"            ,
				"created_by"         : "ADMIN"            ,
				"creation_date"      : "2016-03-21"       ,
				"last_updated_by"    : "ADMIN"            ,
				"last_update_date"   : "2016-03-31"       ,
				"object_id"          : 1
			}, {
				"id"                 : 50223457           ,
				"starred"            : true               ,
				"avatar"             : "images/lion-565820_640.jpg",
				"asset_code"         : "A100002"          ,
				"asset_name"         : "시험장비2"        ,
				"cost_center_code"   : "CC10010"          ,
				"asset_cat_code"     : "AC10020"          ,
				"main_mgr_no"        : "ADMIN"            ,
				"sub_mgr_no"         : "105000049"        ,
				"asset_model_name"   : "MD339993899883"   ,
				"manufacturer_name"  : "HMC"              ,
				"purchaser_name"     : "일동"             ,
				"acquisition_date"   : "2010-01-01"       ,
				"depreciation_a"     : 3                  ,
				"depreciation_b"     : 8                  ,
				"salvage_amount"     : 3000000            ,
				"manufacture_no"     : "MM30399333"       ,
				"manufacture_date"   : "2009-01-01"       ,
				"external_apperance" : "기계장치 매뉴얼 참조",
				"gross_weight"       : "30"               ,
				"inspection_flag"    : "Y"                ,
				"inspection_period"  : "3"                ,
				"inspection_unit"    : "M"                ,
				"acquisition_amount" : 50000000           ,
				"install_area_code"  : "LC10060"          ,
				"final_move_seq"     : "최종이동일련번호" ,
				"final_disuse_seq"   : "최종폐기일련번호" ,
				"status"             : "Y"                ,
				"remarks"            : "비고2"            ,
				"created_by"         : "ADMIN"            ,
				"creation_date"      : "2016-03-21"       ,
				"last_updated_by"    : "ADMIN"            ,
				"last_update_date"   : "2016-03-31"       ,
				"object_id"          : 2
			}, {
				"id"                 : 50223458           ,
				"starred"            : false              ,
				"avatar"             : "images/default-user.png",
				"asset_code"         : "A100003"          ,
				"asset_name"         : "시험장비3"        ,
				"cost_center_code"   : "CC10020"          ,
				"asset_cat_code"     : "AC10070"          ,
				"main_mgr_no"        : "ADMIN"            ,
				"sub_mgr_no"         : "105000049"        ,
				"asset_model_name"   : "MD339993899883"   ,
				"manufacturer_name"  : "HMC"              ,
				"purchaser_name"     : "일동"             ,
				"acquisition_date"   : "2010-01-01"       ,
				"depreciation_a"     : 3                  ,
				"depreciation_b"     : 8                  ,
				"salvage_amount"     : 3000000            ,
				"manufacture_no"     : "MM30399333"       ,
				"manufacture_date"   : "2009-01-01"       ,
				"external_apperance" : "기계장치 매뉴얼 참조",
				"gross_weight"       : "30"               ,
				"inspection_flag"    : "Y"                ,
				"inspection_period"  : "3"                ,
				"inspection_unit"    : "M"                ,
				"acquisition_amount" : 50000000           ,
				"install_area_code"  : "LC10060"          ,
				"final_move_seq"     : "최종이동일련번호" ,
				"final_disuse_seq"   : "최종폐기일련번호" ,
				"status"             : "Y"                ,
				"remarks"            : "비고3"            ,
				"created_by"         : "ADMIN"            ,
				"creation_date"      : "2016-03-21"       ,
				"last_updated_by"    : "ADMIN"            ,
				"last_update_date"   : "2016-03-31"       ,
				"object_id"          : 3
			}
		];*/

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

	    //(당월포함 6개월) 자산등록,자산이동,교환수리
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

		/*$scope.addSlide = function() {
			var newWidth = 600 + slides.length + 1;
			slides.push({
				image: 'http://lorempixel.com/' + newWidth + '/300',
				text: ['image 1','image 2','image 3','image 4'][slides.length % 4],
				id: currIndex++
			});
		};

		for (var i = 0; i < 10; i++) {
			$scope.addSlide();
		}*/

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


		/*$scope.randomize = function() {
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
		}*/

		//ngTable
	    var data = [];

	    //상세데이타 load
	    loadData();
	    function loadData(){

	    	//관리부서 load
	        var params     = {};
	        //params.asset_code = "";
	        asset_part.search()
	        .then(function(result){

	            for(var i=0; i<result.length; i++){

	                var rd = result[i];

	                var list = {
	                	part_no    : rd.part_no,
	                	part_name  : rd.part_name,
	                	part_spec  : rd.part_spec,
	                	quantity   : rd.quantity,
	                	unit_price : rd.unit_price
	                };

	                data.push(list);
	            }

	            //테이블 초기화
			    $scope.tableParams = new ngTableParams({
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

	    //Menu 정의
	    $scope.slideCarousel = [{
	        id:    1,
	        menuTitle: '부품정보',
	        menuIcon : 'ti-info-alt'
	    },
	    {
	        id:    2,
	        menuTitle: '장비능력',
	        menuIcon : 'ti-bar-chart-alt'
	    },
	    {
	        id:    3,
	        menuTitle: '수리이력',
	        menuIcon : 'ti-layout-grid4'
	    },
	    {
	        id:    4,
	        menuTitle: '대여이력',
	        menuIcon : 'ti-reload'
	    }];

	}
]);





app.controller('CarouselDemoCrtl', ['$scope',

	function($scope) {

		/*function getSlide(target, style){
	        var i = target.length;
	        return {
	            id:    (i + 1),
	            label: 'slide #' + (i + 1),
	            img:   'http://lorempixel.com/450/300/' + style + '/' + ((i + 1) % 10),
	            color: 'red',
	            odd:   (i % 2 === 0)
	        };
	    }

	    function addSlide(target, style){
	        target.push(getSlide(target, style));
	    };

        function addSlides(target, style, qty) {
            for (var i=0; i < qty; i++) {
                addSlide(target, style);
            }
        }

	    $scope.carouselIndex  = 3;
	    $scope.slides         = [];
	    addSlides($scope.slides, 'sports',  5);*/

	    //Menu 정의
	    $scope.slideCarousel = [{
	        id:    1,
	        menuTitle: '메뉴 1'
	    },
	    {
	        id:    2,
	        menuTitle: '메뉴 2'
	    },
	    {
	        id:    3,
	        menuTitle: '메뉴 3'
	    },
	    {
	        id:    4,
	        menuTitle: '메뉴 4'
	    },
	    {
	        id:    5,
	        menuTitle: '메뉴 5'
	    }];
	}
]);