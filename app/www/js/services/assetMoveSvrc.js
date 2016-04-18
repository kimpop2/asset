/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 이동대여반납
 * File          : assetMoveSvrc.js
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

    app.factory('AssetMove', AssetMove);

    function AssetMove(Restangular) {

        var model = Restangular.all('asset_move');

        model.one = function(id) {
            return Restangular.one('asset_move', id);
        };

        return model;
    }

    app.service('asset_move', asset_move);

    /* @ngInject */
    function asset_move(AssetMove) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var asset_move = {};

            if(params) {
                params = angular.extend(asset_move, params);
            } else {
                params = asset_move;
            }

            return AssetMove.customGET('', params);
        }

        function show(id) {
            return AssetMove.one(id).get();
        }

        function insert(params) {
            return AssetMove.customPOST(params);
        }

        function update(id, params) {
            return AssetMove.one(id).customPUT(params);
        }

        function remove(id) {
            return AssetMove.one(id).customDELETE();
        }

    }

})();

