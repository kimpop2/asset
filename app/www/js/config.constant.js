'use strict';

/**
 * Config constant
 */
// from mobp
app.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized   : 'auth-not-authorized'
})
.constant('USER_ROLES', {
  user: 'user'
})
.constant('SERVER_PATH', {
  url: 'http://192.168.10.107:5000/api'
  //url: 'http://localhost:5000/api'
})
.constant('AUTH_PATH', {
  url: 'http://192.168.10.107:5000/api/auth'
  //url: 'http://localhost:5000/api/auth'
});
// end mobp

app.constant('APP_MEDIAQUERY', {
    'desktopXL': 1200,
    'desktop': 992,
    'tablet': 768,
    'mobile': 480
});
app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {
        //*** Javascript Plugins
        'modernizr': ['lib/components-modernizr/modernizr.js'],
        'moment': ['lib/moment/min/moment.min.js'],
        'spin': 'lib/spin.js/spin.js',

        //*** jQuery Plugins
        'perfect-scrollbar-plugin': ['lib/perfect-scrollbar/js/min/perfect-scrollbar.jquery.min.js', 'lib/perfect-scrollbar/css/perfect-scrollbar.min.css'],
        'ladda': ['lib/ladda/dist/ladda.min.js', 'lib/ladda/dist/ladda-themeless.min.css'],
        'sweet-alert': ['lib/sweetalert/lib/sweet-alert.min.js', 'lib/sweetalert/lib/sweet-alert.css'],
        'chartjs': 'lib/chartjs/Chart.min.js',
        'jquery-sparkline': 'lib/jquery.sparkline.build/dist/jquery.sparkline.min.js',
        'ckeditor-plugin': 'lib/ckeditor/ckeditor.js',
        'jquery-nestable-plugin': ['lib/jquery-nestable/jquery.nestable.js'],
        'touchspin-plugin': ['lib/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js', 'lib/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],

        //*** Controllers
        'dashboardCtrl': 'js/controllers/dashboardCtrl.js',
        'iconsCtrl': 'js/controllers/iconsCtrl.js',
        'vAccordionCtrl': 'js/controllers/vAccordionCtrl.js',
        'ckeditorCtrl': 'js/controllers/ckeditorCtrl.js',
        'laddaCtrl': 'js/controllers/laddaCtrl.js',
        'ngTableCtrl': 'js/controllers/ngTableCtrl.js',
        'cropCtrl': 'js/controllers/cropCtrl.js',
        'asideCtrl': 'js/controllers/asideCtrl.js',
        'toasterCtrl': 'js/controllers/toasterCtrl.js',
        'sweetAlertCtrl': 'js/controllers/sweetAlertCtrl.js',
        'mapsCtrl': 'js/controllers/mapsCtrl.js',
        'chartsCtrl': 'js/controllers/chartsCtrl.js',
        'calendarCtrl': 'js/controllers/calendarCtrl.js',
        'nestableCtrl': 'js/controllers/nestableCtrl.js',
        'validationCtrl': ['js/controllers/validationCtrl.js'],
        'userCtrl': ['js/controllers/userCtrl.js'],
        'selectCtrl': 'js/controllers/selectCtrl.js',
        'wizardCtrl': 'js/controllers/wizardCtrl.js',
        'uploadCtrl': 'js/controllers/uploadCtrl.js',
        'treeCtrl': 'js/controllers/treeCtrl.js',
        'inboxCtrl': 'js/controllers/inboxCtrl.js',
        'xeditableCtrl': 'js/controllers/xeditableCtrl.js',
        'chatCtrl': 'js/controllers/chatCtrl.js',
        'dynamicTableCtrl': 'js/controllers/dynamicTableCtrl.js',
        'NotificationIconsCtrl': 'js/controllers/notificationIconsCtrl.js',
        'LoginCtrl': 'js/controllers/loginCtrl.js',


/*        'assetDashboardCtrl' : 'js/controllers/assetDashboardCtrl.js',   //hgjang
        'assetListCtrl'      : 'js/controllers/assetListCtrl.js',        //hgjang
        'mobileAssetMoveCtrl': 'js/controllers/mobileAssetMoveCtrl.js', //hgjang
*/
        
        //*** Filters
        'htmlToPlaintext': 'js/filters/htmlToPlaintext.js'
    },
    //*** angularJS Modules
    modules: [{
        name: 'angularMoment',
        files: ['lib/angular-moment/angular-moment.min.js']
    }, {
        name: 'toaster',
        files: ['lib/AngularJS-Toaster/toaster.js', 'lib/AngularJS-Toaster/toaster.css']
    }, {
        name: 'angularBootstrapNavTree',
        files: ['lib/angular-bootstrap-nav-tree/dist/abn_tree_directive.js', 'lib/angular-bootstrap-nav-tree/dist/abn_tree.css']
    }, {
        name: 'angular-ladda',
        files: ['lib/angular-ladda/dist/angular-ladda.min.js']
    }, {
        name: 'ngTable',
        files: ['lib/ng-table/dist/ng-table.min.js', 'lib/ng-table/dist/ng-table.min.css']
    }, {
        name: 'ui.select',
        files: ['lib/angular-ui-select/dist/select.min.js', 'lib/angular-ui-select/dist/select.min.css', 'lib/select2/dist/css/select2.min.css', 'lib/select2-bootstrap-css/select2-bootstrap.min.css', 'lib/selectize/dist/css/selectize.bootstrap3.css']
    }, {
        name: 'ui.mask',
        files: ['lib/angular-ui-utils/mask.min.js']
    }, {
        name: 'ngImgCrop',
        files: ['lib/ngImgCrop/compile/minified/ng-img-crop.js', 'lib/ngImgCrop/compile/minified/ng-img-crop.css']
    }, {
        name: 'angularFileUpload',
        files: ['lib/angular-file-upload/angular-file-upload.min.js']
    }, {
        name: 'ngAside',
        files: ['lib/angular-aside/dist/js/angular-aside.min.js', 'lib/angular-aside/dist/css/angular-aside.min.css']
    }, {
        name: 'truncate',
        files: ['lib/angular-truncate/src/truncate.js']
    }, {
        name: 'oitozero.ngSweetAlert',
        files: ['lib/angular-sweetalert-promised/SweetAlert.min.js']
    }, {
        name: 'monospaced.elastic',
        files: ['lib/angular-elastic/elastic.js']
    }, {
        name: 'ngMap',
        files: ['lib/ngmap/build/scripts/ng-map.min.js']
    }, {
        name: 'tc.chartjs',
        files: ['lib/tc-angular-chartjs/dist/tc-angular-chartjs.min.js']
    }, {
        name: 'flow',
        files: ['lib/ng-flow/dist/ng-flow-standalone.min.js']
    }, {
        name: 'uiSwitch',
        files: ['lib/angular-ui-switch/angular-ui-switch.min.js', 'lib/angular-ui-switch/angular-ui-switch.min.css']
    }, {
        name: 'ckeditor',
        files: ['lib/angular-ckeditor/angular-ckeditor.min.js']
    }, {
        name: 'mwl.calendar',
        files: ['lib/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.js', 'lib/angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css', 'js/config/config-calendar.js']
    }, {
        name: 'ng-nestable',
        files: ['lib/ng-nestable/src/angular-nestable.js']
    }, {
        name: 'vAccordion',
        files: ['lib/v-accordion/dist/v-accordion.min.js', 'lib/v-accordion/dist/v-accordion.min.css']
    }, {
        name: 'xeditable',
        files: ['lib/angular-xeditable/dist/js/xeditable.min.js', 'lib/angular-xeditable/dist/css/xeditable.css', 'js/config/config-xeditable.js']
    }, {
        name: 'checklist-model',
        files: ['lib/checklist-model/checklist-model.js']
    }, {
        name: 'angular-notification-icons',
        files: ['lib/angular-notification-icons/dist/angular-notification-icons.min.js', 'lib/angular-notification-icons/dist/angular-notification-icons.min.css']
    }]
});
