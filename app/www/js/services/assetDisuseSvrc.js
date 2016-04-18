/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 장비폐기
 * File          : assetDisuseSvrc.js
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

    app.factory('AssetDisuse', AssetDisuse);

    function AssetDisuse(Restangular) {

        var model = Restangular.all('asset_disuse');

        model.one = function(id) {
            return Restangular.one('asset_disuse', id);
        };

        return model;
    }

    app.service('asset_disuse', asset_disuse);

    /* @ngInject */
    function asset_disuse(AssetDisuse) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var asset_disuse = {};

            if(params) {
                params = angular.extend(asset_disuse, params);
            } else {
                params = asset_disuse;
            }

            return AssetDisuse.customGET('', params);
        }

        function show(id) {
            return AssetDisuse.one(id).get();
        }

        function insert(params) {
            return AssetDisuse.customPOST(params);
        }

        function update(id, params) {
            return AssetDisuse.one(id).customPUT(params);
        }

        function remove(id) {
            return AssetDisuse.one(id).customDELETE();
        }

    }

})();

