/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : Dashboard
 * File          : asset_dashboard.service.js
 * Description   :
 *                 Using Restangular REST Api Call
 *                 search GET     /url
 * Author        :
 * Creation Date :
 * Creation Date :
 * ******************************************************************** */
(function() {
    'use strict';

    app.factory('AssetDashboard', AssetDashboard);

    function AssetDashboard(Restangular) {

        var model = Restangular.all('asset_dashboard');

        model.one = function(id) {
            return Restangular.one('asset_dashboard', id);
        };

        return model;
    }

    app.service('asset_dashboard', asset_dashboard);

    /* @ngInject */
    function asset_dashboard(AssetDashboard) {

        this.search = search;

        function search(params) {
            var asset_dashboard = {};

            if(params) {
                params = angular.extend(asset_dashboard, params);
            } else {
                params = asset_dashboard;
            }

            return AssetDashboard.customGET('', params);
        }
    }

})();
