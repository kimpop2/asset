    1. index.html 에 서비스 컨트롤러 자바스크립트 정의

    <!-- Project System Controllers -->
    <script src="js/controllers/assetUserCtrl.js"           ></script>
    <script src="js/controllers/commonCodeCtrl.js"          ></script>
    <script src="js/controllers/languageCtrl.js"            ></script>
    <script src="js/controllers/assetCategoryCtrl.js"       ></script>
    <script src="js/controllers/costCenterCtrl.js"          ></script>
    <script src="js/controllers/installationAreaCtrl.js"    ></script>
    <script src="js/controllers/calibrationRangeCtrl.js"    ></script>
    <script src="js/controllers/assetCommonPartCtrl.js"     ></script>
    <script src="js/controllers/assetMasterCtrl.js"         ></script>
    <script src="js/controllers/assetPartCtrl.js"           ></script>
    <script src="js/controllers/assetRequestCtrl.js"        ></script>
    <script src="js/controllers/assetMoveCtrl.js"           ></script>
    <script src="js/controllers/assetDisuseCtrl.js"         ></script>
    <script src="js/controllers/assetCapaCtrl.js"           ></script>
    <script src="js/controllers/assetExRepairCtrl.js"       ></script>
    <script src="js/controllers/assetSurveyCtrl.js"         ></script>
    <script src="js/controllers/assetCalibrationCtrl.js"    ></script>
    <script src="js/controllers/attachmentFileCtrl.js"      ></script>

    <!-- Project Common Services -->
    <script src="js/services/ebizAlert.js"                ></script>
    <script src="js/services/ebizList.js"                 ></script>
    <!-- Project System Services -->
    <script src="js/services/asset_user.service.js"          ></script>
    <script src="js/services/common_code.service.js"         ></script>
    <script src="js/services/language.service.js"            ></script>
    <script src="js/services/asset_category.service.js"      ></script>
    <script src="js/services/cost_center.service.js"         ></script>
    <script src="js/services/installation_area.service.js"   ></script>
    <script src="js/services/calibration_range.service.js"   ></script>
    <script src="js/services/asset_common_part.service.js"   ></script>
    <script src="js/services/asset_master.service.js"        ></script>
    <script src="js/services/asset_part.service.js"          ></script>
    <script src="js/services/asset_request.service.js"       ></script>
    <script src="js/services/asset_move.service.js"          ></script>
    <script src="js/services/asset_disuse.service.js"        ></script>
    <script src="js/services/asset_capa.service.js"          ></script>
    <script src="js/services/asset_ex_repair.service.js"     ></script>
    <script src="js/services/asset_survey.service.js"        ></script>
    <script src="js/services/asset_calibration.service.js"   ></script>
    <script src="js/services/attachment_file.service.js"     ></script>

    2. config.route $stateProvider 정의

    // ****** Common *******
    .state('app.common', {
        url: '/common',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'common.app.TITLE',
        ncyBreadcrumb: {
            label: 'common.app.MENU'
        }
    })
    .state('app.common.asset_user', {
        url: '/asset_user',
        templateUrl: "views/asset_user.html",
        title: 'asset_user.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset_user.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.common_code', {
        url: '/common_code',
        templateUrl: "views/common_code.html",
        title: 'common_code.app.TITLE',
        ncyBreadcrumb: {
            label: 'common_code.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.language', {
        url: '/language',
        templateUrl: "views/language.html",
        title: 'language.app.TITLE',
        ncyBreadcrumb: {
            label: 'language.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.asset_category', {
        url: '/asset_category',
        templateUrl: "views/asset_category.html",
        title: 'asset_category.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset_category.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.cost_center', {
        url: '/cost_center',
        templateUrl: "views/cost_center.html",
        title: 'cost_center.app.TITLE',
        ncyBreadcrumb: {
            label: 'cost_center.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.installation_area', {
        url: '/installation_area',
        templateUrl: "views/installation_area.html",
        title: 'installation_area.app.TITLE',
        ncyBreadcrumb: {
            label: 'installation_area.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.calibration_range', {
        url: '/calibration_range',
        templateUrl: "views/calibration_range.html",
        title: 'calibration_range.app.TITLE',
        ncyBreadcrumb: {
            label: 'calibration_range.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.asset_common_part', {
        url: '/asset_common_part',
        templateUrl: "views/asset_common_part.html",
        title: 'asset_common_part.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset_common_part.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    // ****** Asset *******
    .state('app.asset', {
        url: '/asset',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'asset.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset.app.MENU'
        }
    })
    .state('app.asset.asset_master', {
        url: '/asset_master',
        templateUrl: "views/asset_master.html",
        title: 'asset_master.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset_master.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_part', {
        url: '/asset_part',
        templateUrl: "views/asset_part.html",
        title: 'asset_part.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset_part.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_request', {
        url: '/asset_request',
        templateUrl: "views/asset_request.html",
        title: 'asset_request.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset_request.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_move', {
        url: '/asset_move',
        templateUrl: "views/asset_move.html",
        title: 'asset_move.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset_move.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_disuse', {
        url: '/asset_disuse',
        templateUrl: "views/asset_disuse.html",
        title: 'asset_disuse.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset_disuse.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_capa', {
        url: '/asset_capa',
        templateUrl: "views/asset_capa.html",
        title: 'asset_capa.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset_capa.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_ex_repair', {
        url: '/asset_ex_repair',
        templateUrl: "views/asset_ex_repair.html",
        title: 'asset_ex_repair.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset_ex_repair.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_survey', {
        url: '/asset_survey',
        templateUrl: "views/asset_survey.html",
        title: 'asset_survey.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset_survey.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_calibration', {
        url: '/asset_calibration',
        templateUrl: "views/asset_calibration.html",
        title: 'asset_calibration.app.TITLE',
        ncyBreadcrumb: {
            label: 'asset_calibration.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.attachment_file', {
        url: '/attachment_file',
        templateUrl: "views/attachment_file.html",
        title: 'attachment_file.app.TITLE',
        ncyBreadcrumb: {
            label: 'attachment_file.app.MENU'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    // ****** Mobile *******
    .state('app.mobile', {
        url: '/mobile',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'mobile.app.TITLE',
        ncyBreadcrumb: {
            label: 'mobile.app.MENU'
        }
    })

  3. nav.html 메뉴정의

  <!-- 기초정보 -->
  <li ng-class="{'active open':$state.includes('app.common')}">
    <a href="javascript:void(0)">
      <div class="item-content">
        <div class="item-media">
          <i class="ti-package"></i>
        </div>
        <div class="item-inner">
          <span class="title" translate="common.app.MENU"> Common Information </span><i class="icon-arrow"></i>
        </div>
      </div>
    </a>
    <ul class="sub-menu">
      <li ui-sref-active="active">
        <a ui-sref="app.common.asset_user">
          <span class="title" translate="asset_user.app.MENU"> Asset User </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.common.common_code">
          <span class="title" translate="common_code.app.MENU"> Common Code </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.common.language">
          <span class="title" translate="language.app.MENU"> Language </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.common.asset_category">
          <span class="title" translate="asset_category.app.MENU"> Asset Category </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.common.cost_center">
          <span class="title" translate="cost_center.app.MENU"> Cost Center </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.common.installation_area">
          <span class="title" translate="installation_area.app.MENU"> Installation Area </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.common.calibration_range">
          <span class="title" translate="calibration_range.app.MENU"> Calibration Range </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.common.asset_common_part">
          <span class="title" translate="asset_common_part.app.MENU"> Asset Common Part </span>
        </a>
      </li>
    </ul>
  </li>
  <!-- 자산관리 -->
  <li ng-class="{'active open':$state.includes('app.asset')}">
    <a href="javascript:void(0)">
      <div class="item-content">
        <div class="item-media">
          <i class="ti-package"></i>
        </div>
        <div class="item-inner">
          <span class="title" translate="asset.app.MENU"> R&amp;D Asset </span><i class="icon-arrow"></i>
        </div>
      </div>
    </a>
    <ul class="sub-menu">
      <li ui-sref-active="active">
        <a ui-sref="app.asset.asset_master">
          <span class="title" translate="asset_master.app.MENU"> Asset Master </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.asset.asset_part">
          <span class="title" translate="asset_part.app.MENU"> Asset Part </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.asset.asset_request">
          <span class="title" translate="asset_request.app.MENU"> Asset Request </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.asset.asset_move">
          <span class="title" translate="asset_move.app.MENU"> Asset Move </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.asset.asset_disuse">
          <span class="title" translate="asset_disuse.app.MENU"> Asset Disuse </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.asset.asset_capa">
          <span class="title" translate="asset_capa.app.MENU"> Asset Capa </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.asset.asset_ex_repair">
          <span class="title" translate="asset_ex_repair.app.MENU"> Asset Ex Repair </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.asset.asset_survey">
          <span class="title" translate="asset_survey.app.MENU"> Asset Survey </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.asset.asset_calibration">
          <span class="title" translate="asset_calibration.app.MENU"> Asset Calibration </span>
        </a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.asset.attachment_file">
          <span class="title" translate="attachment_file.app.MENU"> Attachment File </span>
        </a>
      </li>
    </ul>
  </li>
  <!-- 모바일 -->
  <li ui-sref-active="active">
    <a ng-click="javascript:void(0)">
      <div class="item-content">
        <div class="item-media">
          <i class="ti-settings"></i>
        </div>
        <div class="item-inner">
          <span class="title" translate="mobile.app.MENU"> Mobile Asset </span>
        </div>
      </div>
    </a>
    <ul class="sub-menu">
    </ul>
  </li>


    4. server/routes.js 에 라우터 정의

    // Insert routes below
    app.use('/api/asset_user/'          , require('./db/asset_user/asset_user.route'                    ));
    app.use('/api/common_code/'         , require('./db/common_code/common_code.route'                  ));
    app.use('/api/language/'            , require('./db/language/language.route'                        ));
    app.use('/api/asset_category/'      , require('./db/asset_category/asset_category.route'            ));
    app.use('/api/cost_center/'         , require('./db/cost_center/cost_center.route'                  ));
    app.use('/api/installation_area/'   , require('./db/installation_area/installation_area.route'      ));
    app.use('/api/calibration_range/'   , require('./db/calibration_range/calibration_range.route'      ));
    app.use('/api/asset_common_part/'   , require('./db/asset_common_part/asset_common_part.route'      ));
    app.use('/api/asset_master/'        , require('./db/asset_master/asset_master.route'                ));
    app.use('/api/asset_part/'          , require('./db/asset_part/asset_part.route'                    ));
    app.use('/api/asset_request/'       , require('./db/asset_request/asset_request.route'              ));
    app.use('/api/asset_move/'          , require('./db/asset_move/asset_move.route'                    ));
    app.use('/api/asset_disuse/'        , require('./db/asset_disuse/asset_disuse.route'                ));
    app.use('/api/asset_capa/'          , require('./db/asset_capa/asset_capa.route'                    ));
    app.use('/api/asset_ex_repair/'     , require('./db/asset_ex_repair/asset_ex_repair.route'          ));
    app.use('/api/asset_survey/'        , require('./db/asset_survey/asset_survey.route'                ));
    app.use('/api/asset_calibration/'   , require('./db/asset_calibration/asset_calibration.route'      ));
    app.use('/api/attachment_file/'     , require('./db/attachment_file/attachment_file.route'          ));

