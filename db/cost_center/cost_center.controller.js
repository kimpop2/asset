﻿/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 코스트센타
 * File          : cost_center.controller.js
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

var CostCenter = require('./cost_center.service');
// Search Records
// GET     /url  --> All
// GET     /url?field1=value1&field2=value2... --> Query
exports.search = function(req, res) {

    var cost_center = new CostCenter(req.query);

    cost_center.search(function (err, result) {
        if(err) { return handleError(res, err); }

        return res.status(200).json(result);
    });
};

// Get a record by object_id
// GET     /url/:id (= object_id)
exports.show = function(req, res) {

    var cost_center = new CostCenter(req.params);

    cost_center.findById(function (err, entity) {
        if (err) { return handleError(res, err); }
        if(!entity) { return res.status(404).end(); }

        return res.status(200).json(entity);
    });
};

// Creating a new Record.
// POST    /url
exports.insert = function(req, res) {
    var cost_center = new CostCenter(req.body);

    cost_center.insert(function(err, result) {
        if(err) { return handleError(res, err); }

        return res.status(201).json(result);
    });
};

// Updating the Record.
// PUT     /url/:id (= object_id)
exports.update = function(req, res) {

    var cost_center = new CostCenter(req.params);

    cost_center.findById(function (err, entity) {

        if (err) { return handleError(res, err); }
        if(!entity) { return res.status(404).end(); }

        req.body.cost_center_code     = entity.cost_center_code    ;

        cost_center = new CostCenter(req.body);
        cost_center.update(function(err, result) {

           if (err) { return handleError(res, err); }

           return res.status(200).json(result);
        });
    });
};

// Deleting the Record by object_id
// DELETE  /url/:id (= object_id)
exports.delete = function(req, res) {

    var cost_center = new CostCenter(req.params);

    cost_center.findById(function (err, entity) {

        if (err) { return handleError(res, err); }
        if(!entity) { return res.status(404).end(); }

        cost_center = new CostCenter(entity);
        cost_center.delete(function(err, result) {

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
    var cost_center = new CostCenter(req.body);

    if(req.body.action === 'insert') {
        cost_center.insert(function(err, result) {
            if(err) { return handleError(res, err); }

            return res.status(201).json(result);
        });
    }
    else if(req.body.action === 'update') {
        cost_center.update(function(err, result) {
           if (err) { return handleError(res, err); }

           return res.status(200).json(result);
        });
    }
    else if(req.body.action === 'delete') {
        cost_center.delete(function(err, result) {
           if(err) { return handleError(res, err); }

            return res.status(200).json(result);
        });
    }
};

function handleError(res, err) {
    return res.status(500).send(err);
}

