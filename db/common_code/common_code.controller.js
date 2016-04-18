/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 공통코드
 * File          : common_code.controller.js
 * Description   :
 *                 Using Rails-like standard naming convention.
 *                 GET     /url              ->  search
 *                 GET     /url/:id          ->  show
 *                 POST    /url              ->  insert
 *                 PUT     /url/:id          ->  update
 *                 DELETE  /url/:id          ->  delete
 * Author        :
 * Creation Date :
 * Creation Date :
 * ******************************************************************** */

'use strict';

var CommonCode = require('./common_code.service');
// Search Records
// GET     /url  --> All
// GET     /url?field1=value1&field2=value2... --> Query
exports.search = function(req, res) {

    var common_code = new CommonCode(req.query);

    common_code.search(function (err, result) {
        if(err) { return handleError(res, err); }

        return res.status(200).json(result);
    });
};

// Get a record by object_id
// GET     /url/:id (= object_id)
exports.show = function(req, res) {

    var common_code = new CommonCode(req.params);

    common_code.findById(function (err, entity) {
        if (err) { return handleError(res, err); }
        if(!entity) { return res.status(404).end(); }

        return res.status(200).json(entity);
    });
};

// Creating a new Record.
// POST    /url
exports.insert = function(req, res) {
    var common_code = new CommonCode(req.body);

    common_code.insert(function(err, result) {
        if(err) { return handleError(res, err); }

        return res.status(201).json(result);
    });
};

// Updating the Record.
// PUT     /url/:id (= object_id)
exports.update = function(req, res) {

    var common_code = new CommonCode(req.params);

    common_code.findById(function (err, entity) {

        if (err) { return handleError(res, err); }
        if(!entity) { return res.status(404).end(); }

        req.body.code_type            = entity.code_type           ;
        req.body.lang                 = entity.lang                ;
        req.body.code                 = entity.code                ;

        common_code = new CommonCode(req.body);
        common_code.update(function(err, result) {

           if (err) { return handleError(res, err); }

           return res.status(200).json(result);
        });
    });
};

// Deleting the Record by object_id
// DELETE  /url/:id (= object_id)
exports.delete = function(req, res) {

    var common_code = new CommonCode(req.params);

    common_code.findById(function (err, entity) {

        if (err) { return handleError(res, err); }
        if(!entity) { return res.status(404).end(); }

        common_code = new CommonCode(entity);
        common_code.delete(function(err, result) {

           if (err) { return handleError(res, err); }

           result.outBinds.object_id = entity.object_id;

           return res.status(200).json(result);
        });
    });
};

// If you use this method, needs req.body.action field!!
// Change router.post('/', controller.create);
//    --> router.post('/', controller.procedure);
exports.procedure = function(req, res) {
    var common_code = new CommonCode(req.body);

    if(req.body.action === 'insert') {
        common_code.insert(function(err, result) {
            if(err) { return handleError(res, err); }

            return res.status(201).json(result);
        });
    }
    else if(req.body.action === 'update') {
        common_code.update(function(err, result) {
           if (err) { return handleError(res, err); }

           return res.status(200).json(result);
        });
    }
    else if(req.body.action === 'delete') {
        common_code.delete(function(err, result) {
           if(err) { return handleError(res, err); }

            return res.status(200).json(result);
        });
    }
};

function handleError(res, err) {
    return res.status(500).send(err);
}


