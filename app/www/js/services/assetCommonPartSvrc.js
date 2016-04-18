/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 부속품목
 * File          : assetCommonPartSvrc.js
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

    app.factory('AssetCommonPart', AssetCommonPart);

    function AssetCommonPart(Restangular) {

        var model = Restangular.all('asset_common_part');

        model.one = function(id) {
            return Restangular.one('asset_common_part', id);
        };

        return model;
    }

    app.service('asset_common_part', asset_common_part);

    /* @ngInject */
    function asset_common_part(AssetCommonPart) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var asset_common_part = {};

            if(params) {
                params = angular.extend(asset_common_part, params);
            } else {
                params = asset_common_part;
            }

            return AssetCommonPart.customGET('', params);
        }

        function show(id) {
            return AssetCommonPart.one(id).get();
        }

        function insert(params) {
            return AssetCommonPart.customPOST(params);
        }

        function update(id, params) {
            return AssetCommonPart.one(id).customPUT(params);
        }

        function remove(id) {
            return AssetCommonPart.one(id).customDELETE();
        }

    }

})();

