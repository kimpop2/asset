/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 첨부파일
 * File          : attachmentFileSvrc.js
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

    app.factory('AttachmentFile', AttachmentFile);

    function AttachmentFile(Restangular) {

        var model = Restangular.all('attachment_file');

        model.one = function(id) {
            return Restangular.one('attachment_file', id);
        };

        return model;
    }

    app.service('attachment_file', attachment_file);

    /* @ngInject */
    function attachment_file(AttachmentFile) {

        this.search = search;
        this.show   = show;
        this.insert = insert;
        this.update = update;
        this.remove = remove;

        function search(params) {
            var attachment_file = {};

            if(params) {
                params = angular.extend(attachment_file, params);
            } else {
                params = attachment_file;
            }

            return AttachmentFile.customGET('', params);
        }

        function show(id) {
            return AttachmentFile.one(id).get();
        }

        function insert(params) {
            return AttachmentFile.customPOST(params);
        }

        function update(id, params) {
            return AttachmentFile.one(id).customPUT(params);
        }

        function remove(id) {
            return AttachmentFile.one(id).customDELETE();
        }

    }

})();

