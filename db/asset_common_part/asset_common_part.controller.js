/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 부속품목
 * File          : asset_common_part.controller.js
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

var AssetCommonPart = require('./asset_common_part.service');
// Search Records
// GET     /url  --> All
// GET     /url?field1=value1&field2=value2... --> Query
exports.search = function(req, res) {

    var asset_common_part = new AssetCommonPart(req.query);

    asset_common_part.search(function (err, result) {
        if(err) { return handleError(res, err); }

        return res.status(200).json(result);
    });
};

// Get a record by object_id
// GET     /url/:id (= object_id)
exports.show = function(req, res) {

    var asset_common_part = new AssetCommonPart(req.params);

    asset_common_part.findById(function (err, entity) {
        if (err) { return handleError(res, err); }
        if(!entity) { return res.status(404).end(); }

        return res.status(200).json(entity);
    });
};

// Creating a new Record.
// POST    /url
exports.insert = function(req, res) {
    var asset_common_part = new AssetCommonPart(req.body);

    asset_common_part.insert(function(err, result) {
        if(err) { return handleError(res, err); }

        return res.status(201).json(result);
    });
};

// Updating the Record.
// PUT     /url/:id (= object_id)
exports.update = function(req, res) {

    var asset_common_part = new AssetCommonPart(req.params);

    asset_common_part.findById(function (err, entity) {

        if (err) { return handleError(res, err); }
        if(!entity) { return res.status(404).end(); }

        req.body.part_no              = entity.part_no             ;

        asset_common_part = new AssetCommonPart(req.body);
        asset_common_part.update(function(err, result) {

           if (err) { return handleError(res, err); }

           return res.status(200).json(result);
        });
    });
};

// Deleting the Record by object_id
// DELETE  /url/:id (= object_id)
exports.delete = function(req, res) {

    var asset_common_part = new AssetCommonPart(req.params);

    asset_common_part.findById(function (err, entity) {

        if (err) { return handleError(res, err); }
        if(!entity) { return res.status(404).end(); }

        asset_common_part = new AssetCommonPart(entity);
        asset_common_part.delete(function(err, result) {

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
    var asset_common_part = new AssetCommonPart(req.body);

    if(req.body.action === 'insert') {
        asset_common_part.insert(function(err, result) {
            if(err) { return handleError(res, err); }

            return res.status(201).json(result);
        });
    }
    else if(req.body.action === 'update') {
        asset_common_part.update(function(err, result) {
           if (err) { return handleError(res, err); }

           return res.status(200).json(result);
        });
    }
    else if(req.body.action === 'delete') {
        asset_common_part.delete(function(err, result) {
           if(err) { return handleError(res, err); }

            return res.status(200).json(result);
        });
    }
};

function handleError(res, err) {
    return res.status(500).send(err);
}


