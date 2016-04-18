/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 공통코드
 * File          : commonCodeSvrc.js
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

    app.factory('CommonCode', CommonCode);

    function CommonCode(Restangular) {

        var model = Restangular.all('common_code');

        model.one = function(id) {
            return Restangular.one('common_code', id);
        };

        return model;
    }

    app.service('common_code', common_code);

    /* @ngInject */
    function common_code(CommonCode) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var common_code = {};

            if(params) {
                params = angular.extend(common_code, params);
            } else {
                params = common_code;
            }

            return CommonCode.customGET('', params);
        }

        function show(id) {
            return CommonCode.one(id).get();
        }

        function insert(params) {
            return CommonCode.customPOST(params);
        }

        function update(id, params) {
            return CommonCode.one(id).customPUT(params);
        }

        function remove(id) {
            return CommonCode.one(id).customDELETE();
        }

    }

})();

