﻿/* *********************************************************************
 * Copyright (c) 2016, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 부속품목
 * File          : asset_common_part.route.js
 * Description   :
 *
 * Author        :
 * Creation Date :
 * Creation Date :
 * ********************************************************************/

'use strict';

var express = require('express');
var controller = require('./asset_common_part.controller');

var router = express.Router();

router.get('/'       , controller.search);
router.get('/:id'    , controller.show  );
router.post('/'      , controller.insert);
router.put('/:id'    , controller.update);
router.delete('/:id' , controller.delete);

module.exports = router;


