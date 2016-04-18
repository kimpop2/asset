/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 자산마스타
 * File          : assetMasterSvrc.js
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

    app.factory('AssetMaster', AssetMaster);

    function AssetMaster(Restangular) {

        var model = Restangular.all('asset_master');

        model.one = function(id) {
            return Restangular.one('asset_master', id);
        };

        return model;
    }

    app.service('asset_master', asset_master);

    /* @ngInject */
    function asset_master(AssetMaster) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var asset_master = {};

            if(params) {
                params = angular.extend(asset_master, params);
            } else {
                params = asset_master;
            }

            return AssetMaster.customGET('', params);
        }

        function show(id) {
            return AssetMaster.one(id).get();
        }

        function insert(params) {
            return AssetMaster.customPOST(params);
        }

        function update(id, params) {
            return AssetMaster.one(id).customPUT(params);
        }

        function remove(id) {
            return AssetMaster.one(id).customDELETE();
        }

    }

})();

