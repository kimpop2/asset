'use strict';

/**
 * Config for the router
 */
app.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider', 'JS_REQUIRES',
function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider, jsRequires) {

    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;
 
    // LAZY MODULES

    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: jsRequires.modules
    });

    // APPLICATION ROUTES
    // -----------------------------------
    // For any unmatched url, redirect to /app/dashboard
    //$urlRouterProvider.otherwise("/app/dashboard");

    $urlRouterProvider.otherwise("/app/asset_dashboard");
    //
    // Set up the states
    $stateProvider
    // Login routes
    .state('login', {
        url: '/login',
        template: '<div ui-view class="fade-in-right-big smooth"></div>',
        abstract: true
    }).state('login.signin', {
        url: '/signin',
        params: {
            user: null
        },
        templateUrl: "views/login_login.html",
        resolve: loadSequence('LoginCtrl'),
        controller: 'LoginCtrl'
    }).state('login.forgot', {
        url: '/forgot',
        templateUrl: "views/login_forgot.html"
    }).state('login.registration', {
        url: '/registration',
        templateUrl: "views/login_registration.html"
    }).state('login.lockscreen', {
        url: '/lock',
        templateUrl: "views/login_lock_screen.html"
    }).state('app', {
        url: "/app",
        templateUrl: "views/app.html",
        resolve: loadSequence('modernizr', 'moment', 'angularMoment', 'uiSwitch', 'perfect-scrollbar-plugin', 'toaster', 'ngAside', 'vAccordion', 'sweet-alert', 'chartjs', 'tc.chartjs', 'oitozero.ngSweetAlert', 'chatCtrl', 'truncate', 'htmlToPlaintext', 'angular-notification-icons'),
        abstract: true
    })
    
    // ****** Common *******
    .state('app.common', {
        url: '/common',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'common.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'common.app.MENU' | translate }}"
        }
    })
    .state('app.common.asset_user', {
        url: '/asset_user',
        templateUrl: "views/asset_user.html",
        title: 'asset_user.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_user.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.common_code', {
        url: '/common_code',
        templateUrl: "views/common_code.html",
        title: 'common_code.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'common_code.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.language', {
        url: '/language',
        templateUrl: "views/language.html",
        title: 'language.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'language.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.asset_category', {
        url: '/asset_category',
        templateUrl: "views/asset_category.html",
        title: 'asset_category.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_category.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.cost_center', {
        url: '/cost_center',
        templateUrl: "views/cost_center.html",
        title: 'cost_center.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'cost_center.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.installation_area', {
        url: '/installation_area',
        templateUrl: "views/installation_area.html",
        title: 'installation_area.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'installation_area.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.calibration_range', {
        url: '/calibration_range',
        templateUrl: "views/calibration_range.html",
        title: 'calibration_range.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'calibration_range.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.common.asset_common_part', {
        url: '/asset_common_part',
        templateUrl: "views/asset_common_part.html",
        title: 'asset_common_part.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_common_part.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    // ****** Asset *******
    .state('app.asset', {
        url: '/asset',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'asset.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset.app.MENU' | translate }}"
        }
    })
    .state('app.asset.asset_master', {
        url: '/asset_master',
        templateUrl: "views/asset_master.html",
        title: 'asset_master.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_master.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_part', {
        url: '/asset_part',
        templateUrl: "views/asset_part.html",
        title: 'asset_part.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_part.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_request', {
        url: '/asset_request',
        templateUrl: "views/asset_request.html",
        title: 'asset_request.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_request.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_move', {
        url: '/asset_move',
        templateUrl: "views/asset_move.html",
        title: 'asset_move.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_move.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_disuse', {
        url: '/asset_disuse',
        templateUrl: "views/asset_disuse.html",
        title: 'asset_disuse.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_disuse.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_capa', {
        url: '/asset_capa',
        templateUrl: "views/asset_capa.html",
        title: 'asset_capa.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_capa.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_ex_repair', {
        url: '/asset_ex_repair',
        templateUrl: "views/asset_ex_repair.html",
        title: 'asset_ex_repair.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_ex_repair.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_survey', {
        url: '/asset_survey',
        templateUrl: "views/asset_survey.html",
        title: 'asset_survey.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_survey.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.asset_calibration', {
        url: '/asset_calibration',
        templateUrl: "views/asset_calibration.html",
        title: 'asset_calibration.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_calibration.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    .state('app.asset.attachment_file', {
        url: '/attachment_file',
        templateUrl: "views/attachment_file.html",
        title: 'attachment_file.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'attachment_file.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda')
    })
    // ****** Mobile *******
    .state('app.mobile_asset', {
        url: '/mobile_asset',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'mobile_asset.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'mobile_asset.app.MENU' | translate }}"
        }
    })
    .state('app.mobile_asset.mobile_asset_move', {
        url: '/mobile_asset_move',
        templateUrl: "views/mobile_asset_move.html",
        title: 'mobile_asset_move.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'mobile_asset_move.app.MENU' | translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda', 'truncate', 'htmlToPlaintext', 'ui.select')
    })
    .state('app.mobile_asset.mobile_asset_request', {
        url: '/mobile_asset_request',
        templateUrl: "views/mobile_asset_request.html",
        title: 'mobile_asset_request.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'mobile_asset_request.app.MENU' | translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda', 'truncate', 'htmlToPlaintext', 'ui.select')
    })
    .state('app.mobile_asset.mobile_nfc_item', {
        url: '/mobile_nfc_item',
        templateUrl: "views/mobile_nfc_item.html",
        title: 'mobile_nfc_item.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'mobile_asset_request.app.MENU' | translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda', 'truncate', 'htmlToPlaintext', 'ui.select')
    })
    .state('app.mobile_asset.mobile_qr_asset', {
        url: '/mobile_qr_asset',
        templateUrl: "views/mobile_qr_asset.html",
        title: 'mobile_qr_asset.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'mobile_qr_asset.app.MENU' | translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda', 'truncate', 'htmlToPlaintext', 'ui.select')
    })
    .state('app.mobile_asset.mobile_qr_logistics', {
        url: '/mobile_qr_logistics',
        templateUrl: "views/mobile_qr_logistics.html",
        title: 'mobile_qr_logistics.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'mobile_qr_logistics.app.MENU' | translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda', 'truncate', 'htmlToPlaintext', 'ui.select')
    })
    .state('app.mobile_asset.asset_list', {
        url: '/asset_list',
        templateUrl: "views/asset_list.html",
        title: 'asset_list.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'asset_list.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda', 'truncate', 'htmlToPlaintext')
    })
    .state('app.mobile_asset.asset_list.asset_detail', {
        url: '/asset_detail/:detailID?assetCode',
        templateUrl: "views/asset_detail.html",
        controller: 'AssetDetailCrtl',
        resolve: loadSequence('ngTable')
    })

    //hgjang start
    .state('app.mobile_asset.mbl_listview', {
        url: '/mbl_listview',
        templateUrl: "views/mbl_listview.html",
        title: 'mbl_listview.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'mbl_listview.app.MENU' |translate }}"
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda', 'truncate', 'htmlToPlaintext')
    })
    .state('app.mobile_asset.mbl_listitem', {
        url: '/mbl_listitem',
        templateUrl: "views/mbl_listitem.html",
        controller: 'MblListItemCtrl',
        resolve: loadSequence('ngTable')
    })
    .state('app.mobile_asset.mbl_txnview', {
        url: '/mbl_txnview',
        templateUrl: "views/mbl_txnview.html",
        title: 'mbl_txnview.app.TITLE',
        ncyBreadcrumb: {
            label: "{{ 'mbl_txnview.app.MENU' |translate }}"
        },
        resolve: loadSequence('ngTable', 'ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'spin', 'ladda', 'angular-ladda', 'truncate', 'htmlToPlaintext')
    })


    .state('app.mobile_asset.ui_list_view', {
        url: '/ui_list_view',
        templateUrl: "views/rnd_asset/ui-listViewExample.html",
        title: 'ui_list_view.app.TITLE',
        ncyBreadcrumb: {
            label: "ui-listView Example"
        }
    })


    //hgjang end
    
    //------------------------
    //hgjang start
    //------------------------
    /*
    .state('app.asset_dashboard', {
        url: "/asset_dashboard",
        templateUrl: "views/rnd_asset/asset_dashboard.html",
        resolve: loadSequence('jquery-sparkline', 'assetDashboardCtrl'),
        title: 'Dashboard',
        ncyBreadcrumb: {
            label: 'Dashboard'
        }
    })
    .state('app.mobile_asset', {
        url: '/mobile_asset',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Mobile Asset',
        ncyBreadcrumb: {
            label: 'Mobile Asset'
        }
    })
    .state('app.mobile_asset.asset_list', {
        url: '/asset_list',
        templateUrl: "views/rnd_asset/asset_list.html",
        resolve: loadSequence('truncate', 'htmlToPlaintext', 'assetListCtrl')

    })
    .state('app.mobile_asset.asset_list.asset_detail', {
        url: '/asset_detail/:detailID',
        templateUrl: "views/rnd_asset/asset_detail.html",
        controller: 'AssetDetailCrtl',
        resolve: loadSequence('ngTable')

    })
    .state('app.mobile_asset.mobile_asset_move', {
        url: '/mobile_asset_move',
        templateUrl: "views/rnd_asset/mobile_asset_move.html",
        ncyBreadcrumb: {
            label: 'Asset Move'
        },
        resolve: loadSequence('truncate', 'htmlToPlaintext', 'ui.select', 'mobileAssetMoveCtrl')
    })*/
    //------------------------
    //hgjang end
    //------------------------

    // ****** Dashboard *******
    .state('app.asset_dashboard', {
        url: "/asset_dashboard",
        templateUrl: "views/asset_dashboard.html",
        resolve: loadSequence('jquery-sparkline'), // 'assetDashboardCtrl'),
        title: 'Dashboard',
        ncyBreadcrumb: {
            label: 'Dashboard'
        }
    })

    .state('app.ui', {
        url: '/ui',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'UI Elements',
        ncyBreadcrumb: {
            label: 'UI Elements'
        }
    }).state('app.ui.elements', {
        url: '/elements',
        templateUrl: "views/ui_elements.html",
        title: 'Elements',
        icon: 'ti-layout-media-left-alt',
        ncyBreadcrumb: {
            label: 'Elements'
        }
    }).state('app.ui.buttons', {
        url: '/buttons',
        templateUrl: "views/ui_buttons.html",
        title: 'Buttons',
        resolve: loadSequence('spin', 'ladda', 'angular-ladda', 'laddaCtrl'),
        ncyBreadcrumb: {
            label: 'Buttons'
        }
    }).state('app.ui.links', {
        url: '/links',
        templateUrl: "views/ui_links.html",
        title: 'Link Effects',
        ncyBreadcrumb: {
            label: 'Link Effects'
        }
    }).state('app.ui.icons', {
        url: '/icons',
        templateUrl: "views/ui_icons.html",
        title: 'Font Awesome Icons',
        ncyBreadcrumb: {
            label: 'Font Awesome Icons'
        },
        resolve: loadSequence('iconsCtrl')
    }).state('app.ui.lineicons', {
        url: '/line-icons',
        templateUrl: "views/ui_line_icons.html",
        title: 'Linear Icons',
        ncyBreadcrumb: {
            label: 'Linear Icons'
        },
        resolve: loadSequence('iconsCtrl')
    }).state('app.ui.modals', {
        url: '/modals',
        templateUrl: "views/ui_modals.html",
        title: 'Modals',
        ncyBreadcrumb: {
            label: 'Modals'
        },
        resolve: loadSequence('asideCtrl')
    }).state('app.ui.toggle', {
        url: '/toggle',
        templateUrl: "views/ui_toggle.html",
        title: 'Toggle',
        ncyBreadcrumb: {
            label: 'Toggle'
        }
    }).state('app.ui.tabs_accordions', {
        url: '/accordions',
        templateUrl: "views/ui_tabs_accordions.html",
        title: "Tabs & Accordions",
        ncyBreadcrumb: {
            label: 'Tabs & Accordions'
        },
        resolve: loadSequence('vAccordionCtrl')
    }).state('app.ui.panels', {
        url: '/panels',
        templateUrl: "views/ui_panels.html",
        title: 'Panels',
        ncyBreadcrumb: {
            label: 'Panels'
        }
    }).state('app.ui.notifications', {
        url: '/notifications',
        templateUrl: "views/ui_notifications.html",
        title: 'Notifications',
        ncyBreadcrumb: {
            label: 'Notifications'
        },
        resolve: loadSequence('toasterCtrl', 'sweetAlertCtrl', 'NotificationIconsCtrl')
    }).state('app.ui.treeview', {
        url: '/treeview',
        templateUrl: "views/ui_tree.html",
        title: 'TreeView',
        ncyBreadcrumb: {
            label: 'Treeview'
        },
        resolve: loadSequence('angularBootstrapNavTree', 'treeCtrl')
    }).state('app.ui.media', {
        url: '/media',
        templateUrl: "views/ui_media.html",
        title: 'Media',
        ncyBreadcrumb: {
            label: 'Media'
        }
    }).state('app.ui.nestable', {
        url: '/nestable2',
        templateUrl: "views/ui_nestable.html",
        title: 'Nestable List',
        ncyBreadcrumb: {
            label: 'Nestable List'
        },
        resolve: loadSequence('jquery-nestable-plugin', 'ng-nestable', 'nestableCtrl')
    }).state('app.ui.typography', {
        url: '/typography',
        templateUrl: "views/ui_typography.html",
        title: 'Typography',
        ncyBreadcrumb: {
            label: 'Typography'
        }
    }).state('app.table', {
        url: '/table',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Tables',
        ncyBreadcrumb: {
            label: 'Tables'
        }
    }).state('app.table.basic', {
        url: '/basic',
        templateUrl: "views/table_basic.html",
        title: 'Basic Tables',
        ncyBreadcrumb: {
            label: 'Basic'
        }
    }).state('app.table.responsive', {
        url: '/responsive',
        templateUrl: "views/table_responsive.html",
        title: 'Responsive Tables',
        ncyBreadcrumb: {
            label: 'Responsive'
        }
    }).state('app.table.dynamic', {
        url: '/dynamic',
        templateUrl: "views/table_dynamic.html",
        title: 'Dynamic Tables',
        ncyBreadcrumb: {
            label: 'Dynamic'
        },
        resolve: loadSequence('dynamicTableCtrl')
    }).state('app.table.data', {
        url: '/data',
        templateUrl: "views/table_data.html",
        title: 'ngTable',
        ncyBreadcrumb: {
            label: 'ngTable'
        },
        resolve: loadSequence('ngTable', 'ngTableCtrl')
    }).state('app.table.export', {
        url: '/export',
        templateUrl: "views/table_export.html",
        title: 'Table'
    }).state('app.form', {
        url: '/form',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Forms',
        ncyBreadcrumb: {
            label: 'Forms'
        }
    }).state('app.form.elements', {
        url: '/elements',
        templateUrl: "views/form_elements.html",
        title: 'Forms Elements',
        ncyBreadcrumb: {
            label: 'Elements'
        },
        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'selectCtrl')
    }).state('app.form.xeditable', {
        url: '/xeditable',
        templateUrl: "views/form_xeditable.html",
        title: 'Angular X-Editable',
        ncyBreadcrumb: {
            label: 'X-Editable'
        },
        resolve: loadSequence('xeditable', 'checklist-model', 'xeditableCtrl')
    }).state('app.form.texteditor', {
        url: '/editor',
        templateUrl: "views/form_text_editor.html",
        title: 'Text Editor',
        ncyBreadcrumb: {
            label: 'Text Editor'
        },
        resolve: loadSequence('ckeditor-plugin', 'ckeditor', 'ckeditorCtrl')
    }).state('app.form.wizard', {
        url: '/wizard',
        templateUrl: "views/form_wizard.html",
        title: 'Form Wizard',
        ncyBreadcrumb: {
            label: 'Wizard'
        },
        resolve: loadSequence('wizardCtrl')
    }).state('app.form.validation', {
        url: '/validation',
        templateUrl: "views/form_validation.html",
        title: 'Form Validation',
        ncyBreadcrumb: {
            label: 'Validation'
        },
        resolve: loadSequence('validationCtrl')
    }).state('app.form.cropping', {
        url: '/image-cropping',
        templateUrl: "views/form_image_cropping.html",
        title: 'Image Cropping',
        ncyBreadcrumb: {
            label: 'Image Cropping'
        },
        resolve: loadSequence('ngImgCrop', 'cropCtrl')
    }).state('app.form.upload', {
        url: '/file-upload',
        templateUrl: "views/form_file_upload.html",
        title: 'Multiple File Upload',
        ncyBreadcrumb: {
            label: 'File Upload'
        },
        resolve: loadSequence('angularFileUpload', 'uploadCtrl')
    }).state('app.pages', {
        url: '/pages',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Pages',
        ncyBreadcrumb: {
            label: 'Pages'
        }
    }).state('app.pages.user', {
        url: '/user',
        templateUrl: "views/pages_user_profile.html",
        title: 'User Profile',
        ncyBreadcrumb: {
            label: 'User Profile'
        },
        resolve: loadSequence('flow', 'userCtrl')
    }).state('app.pages.invoice', {
        url: '/invoice',
        templateUrl: "views/pages_invoice.html",
        title: 'Invoice',
        ncyBreadcrumb: {
            label: 'Invoice'
        }
    }).state('app.pages.timeline', {
        url: '/timeline',
        templateUrl: "views/pages_timeline.html",
        title: 'Timeline',
        ncyBreadcrumb: {
            label: 'Timeline'
        },
        resolve: loadSequence('ngMap')
    }).state('app.pages.calendar', {
        url: '/calendar',
        templateUrl: "views/pages_calendar.html",
        title: 'Calendar',
        ncyBreadcrumb: {
            label: 'Calendar'
        },
        resolve: loadSequence('moment', 'mwl.calendar', 'monospaced.elastic', 'calendarCtrl')
    })
    .state('app.pages.messages', {
        url: '/messages',
        templateUrl: "views/pages_messages.html",
        resolve: loadSequence('truncate', 'htmlToPlaintext', 'inboxCtrl')
    })
    .state('app.pages.messages.inbox', {
        url: '/inbox/:inboxID',
        templateUrl: "views/pages_inbox.html",
        controller: 'ViewMessageCrtl'
    }).state('app.pages.blank', {
        url: '/blank',
        templateUrl: "views/pages_blank_page.html",
        ncyBreadcrumb: {
            label: 'Starter Page'
        }
    }).state('app.utilities', {
        url: '/utilities',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Utilities',
        ncyBreadcrumb: {
            label: 'Utilities'
        }
    }).state('app.utilities.search', {
        url: '/search',
        templateUrl: "views/utility_search_result.html",
        title: 'Search Results',
        ncyBreadcrumb: {
            label: 'Search Results'
        }
    }).state('app.utilities.pricing', {
        url: '/pricing',
        templateUrl: "views/utility_pricing_table.html",
        title: 'Pricing Table',
        ncyBreadcrumb: {
            label: 'Pricing Table'
        }
    }).state('app.maps', {
        url: "/maps",
        templateUrl: "views/maps.html",
        resolve: loadSequence('ngMap', 'mapsCtrl'),
        title: "Maps",
        ncyBreadcrumb: {
            label: 'Maps'
        }
    }).state('app.charts', {
        url: "/charts",
        templateUrl: "views/charts.html",
        resolve: loadSequence('chartjs', 'tc.chartjs', 'chartsCtrl'),
        title: "Charts",
        ncyBreadcrumb: {
            label: 'Charts'
        }
    }).state('app.documentation', {
        url: "/documentation",
        templateUrl: "views/documentation.html",
        title: "Documentation",
        ncyBreadcrumb: {
            label: 'Documentation'
        }
    }).state('error', {
        url: '/error',
        template: '<div ui-view class="fade-in-up"></div>'
    }).state('error.404', {
        url: '/404',
        templateUrl: "views/utility_404.html",
    }).state('error.500', {
        url: '/500',
        templateUrl: "views/utility_500.html",
    });


    // Generates a resolve object previously configured in constant.JS_REQUIRES (config.constant.js)
    function loadSequence() {
        var _args = arguments;
        return {
            deps: ['$ocLazyLoad', '$q',
			function ($ocLL, $q) {
			    var promise = $q.when(1);
			    for (var i = 0, len = _args.length; i < len; i++) {
			        promise = promiseThen(_args[i]);
			    }
			    return promise;

			    function promiseThen(_arg) {
			        if (typeof _arg == 'function')
			            return promise.then(_arg);
			        else
			            return promise.then(function () {
			                var nowLoad = requiredData(_arg);
			                if (!nowLoad)
			                    return $.error('Route resolve: Bad resource name [' + _arg + ']');
			                return $ocLL.load(nowLoad);
			            });
			    }

			    function requiredData(name) {
			        if (jsRequires.modules)
			            for (var m in jsRequires.modules)
			                if (jsRequires.modules[m].name && jsRequires.modules[m].name === name)
			                    return jsRequires.modules[m];
			        return jsRequires.scripts && jsRequires.scripts[name];
			    }
			}]
        };
    }
}]);