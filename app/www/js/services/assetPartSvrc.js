/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 장비부속품
 * File          : assetPartSvrc.js
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

    app.factory('AssetPart', AssetPart);

    function AssetPart(Restangular) {

        var model = Restangular.all('asset_part');

        model.one = function(id) {
            return Restangular.one('asset_part', id);
        };

        return model;
    }

    app.service('asset_part', asset_part);

    /* @ngInject */
    function asset_part(AssetPart) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var asset_part = {};

            if(params) {
                params = angular.extend(asset_part, params);
            } else {
                params = asset_part;
            }

            return AssetPart.customGET('', params);
        }

        function show(id) {
            return AssetPart.one(id).get();
        }

        function insert(params) {
            return AssetPart.customPOST(params);
        }

        function update(id, params) {
            return AssetPart.one(id).customPUT(params);
        }

        function remove(id) {
            return AssetPart.one(id).customDELETE();
        }

    }

})();

