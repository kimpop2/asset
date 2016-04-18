/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 자산분류
 * File          : assetCategorySvrc.js
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

    app.factory('AssetCategory', AssetCategory);

    function AssetCategory(Restangular) {

        var model = Restangular.all('asset_category');

        model.one = function(id) {
            return Restangular.one('asset_category', id);
        };

        return model;
    }

    app.service('asset_category', asset_category);

    /* @ngInject */
    function asset_category(AssetCategory) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var asset_category = {};

            if(params) {
                params = angular.extend(asset_category, params);
            } else {
                params = asset_category;
            }

            return AssetCategory.customGET('', params);
        }

        function show(id) {
            return AssetCategory.one(id).get();
        }

        function insert(params) {
            return AssetCategory.customPOST(params);
        }

        function update(id, params) {
            return AssetCategory.one(id).customPUT(params);
        }

        function remove(id) {
            return AssetCategory.one(id).customDELETE();
        }

    }

})();

