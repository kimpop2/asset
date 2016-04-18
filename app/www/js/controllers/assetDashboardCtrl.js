'use strict';
/** 
  * controllers used for the dashboard
*/
app.controller('DashBoardMonthTxnCtrl', ["$scope", "asset_dashboard", function ($scope, asset_dashboard) {

    $scope.sparkline_1 = [];
    $scope.sparkline_2 = [];
    $scope.sparkline_3 = [];

    $scope.line1_cnt   = 0;
    $scope.line2_cnt   = 0;
    $scope.line3_cnt   = 0;

    //(당월포함 6개월) 자산등록,자산이동,교환수리
    loadData();
    function loadData(){

        var params     = {};
        params.command = "sql_9";

        asset_dashboard.search(params)
        .then(function(result){

            for(var i=0; i<result.length; i++){

                var rd = result[i];

                //자산등록
                if(rd.key1 === 'type1'){
                    $scope.sparkline_1 = [rd.data1, rd.data2, rd.data3, rd.data4, rd.data5, rd.data6];
                    $scope.line1_cnt   = parseInt(rd.data1) + parseInt(rd.data2) + parseInt(rd.data3) + 
                                         parseInt(rd.data4) + parseInt(rd.data5) + parseInt(rd.data6);
                    $scope.dateBetween = rd.key2;
                }
                //자산이동
                else if(rd.key1 === 'type2'){
                    $scope.sparkline_2 = [rd.data1, rd.data2, rd.data3, rd.data4, rd.data5, rd.data6];
                    $scope.line2_cnt   = parseInt(rd.data1) + parseInt(rd.data2) + parseInt(rd.data3) + 
                                         parseInt(rd.data4) + parseInt(rd.data5) + parseInt(rd.data6);
                }
                //교환수리
                else if(rd.key1 === 'type3'){
                    $scope.sparkline_3 = [rd.data1, rd.data2, rd.data3, rd.data4, rd.data5, rd.data6];
                    $scope.line3_cnt   = parseInt(rd.data1) + parseInt(rd.data2) + parseInt(rd.data3) + 
                                         parseInt(rd.data4) + parseInt(rd.data5) + parseInt(rd.data6);
                }
            }
        });
    };
}]);

app.controller('DashBoardAssetRegCtrl', ["$scope", "asset_dashboard",  function ($scope, asset_dashboard) {

    $scope.data1 = [];
    $scope.data2 = [];

    //data
    loadData();
    function loadData(){

        var params     = {};
        params.command = "sql_2";
        params.yyyy    = "2016";

        asset_dashboard.search(params)
        .then(function(result){

            for(var i=0; i<result.length; i++){
    
                var rd = result[i];

                //자산등록
                if(rd.key1 === 'type1'){
                    $scope.data1 = [rd.data1, rd.data2, rd.data3, rd.data4, rd.data5, rd.data6, rd.data7, rd.data8, rd.data9, rd.data10, rd.data11, rd.data12];
                    
                }
                //자산폐기
                else if(rd.key1 === 'type2'){
                    $scope.data2 = [rd.data1, rd.data2, rd.data3, rd.data4, rd.data5, rd.data6, rd.data7, rd.data8, rd.data9, rd.data10, rd.data11, rd.data12];
                }
            }
            //chart 설정
            setChart();
        });
    };

    function setChart(){
        //2. tc-chartjs
        //현재년도의 월별 등록/폐기 건수
        $scope.assetRegData = {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            datasets: [
              {
                  label: '자산등록',
                  fillColor: 'rgba(220,220,220,0.2)',
                  strokeColor: 'rgba(220,220,220,1)',
                  pointColor: 'rgba(220,220,220,1)',
                  pointStrokeColor: '#fff',
                  pointHighlightFill: '#fff',
                  pointHighlightStroke: 'rgba(220,220,220,1)',
                  //data: [65, 59, 80, 81, 56, 55, 40, 84, 64, 120, 132, 87]
                  data: $scope.data1
              },
              {
                  label: '자산폐기',
                  fillColor: 'rgba(151,187,205,0.2)',
                  strokeColor: 'rgba(151,187,205,1)',
                  pointColor: 'rgba(151,187,205,1)',
                  pointStrokeColor: '#fff',
                  pointHighlightFill: '#fff',
                  pointHighlightStroke: 'rgba(151,187,205,1)',
                  //data: [3, 6, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0]
                  data: $scope.data2
              }
            ]
        };

        $scope.assetRegOptions = {

            maintainAspectRatio: false,

            // Sets the chart to be responsive
            responsive: true,

            ///Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: true,

            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',

            //Number - Width of the grid lines
            scaleGridLineWidth: 1,

            //Boolean - Whether the line is curved between points
            bezierCurve: false,

            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.4,

            //Boolean - Whether to show a dot for each point
            pointDot: true,

            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true,

            // Function - on animation progress
            onAnimationProgress: function () { },

            // Function - on animation complete
            onAnimationComplete: function () { },

            //String - A legend template
            legendTemplate: '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        };
    }
}]);

app.controller('DashBoardDailyCountCtrl', ["$scope", "asset_dashboard",  function ($scope, asset_dashboard) {

    $scope.dailyTxn = {};

    //당일 신규등록,자산폐기,고장신고,자산대여,자산반납,교환수리
    loadData();
    function loadData(){

        var params     = {};
        params.command = "sql_3";

        asset_dashboard.search(params)
        .then(function(result){

            //1건만 존재함
            for(var i=0; i<result.length; i++){

                var rd = result[i];

                var totalCnt = parseInt(rd.data1) + parseInt(rd.data2) + parseInt(rd.data3) + 
                               parseInt(rd.data4) + parseInt(rd.data5) + parseInt(rd.data6);

                $scope.dailyTxn = {
                    newCnt      : rd.data1,
                    disUseCnt   : rd.data2,
                    requestCnt  : rd.data3,
                    rentCnt     : rd.data4,
                    returnCnt   : rd.data5,
                    exRepairCnt : rd.data6,
                    total       : totalCnt,
                };
            }
        });
    };
}]);

app.controller('DashBoardAssetListCtrl', ["$scope", "asset_dashboard",  function ($scope, asset_dashboard) {

    var params        = {};
    $scope.assetData1 = [];
    $scope.assetData2 = [];

    //자산현황
    loadData();

    function loadData(){

        //설치장소별 자산 등록 건수(top 10)
        params.command = "sql_4";
        asset_dashboard.search(params)
        .then(function(result){
            $scope.assetData1 = result;
        });

        //자산분류별 자산 등록 건수(top 10)
        params.command = "sql_5";
        asset_dashboard.search(params)
        .then(function(result){
            $scope.assetData2 = result;
        });
    };
}]);

app.controller('DashBoardAssetCatCtrl', ["$scope", "asset_dashboard",  function ($scope, asset_dashboard) {

    var params             = {};
    var colorArray         = ["#F7464A", "#46BFBD", "#FDB45C", "LightSteelBlue", "YellowGreen"];
    var highlightColor     = ["#FF5A5E", "#5AD3D1", "#FFC870", "LightGrey",      "Turquoise"];         
    $scope.categoryBarData = [];
    $scope.categoryTotal   = 0;

    //자산현황(관리부서별)(Top 5)
    loadData();

    function loadData(){

        params.command = "sql_6";
        asset_dashboard.search(params)
        .then(function(result){

            for(var i=0; i < result.length; i++){

                var arrData          = result[i];
                $scope.categoryTotal = $scope.categoryTotal + parseInt(arrData.key3);

                $scope.categoryBarData.push({
                    value    : arrData.key3,
                    color    : colorArray[i],
                    highlight: highlightColor[i],
                    label    : arrData.key1
                });
            }

            //Bar chart 호출
            callChart();
        });
    };

    //donut 차트 실행
    function callChart(){

        // Chart.js Options
        $scope.categoryBarOptions = {

            // Sets the chart to be responsive
            responsive: false,

            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke: true,

            //String - The colour of each segment stroke
            segmentStrokeColor: '#fff',

            //Number - The width of each segment stroke
            segmentStrokeWidth: 2,

            //Number - The percentage of the chart that we cut out of the middle
            percentageInnerCutout: 50, // This is 0 for Pie charts

            //Number - Amount of animation steps
            animationSteps: 300,

            //String - Animation easing effect
            animationEasing: 'easeOutBounce',

            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate: true,

            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale: false,

            //String - A legend template
            legendTemplate: '<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li>' +
                            '<span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
        };
    }
}]);

app.controller('DashBoard7DaysCtrl', ["$scope", "asset_dashboard",  function ($scope, asset_dashboard) {

    $scope.sparkline_1 = [];
    $scope.sparkline_2 = [];
    $scope.line1_cnt   = 0;
    $scope.line2_cnt   = 0;
    $scope.dateBetween;

    //고장신고/교환수리 (D-6 ~ D) 추세
    loadData();
    function loadData(){

        var params     = {};
        params.command = "sql_7";

        asset_dashboard.search(params)
        .then(function(result){

            for(var i=0; i<result.length; i++){

                var rd = result[i];

                //고장신고
                if(rd.key1 === 'type1'){
                    $scope.sparkline_1 = [rd.data1, rd.data2, rd.data3, rd.data4, rd.data5, rd.data6, rd.data7];
                    $scope.line1_cnt   = parseInt(rd.data1) + parseInt(rd.data2) + parseInt(rd.data3) + 
                                         parseInt(rd.data4) + parseInt(rd.data5) + parseInt(rd.data6) + parseInt(rd.data7);
                    $scope.dateBetween = rd.key2;
                }
                //교환수리
                else if(rd.key1 === 'type2'){
                    $scope.sparkline_2 = [rd.data1, rd.data2, rd.data3, rd.data4, rd.data5, rd.data6, rd.data7];
                    $scope.line2_cnt   = parseInt(rd.data1) + parseInt(rd.data2) + parseInt(rd.data3) + 
                                         parseInt(rd.data4) + parseInt(rd.data5) + parseInt(rd.data6) + parseInt(rd.data7);
                }
            }
        });
    };
}]);

app.controller('DashBoardDailyTxn', ["$scope", "asset_dashboard",  function ($scope, asset_dashboard) {

    $scope.dailyTxn = [];

    //당일 자산관련 트랜잭션 정리
    loadData();
    function loadData(){

        var params     = {};
        params.command = "sql_8";

        asset_dashboard.search(params)
        .then(function(result){

            for(var i=0; i<result.length; i++){

                var rd = result[i];
                $scope.dailyTxn.push({
                    txnTime    : rd.key2,
                    txnTitle   : rd.key1,
                    txnContent : rd.key3,
                    txnInfo    : ''
                });

                //신규등록
                if(rd.key4     === 'type1'){
                    $scope.dailyTxn[i].txnInfo = "success";
                }
                //자산폐기
                else if(rd.key4 === 'type2'){
                    $scope.dailyTxn[i].txnInfo = "danger";
                }
                //고장신고
                else if(rd.key4 === 'type3'){
                    $scope.dailyTxn[i].txnInfo = "danger";
                }
                //자산대여
                else if(rd.key4 === 'type4'){
                    $scope.dailyTxn[i].txnInfo = "success";
                }
                //자산반납
                else if(rd.key4 === 'type5'){
                    $scope.dailyTxn[i].txnInfo = "info";
                }
                //교환수리
                else if(rd.key4 === 'type6'){
                    $scope.dailyTxn[i].txnInfo = "success";
                }
            }
        });
    };
}]);

