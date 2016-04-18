/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 자산마스타
 * File          : asset_master.service.js
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

var database = require('../oracledb');

var select ='SELECT ' +
            '    am.asset_code           AS "asset_code"                             ' +
            '   ,am.asset_name           AS "asset_name"                             ' +
            '   ,am.asset_name_local     AS "asset_name_local"                       ' +
            '   ,am.asset_cat_code       AS "asset_cat_code"                         ' +
            '   ,am.cost_center_code     AS "cost_center_code"                       ' +
            '   ,am.main_mgr_no          AS "main_mgr_no"                            ' +
            '   ,am.sub_mgr_no           AS "sub_mgr_no"                             ' +
            '   ,am.asset_model_name     AS "asset_model_name"                       ' +
            '   ,am.manufacturer_name    AS "manufacturer_name"                      ' +
            '   ,am.purchaser_name       AS "purchaser_name"                         ' +
            '   ,am.acquisition_date     AS "acquisition_date"                       ' +
            '   ,am.depreciation_a       AS "depreciation_a"                         ' +
            '   ,am.depreciation_b       AS "depreciation_b"                         ' +
            '   ,am.salvage_amount       AS "salvage_amount"                         ' +
            '   ,am.manufacture_no       AS "manufacture_no"                         ' +
            '   ,am.manufacture_date     AS "manufacture_date"                       ' +
            '   ,am.external_apperance   AS "external_apperance"                     ' +
            '   ,am.gross_weight         AS "gross_weight"                           ' +
            '   ,am.inspection_flag      AS "inspection_flag"                        ' +
            '   ,am.inspection_period    AS "inspection_period"                      ' +
            '   ,am.inspection_unit      AS "inspection_unit"                        ' +
            '   ,am.acquisition_amount   AS "acquisition_amount"                     ' +
            '   ,am.install_area_code    AS "install_area_code"                      ' +
            '   ,am.file_key             AS "file_key"                               ' +
            '   ,am.final_move_seq       AS "final_move_seq"                         ' +
            '   ,am.final_disuse_seq     AS "final_disuse_seq"                       ' +
            '   ,am.status               AS "status"                                 ' +
            '   ,am.remarks              AS "remarks"                                ' +
            '   ,am.created_by           AS "created_by"                             ' +
            '   ,to_char(am.creation_date,   \'yyyy-mm-dd\')  AS "creation_date"     ' +
            '   ,am.last_updated_by      AS "last_updated_by"                        ' +
            '   ,to_char(am.last_update_date, \'yyyy-mm-dd\') AS "last_update_date"  ' +
            '   ,am.object_id            AS "object_id"                              ' +
            '   ,(SELECT asset_cat_name     FROM asset_category t    WHERE t.asset_cat_code    = am.asset_cat_code)    AS "asset_cat_name"       ' +
            '   ,(SELECT install_area_name  FROM installation_area t WHERE t.install_area_code = am.install_area_code) AS "install_area_name"    ' +
            '   ,(SELECT cost_center_name   FROM cost_center t       WHERE t.cost_center_code  = am.cost_center_code)  AS "cost_center_name"     ' +
            'FROM                                                                    ' +
            '    asset_master am                                                     ';

var query ='SELECT ' +
            '    asset_code           AS "asset_code"          ' +
            '   ,asset_name           AS "asset_name"          ' +
            '   ,asset_name_local     AS "asset_name_local"    ' +
            '   ,asset_cat_code       AS "asset_cat_code"      ' +
            '   ,cost_center_code     AS "cost_center_code"    ' +
            '   ,main_mgr_no          AS "main_mgr_no"         ' +
            '   ,sub_mgr_no           AS "sub_mgr_no"          ' +
            '   ,asset_model_name     AS "asset_model_name"    ' +
            '   ,manufacturer_name    AS "manufacturer_name"   ' +
            '   ,purchaser_name       AS "purchaser_name"      ' +
            '   ,acquisition_date     AS "acquisition_date"    ' +
            '   ,depreciation_a       AS "depreciation_a"      ' +
            '   ,depreciation_b       AS "depreciation_b"      ' +
            '   ,salvage_amount       AS "salvage_amount"      ' +
            '   ,manufacture_no       AS "manufacture_no"      ' +
            '   ,manufacture_date     AS "manufacture_date"    ' +
            '   ,external_apperance   AS "external_apperance"  ' +
            '   ,gross_weight         AS "gross_weight"        ' +
            '   ,inspection_flag      AS "inspection_flag"     ' +
            '   ,inspection_period    AS "inspection_period"   ' +
            '   ,inspection_unit      AS "inspection_unit"     ' +
            '   ,acquisition_amount   AS "acquisition_amount"  ' +
            '   ,install_area_code    AS "install_area_code"   ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,final_move_seq       AS "final_move_seq"      ' +
            '   ,final_disuse_seq     AS "final_disuse_seq"    ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_master ' ;

function buildConditions(search) {
    var conditions = [];
    var values = [];

    // NUMBER convert like this --> values.push(parseInt(search.age));
    if (typeof search.asset_code !== 'undefined') {
        conditions.push("asset_code = :asset_code");
        values.push(search.asset_code);
    }
    if (typeof search.asset_name !== 'undefined') {
        conditions.push("asset_name LIKE :asset_name");
        values.push("%" + search.asset_name + "%");
    }
    if (typeof search.asset_name_local !== 'undefined') {
        conditions.push("asset_name_local LIKE :asset_name_local");
        values.push("%" + search.asset_name_local + "%");
    }
    if (typeof search.asset_cat_code !== 'undefined') {
        conditions.push("asset_cat_code = :asset_cat_code");
        values.push(search.asset_cat_code);
    }
    if (typeof search.cost_center_code !== 'undefined') {
        conditions.push("cost_center_code = :cost_center_code");
        values.push(search.cost_center_code);
    }
    if (typeof search.main_mgr_no !== 'undefined') {
        conditions.push("main_mgr_no = :main_mgr_no");
        values.push(search.main_mgr_no);
    }
    if (typeof search.sub_mgr_no !== 'undefined') {
        conditions.push("sub_mgr_no = :sub_mgr_no");
        values.push(search.sub_mgr_no);
    }
    if (typeof search.asset_model_name !== 'undefined') {
        conditions.push("asset_model_name LIKE :asset_model_name");
        values.push("%" + search.asset_model_name + "%");
    }
    if (typeof search.manufacturer_name !== 'undefined') {
        conditions.push("manufacturer_name LIKE :manufacturer_name");
        values.push("%" + search.manufacturer_name + "%");
    }
    if (typeof search.purchaser_name !== 'undefined') {
        conditions.push("purchaser_name LIKE :purchaser_name");
        values.push("%" + search.purchaser_name + "%");
    }
    if (typeof search.acquisition_date !== 'undefined') {
        conditions.push("acquisition_date = :acquisition_date");
        values.push(search.acquisition_date);
    }
    if (typeof search.manufacture_no !== 'undefined') {
        conditions.push("manufacture_no = :manufacture_no");
        values.push(search.manufacture_no);
    }
    if (typeof search.manufacture_date !== 'undefined') {
        conditions.push("manufacture_date = :manufacture_date");
        values.push(search.manufacture_date);
    }
    if (typeof search.external_apperance !== 'undefined') {
        conditions.push("external_apperance = :external_apperance");
        values.push(search.external_apperance);
    }
    if (typeof search.inspection_flag !== 'undefined') {
        conditions.push("inspection_flag = :inspection_flag");
        values.push(search.inspection_flag);
    }
    if (typeof search.inspection_unit !== 'undefined') {
        conditions.push("inspection_unit = :inspection_unit");
        values.push(search.inspection_unit);
    }
    if (typeof search.install_area_code !== 'undefined') {
        conditions.push("install_area_code = :install_area_code");
        values.push(search.install_area_code);
    }
    if (typeof search.file_key !== 'undefined') {
        conditions.push("file_key = :file_key");
        values.push(search.file_key);
    }
    if (typeof search.final_move_seq !== 'undefined') {
        conditions.push("final_move_seq = :final_move_seq");
        values.push(search.final_move_seq);
    }
    if (typeof search.final_disuse_seq !== 'undefined') {
        conditions.push("final_disuse_seq = :final_disuse_seq");
        values.push(search.final_disuse_seq);
    }
    if (typeof search.status !== 'undefined') {
        conditions.push("status = :status");
        values.push(search.status);
    }

    return {
        where: conditions.length ? conditions.join(' AND ') : '1 = 1',
        values: values
    };
}



AssetMaster.method('search', function(cb){

    var search = this.param;
    var conditions = buildConditions(search);

    database.simpleExecute(
        select + ' WHERE ' + conditions.where,
        conditions.values,
        { outFormat: database.OBJECT }
    )
    .then(function(results) {
        cb(null, results.rows);
    })
    .catch(function(err) {
        console.log(err);
        cb(err, null);
     });
});


AssetMaster.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
                '    asset_code              = :asset_code           '
        ,
        {
             asset_code           : search.asset_code
        },
        { outFormat: database.OBJECT }
    )
    .then(function(results) {
        cb(null, results.rows);
    })
    .catch(function(err) {
        cb(err, null);
     });
});



AssetMaster.method('findById', function(cb){
    var search = this.param;

    database.simpleExecute(
        query +
        ' WHERE ' +
        '    object_id    = :object_id',
        {
            object_id : search.id
        },
        { outFormat: database.OBJECT }
    )
    .then(function(results) {
        if(results.rows.length === 0) {
            return cb(null, null);
        }

        return cb(null, results.rows[0]);
    })
    .catch(function(error) {
        console.log(err);
        cb(error, null);
     });
});

AssetMaster.method('insert', function(cb){
    var entity = this.param;

    return procedure('exec_madd', entity, cb);
});

AssetMaster.method('update', function(cb){
    var entity = this.param;

    return procedure('exec_mupd', entity, cb);
});

AssetMaster.method('delete', function(cb){
    var entity = this.param;

    return procedure('exec_mdel', entity, cb);
});

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function AssetMaster(param){
    this.param = param || {};
}


function procedure(txn_type, entity, cb){

    entity.txn_type = txn_type;

    database.simpleExecute(
        'BEGIN asset_mgmt_pkg.asset_master_proc(' +
        '    :asset_code           ' +
        '   ,:asset_name           ' +
        '   ,:asset_name_local     ' +
        '   ,:asset_cat_code       ' +
        '   ,:cost_center_code     ' +
        '   ,:main_mgr_no          ' +
        '   ,:sub_mgr_no           ' +
        '   ,:asset_model_name     ' +
        '   ,:manufacturer_name    ' +
        '   ,:purchaser_name       ' +
        '   ,:acquisition_date     ' +
        '   ,:depreciation_a       ' +
        '   ,:depreciation_b       ' +
        '   ,:salvage_amount       ' +
        '   ,:manufacture_no       ' +
        '   ,:manufacture_date     ' +
        '   ,:external_apperance   ' +
        '   ,:gross_weight         ' +
        '   ,:inspection_flag      ' +
        '   ,:inspection_period    ' +
        '   ,:inspection_unit      ' +
        '   ,:acquisition_amount   ' +
        '   ,:install_area_code    ' +
        '   ,:file_key             ' +
        '   ,:final_move_seq       ' +
        '   ,:final_disuse_seq     ' +
        '   ,:status               ' +
        '   ,:remarks              ' +
        '   ,:write_by             ' +
        '   ,:txn_type             ' +
        '   ,:object_id            ' +
        '   ,:out_code             ' +
        '   ,:out_message          ' +
        '); END; ' ,
        {
             asset_code           : entity.asset_code
            ,asset_name           : entity.asset_name
            ,asset_name_local     : entity.asset_name_local
            ,asset_cat_code       : entity.asset_cat_code
            ,cost_center_code     : entity.cost_center_code
            ,main_mgr_no          : entity.main_mgr_no
            ,sub_mgr_no           : entity.sub_mgr_no
            ,asset_model_name     : entity.asset_model_name
            ,manufacturer_name    : entity.manufacturer_name
            ,purchaser_name       : entity.purchaser_name
            ,acquisition_date     : entity.acquisition_date
            ,depreciation_a       : entity.depreciation_a
            ,depreciation_b       : entity.depreciation_b
            ,salvage_amount       : entity.salvage_amount
            ,manufacture_no       : entity.manufacture_no
            ,manufacture_date     : entity.manufacture_date
            ,external_apperance   : entity.external_apperance
            ,gross_weight         : entity.gross_weight
            ,inspection_flag      : entity.inspection_flag
            ,inspection_period    : entity.inspection_period
            ,inspection_unit      : entity.inspection_unit
            ,acquisition_amount   : entity.acquisition_amount
            ,install_area_code    : entity.install_area_code
            ,file_key             : entity.file_key
            ,final_move_seq       : entity.final_move_seq
            ,final_disuse_seq     : entity.final_disuse_seq
            ,status               : entity.status
            ,remarks              : entity.remarks
            ,write_by             : entity.write_by
            ,txn_type             : entity.txn_type
            ,object_id            : {dir : database.BIND_OUT}
            ,out_code             : {dir : database.BIND_OUT}
            ,out_message          : {dir : database.BIND_OUT}
        },
        { autoCommit: true }
    )
    .then(function(result){
        return cb(null, result);
    })
    .catch(function(err) {
        console.log(err);
        return cb(err, null);
    });
}


module.exports = AssetMaster


