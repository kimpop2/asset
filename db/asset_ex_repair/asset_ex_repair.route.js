﻿/* *********************************************************************
 * Copyright (c) 2016, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 장비교환수리
 * File          : asset_ex_repair.route.js
 * Description   :
 *
 * Author        :
 * Creation Date :
 * Creation Date :
 * ********************************************************************/

'use strict';

var express = require('express');
var controller = require('./asset_ex_repair.controller');

var router = express.Router();

router.get('/'       , controller.search);
router.get('/:id'    , controller.show  );
router.post('/'      , controller.insert);
router.put('/:id'    , controller.update);
router.delete('/:id' , controller.delete);

module.exports = router;


