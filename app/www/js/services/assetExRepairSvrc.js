/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 장비교환수리
 * File          : assetExRepairSvrc.js
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

    app.factory('AssetExRepair', AssetExRepair);

    function AssetExRepair(Restangular) {

        var model = Restangular.all('asset_ex_repair');

        model.one = function(id) {
            return Restangular.one('asset_ex_repair', id);
        };

        return model;
    }

    app.service('asset_ex_repair', asset_ex_repair);

    /* @ngInject */
    function asset_ex_repair(AssetExRepair) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var asset_ex_repair = {};

            if(params) {
                params = angular.extend(asset_ex_repair, params);
            } else {
                params = asset_ex_repair;
            }

            return AssetExRepair.customGET('', params);
        }

        function show(id) {
            return AssetExRepair.one(id).get();
        }

        function insert(params) {
            return AssetExRepair.customPOST(params);
        }

        function update(id, params) {
            return AssetExRepair.one(id).customPUT(params);
        }

        function remove(id) {
            return AssetExRepair.one(id).customDELETE();
        }

    }

})();

