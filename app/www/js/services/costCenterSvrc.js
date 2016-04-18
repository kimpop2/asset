/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 코스트센타
 * File          : costCenterSvrc.js
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

    app.factory('CostCenter', CostCenter);

    function CostCenter(Restangular) {

        var model = Restangular.all('cost_center');

        model.one = function(id) {
            return Restangular.one('cost_center', id);
        };

        return model;
    }

    app.service('cost_center', cost_center);

    /* @ngInject */
    function cost_center(CostCenter) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var cost_center = {};

            if(params) {
                params = angular.extend(cost_center, params);
            } else {
                params = cost_center;
            }

            return CostCenter.customGET('', params);
        }

        function show(id) {
            return CostCenter.one(id).get();
        }

        function insert(params) {
            return CostCenter.customPOST(params);
        }

        function update(id, params) {
            return CostCenter.one(id).customPUT(params);
        }

        function remove(id) {
            return CostCenter.one(id).customDELETE();
        }

    }

})();

