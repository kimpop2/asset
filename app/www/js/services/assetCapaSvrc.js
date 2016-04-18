/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 장비능력및주요부치수
 * File          : assetCapaSvrc.js
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

    app.factory('AssetCapa', AssetCapa);

    function AssetCapa(Restangular) {

        var model = Restangular.all('asset_capa');

        model.one = function(id) {
            return Restangular.one('asset_capa', id);
        };

        return model;
    }

    app.service('asset_capa', asset_capa);

    /* @ngInject */
    function asset_capa(AssetCapa) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var asset_capa = {};

            if(params) {
                params = angular.extend(asset_capa, params);
            } else {
                params = asset_capa;
            }

            return AssetCapa.customGET('', params);
        }

        function show(id) {
            return AssetCapa.one(id).get();
        }

        function insert(params) {
            return AssetCapa.customPOST(params);
        }

        function update(id, params) {
            return AssetCapa.one(id).customPUT(params);
        }

        function remove(id) {
            return AssetCapa.one(id).customDELETE();
        }

    }

})();

