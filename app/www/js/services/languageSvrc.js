/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 언어
 * File          : languageSvrc.js
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

    app.factory('Language', Language);

    function Language(Restangular) {

        var model = Restangular.all('language');

        model.one = function(id) {
            return Restangular.one('language', id);
        };

        return model;
    }

    app.service('language', language);

    /* @ngInject */
    function language(Language) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var language = {};

            if(params) {
                params = angular.extend(language, params);
            } else {
                params = language;
            }

            return Language.customGET('', params);
        }

        function show(id) {
            return Language.one(id).get();
        }

        function insert(params) {
            return Language.customPOST(params);
        }

        function update(id, params) {
            return Language.one(id).customPUT(params);
        }

        function remove(id) {
            return Language.one(id).customDELETE();
        }

    }

})();

