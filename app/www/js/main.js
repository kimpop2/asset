var app = angular.module('mbizApp', ['mbiz', 'rnd_asset.ui-grid']);
app.run(['$rootScope', '$state', '$stateParams',
function ($rootScope, $state, $stateParams) {

    // Attach Fastclick for eliminating the 300ms delay between a physical tap and the firing of a click event on mobile browsers
    FastClick.attach(document.body);

    // Set some reference to access them from any scope
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    // GLOBAL APP SCOPE
    // set below basic information
    $rootScope.app = {
        name: 'R&D Asset Management', // name of your project
        author: 'eBiz-Pro', // author's name or company name
        description: 'Angular Bootstrap Admin Template', // brief description
        version: '2.0', // current version
        year: ((new Date()).getFullYear()), // automatic current year (for copyright information)
        isMobile: (function () {// true if the browser is a mobile device
            var check = false;
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                check = true;
            };
            return check;
        })(),
        layout: {
            isNavbarFixed: true, //true if you want to initialize the template with fixed header
            isSidebarFixed: true, // true if you want to initialize the template with fixed sidebar
            isSidebarClosed: false, // true if you want to initialize the template with closed sidebar
            isFooterFixed: false, // true if you want to initialize the template with fixed footer
            theme: 'theme-2', // indicate the theme chosen for your project
            logo: 'images/logo.png', // relative path of the project logo
        }
    };
    $rootScope.user = {
        name   : '관리자',
        job    :  'R&D',
        picture: 'app/img/user/02.jpg'
    };
}]);
// translate config
app.config(['$translateProvider',
function ($translateProvider) {

    // prefix and suffix information  is required to specify a pattern
    // You can simply use the static-files loader with this pattern:
    $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
    });

    // Since you've now registered more then one translation table, angular-translate has to know which one to use.
    // This is where preferredLanguage(langKey) comes in.
    $translateProvider.preferredLanguage('ko');

    // Store the language in the local storage
    $translateProvider.useLocalStorage();
    
    // Enable sanitize
    //$translateProvider.useSanitizeValueStrategy('sanitize');

}]);
// Angular-Loading-Bar
// configuration
app.config(['cfpLoadingBarProvider',
function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = true;

}]);

// Restangular
// configuration
app.config(['RestangularProvider', 'SERVER_PATH',
function(RestangularProvider, SERVER_PATH) {

	RestangularProvider.setBaseUrl(SERVER_PATH.url);
}]);



app.service('SweetAlertService', function(SweetAlert){
    
    //메시지 타이틀, 내용, alert 유형(success, warning, error), 2초후 alert창 close됨
    this.alert = function (alert, callback) {
        alert.type = alert.type || 'success';
        alert.timer = 2000;
        alert.confirmButtonColor = alert.confirmButtonColor || "#007AFF";

        SweetAlert.swal(alert);

        if(callback){
            callback();
        }
    };

    this.confirm = function (alert, cbConfirm, confirmAlert, cbCancel, cancelAlert) {
        
        alert.type = alert.type || 'warning';
        alert.showCancelButton  =   true;
        alert.confirmButtonColor= alert.confirmButtonColor || "#DD6B55";
        alert.closeOnConfirm    =  confirmAlert ? false : true;
        alert.closeOnCancel     =  cancelAlert ? false : true;

        SweetAlert.swal(alert, function (isConfirm) {
            // OK
            if (isConfirm) {
                // callback
                if(cbConfirm){  
                    cbConfirm();  
                }
                // if confirm attributes exist then show sweetalert message 
                if(confirmAlert){
                    confirmAlert.type = confirm.type || 'success';
                    confirmAlert.confirmButtonColor =  "#007AFF";
                    
                    SweetAlert.swal(confirmAlert);
                }
            } 
            // Cancel
            else {
                // callback
                if(cbCancel){
                    cbCancel();
                }
                // if confirm attributes exist then show sweetalert message 
                if(cancelAlert){
                    cancelAlert.type = cancelAlert.type || 'error';
                    cancelAlert.confirmButtonColor =  "#007AFF";

                    SweetAlert.swal(cancelAlert);
                }
            }
        });
    };

});