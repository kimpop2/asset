/* *********************************************************************
 * Copyright (c) 2016, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : Dashboard
 * File          : asset_dashboard.route.js
 * Description   :
 *
 * Author        :
 * Creation Date :
 * Creation Date :
 * ********************************************************************/

'use strict';

var express = require('express');
var controller = require('./asset_dashboard.controller');

var router = express.Router();

router.get('/', controller.search);

module.exports = router;
