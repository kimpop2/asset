/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : Dashboard
 * File          : asset_dashboard.controller.js
 * Description   :
 *                 Using Rails-like standard naming convention.
 *                 GET     /url              ->  search
 *                 GET     /url/:id          ->  show
 * Author        :
 * Creation Date :
 * Creation Date :
 * ******************************************************************** */

'use strict';

var DashboardView = require('./asset_dashboard.service');
// Search Records
// GET     /url  --> All
// GET     /url?filed1=value1&field2=value2... --> Query
exports.search = function(req, res) {

    var asset_dashboard = new DashboardView(req.query);

    asset_dashboard.search(function (err, result) {
        if(err) { return handleError(res, err); }

        return res.status(200).json(result);
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
