/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 사용자
 * File          : assetUserSvrc.js
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

    app.factory('AssetUser', AssetUser);

    function AssetUser(Restangular) {

        var model = Restangular.all('asset_user');

        model.one = function(id) {
            return Restangular.one('asset_user', id);
        };

        return model;
    }

    app.service('asset_user', asset_user);

    /* @ngInject */
    function asset_user(AssetUser) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var asset_user = {};

            if(params) {
                params = angular.extend(asset_user, params);
            } else {
                params = asset_user;
            }

            return AssetUser.customGET('', params);
        }

        function show(id) {
            return AssetUser.one(id).get();
        }

        function insert(params) {
            return AssetUser.customPOST(params);
        }

        function update(id, params) {
            return AssetUser.one(id).customPUT(params);
        }

        function remove(id) {
            return AssetUser.one(id).customDELETE();
        }

    }

})();

