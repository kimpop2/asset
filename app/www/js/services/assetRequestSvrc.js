/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 자산처리요청
 * File          : assetRequestSvrc.js
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

    app.factory('AssetRequest', AssetRequest);

    function AssetRequest(Restangular) {

        var model = Restangular.all('asset_request');

        model.one = function(id) {
            return Restangular.one('asset_request', id);
        };

        return model;
    }

    app.service('asset_request', asset_request);

    /* @ngInject */
    function asset_request(AssetRequest) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var asset_request = {};

            if(params) {
                params = angular.extend(asset_request, params);
            } else {
                params = asset_request;
            }

            return AssetRequest.customGET('', params);
        }

        function show(id) {
            return AssetRequest.one(id).get();
        }

        function insert(params) {
            return AssetRequest.customPOST(params);
        }

        function update(id, params) {
            return AssetRequest.one(id).customPUT(params);
        }

        function remove(id) {
            return AssetRequest.one(id).customDELETE();
        }

    }

})();

