/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : /routes.js 
 * Description   :
 *                 
 * 
 * Author        :
 * Creation Date :
 * ******************************************************************** */

'use strict';

var errors = require('./components/errors');
var auth   = require('./auth/auth');

module.exports = function(app) {
  
    app.use('/api/auth', auth.getRouter());

    // Insert routes below
    app.use('/api/asset_user/'          , require('./db/asset_user/asset_user.route'                    ));
    app.use('/api/common_code/'         , require('./db/common_code/common_code.route'                  ));
    app.use('/api/language/'            , require('./db/language/language.route'                        ));
    app.use('/api/asset_category/'      , require('./db/asset_category/asset_category.route'            ));
    app.use('/api/cost_center/'         , require('./db/cost_center/cost_center.route'                  ));
    app.use('/api/installation_area/'   , require('./db/installation_area/installation_area.route'      ));
    app.use('/api/calibration_range/'   , require('./db/calibration_range/calibration_range.route'      ));
    app.use('/api/asset_common_part/'   , require('./db/asset_common_part/asset_common_part.route'      ));
    app.use('/api/asset_master/'        , require('./db/asset_master/asset_master.route'                ));
    app.use('/api/asset_part/'          , require('./db/asset_part/asset_part.route'                    ));
    app.use('/api/asset_request/'       , require('./db/asset_request/asset_request.route'              ));
    app.use('/api/asset_move/'          , require('./db/asset_move/asset_move.route'                    ));
    app.use('/api/asset_disuse/'        , require('./db/asset_disuse/asset_disuse.route'                ));
    app.use('/api/asset_capa/'          , require('./db/asset_capa/asset_capa.route'                    ));
    app.use('/api/asset_ex_repair/'     , require('./db/asset_ex_repair/asset_ex_repair.route'          ));
    app.use('/api/asset_survey/'        , require('./db/asset_survey/asset_survey.route'                ));
    app.use('/api/asset_calibration/'   , require('./db/asset_calibration/asset_calibration.route'      ));
    app.use('/api/attachment_file/'     , require('./db/attachment_file/attachment_file.route'          ));
    app.use('/api/asset_dashboard/'      , require('./db/asset_dashboard/asset_dashboard.route'            ));
    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]);

    // All other routes should redirect to the index.html
    app.route('/*').get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
