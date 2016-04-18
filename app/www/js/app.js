/** 
  * declare 'clip-two' module with dependencies
*/
'use strict';
angular.module("mbiz", [
	'ngAnimate',
	'ngCookies',
	'ngStorage',
	'ngSanitize',
	'ngTouch',
	'ui.router',
	'ui.bootstrap',
	'oc.lazyLoad',
	'cfp.loadingBar',
	'ncy-angular-breadcrumb',
	'duScroll',
	'pascalprecht.translate',
	'oitozero.ngSweetAlert',
	'restangular',
	'mobp.auth' ,
	'rnd_asset.ui-grid',
	'ngCordova',
	'ngCordova.plugins.nfc',
	'angular-carousel', //hgjang
	'ui-listView'
]);

angular.module('rnd_asset.ui-grid', [
'ui.grid',
//'ui.grid.cellNav',
//'ui.grid.edit',
//'ui.grid.resizeColumns',
'ui.grid.pinning', 
'ui.grid.selection',
'ui.grid.moveColumns',
'ui.grid.exporter',
//'ui.grid.importer',
//'ui.grid.grouping',
'ui.grid.pagination',
'ui.bootstrap'
]);