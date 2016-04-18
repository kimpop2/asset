/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 검교정
 * File          : assetCalibrationSvrc.js
 * Description   :
 *                 Using Restangular REST Api Call
 *                 search GET     /url
 *                 show   GET     /url/:id
 *                 insert POST    /url
 *                 update PUT     /url/:id
 *                 delete DELETE  /url/:id
 * Author        :
 * Creation Date :
 * Creation Date :
 * ******************************************************************** */
(function() {
    'use strict';

    app.factory('AssetCalibration', AssetCalibration);

    function AssetCalibration(Restangular) {

        var model = Restangular.all('asset_calibration');

        model.one = function(id) {
            return Restangular.one('asset_calibration', id);
        };

        return model;
    }

    app.service('asset_calibration', asset_calibration);

    /* @ngInject */
    function asset_calibration(AssetCalibration) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var asset_calibration = {};

            if(params) {
                params = angular.extend(asset_calibration, params);
            } else {
                params = asset_calibration;
            }

            return AssetCalibration.customGET('', params);
        }

        function show(id) {
            return AssetCalibration.one(id).get();
        }

        function insert(params) {
            return AssetCalibration.customPOST(params);
        }

        function update(id, params) {
            return AssetCalibration.one(id).customPUT(params);
        }

        function remove(id) {
            return AssetCalibration.one(id).customDELETE();
        }

    }

})();

