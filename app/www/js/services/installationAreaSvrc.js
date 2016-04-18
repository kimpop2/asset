/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 설치장소
 * File          : installationAreaSvrc.js
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

    app.factory('InstallationArea', InstallationArea);

    function InstallationArea(Restangular) {

        var model = Restangular.all('installation_area');

        model.one = function(id) {
            return Restangular.one('installation_area', id);
        };

        return model;
    }

    app.service('installation_area', installation_area);

    /* @ngInject */
    function installation_area(InstallationArea) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var installation_area = {};

            if(params) {
                params = angular.extend(installation_area, params);
            } else {
                params = installation_area;
            }

            return InstallationArea.customGET('', params);
        }

        function show(id) {
            return InstallationArea.one(id).get();
        }

        function insert(params) {
            return InstallationArea.customPOST(params);
        }

        function update(id, params) {
            return InstallationArea.one(id).customPUT(params);
        }

        function remove(id) {
            return InstallationArea.one(id).customDELETE();
        }

    }

})();

