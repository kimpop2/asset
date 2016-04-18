/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 장비실사
 * File          : assetSurveySvrc.js
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

    app.factory('AssetSurvey', AssetSurvey);

    function AssetSurvey(Restangular) {

        var model = Restangular.all('asset_survey');

        model.one = function(id) {
            return Restangular.one('asset_survey', id);
        };

        return model;
    }

    app.service('asset_survey', asset_survey);

    /* @ngInject */
    function asset_survey(AssetSurvey) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var asset_survey = {};

            if(params) {
                params = angular.extend(asset_survey, params);
            } else {
                params = asset_survey;
            }

            return AssetSurvey.customGET('', params);
        }

        function show(id) {
            return AssetSurvey.one(id).get();
        }

        function insert(params) {
            return AssetSurvey.customPOST(params);
        }

        function update(id, params) {
            return AssetSurvey.one(id).customPUT(params);
        }

        function remove(id) {
            return AssetSurvey.one(id).customDELETE();
        }

    }

})();

