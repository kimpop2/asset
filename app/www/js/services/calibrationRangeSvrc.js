/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 검교정측정범위
 * File          : calibrationRangeSvrc.js
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

    app.factory('CalibrationRange', CalibrationRange);

    function CalibrationRange(Restangular) {

        var model = Restangular.all('calibration_range');

        model.one = function(id) {
            return Restangular.one('calibration_range', id);
        };

        return model;
    }

    app.service('calibration_range', calibration_range);

    /* @ngInject */
    function calibration_range(CalibrationRange) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var calibration_range = {};

            if(params) {
                params = angular.extend(calibration_range, params);
            } else {
                params = calibration_range;
            }

            return CalibrationRange.customGET('', params);
        }

        function show(id) {
            return CalibrationRange.one(id).get();
        }

        function insert(params) {
            return CalibrationRange.customPOST(params);
        }

        function update(id, params) {
            return CalibrationRange.one(id).customPUT(params);
        }

        function remove(id) {
            return CalibrationRange.one(id).customDELETE();
        }

    }

})();

