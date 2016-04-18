/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 검교정
 * File          : asset_calibration.service.js
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
            '    asset_code           AS "asset_code"          ' +
            '   ,calibration_seq      AS "calibration_seq"     ' +
            '   ,calibration_date     AS "calibration_date"    ' +
            '   ,calibration_code     AS "calibration_code"    ' +
            '   ,calibration_charger  AS "calibration_charger" ' +
            '   ,calibration_result   AS "calibration_result"  ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_calibration ' ;

var query ='SELECT ' +
            '    asset_code           AS "asset_code"          ' +
            '   ,calibration_seq      AS "calibration_seq"     ' +
            '   ,calibration_date     AS "calibration_date"    ' +
            '   ,calibration_code     AS "calibration_code"    ' +
            '   ,calibration_charger  AS "calibration_charger" ' +
            '   ,calibration_result   AS "calibration_result"  ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_calibration ' ;

function buildConditions(search) {
    var conditions = [];
    var values = [];

    // NUMBER convert like this --> values.push(parseInt(search.age));
    if (typeof search.asset_code !== 'undefined') {
        conditions.push("asset_code = :asset_code");
        values.push(search.asset_code);
    }
    if (typeof search.calibration_seq !== 'undefined') {
        conditions.push("calibration_seq = :calibration_seq");
        values.push(search.calibration_seq);
    }
    if (typeof search.calibration_date !== 'undefined') {
        conditions.push("calibration_date = :calibration_date");
        values.push(search.calibration_date);
    }
    if (typeof search.calibration_code !== 'undefined') {
        conditions.push("calibration_code = :calibration_code");
        values.push(search.calibration_code);
    }
    if (typeof search.calibration_charger !== 'undefined') {
        conditions.push("calibration_charger = :calibration_charger");
        values.push(search.calibration_charger);
    }
    if (typeof search.calibration_result !== 'undefined') {
        conditions.push("calibration_result = :calibration_result");
        values.push(search.calibration_result);
    }

    return {
        where: conditions.length ? conditions.join(' AND ') : '1 = 1',
        values: values
    };
}



AssetCalibration.method('search', function(cb){

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


AssetCalibration.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
                '    asset_code              = :asset_code           '
              + 'AND calibration_seq         = :calibration_seq      '
        ,
        {
             asset_code           : search.asset_code
            ,calibration_seq      : search.calibration_seq
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



AssetCalibration.method('findById', function(cb){
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

AssetCalibration.method('insert', function(cb){
    var entity = this.param;

    return procedure('exec_madd', entity, cb);
});

AssetCalibration.method('update', function(cb){
    var entity = this.param;

    return procedure('exec_mupd', entity, cb);
});

AssetCalibration.method('delete', function(cb){
    var entity = this.param;

    return procedure('exec_mdel', entity, cb);
});

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function AssetCalibration(param){
    this.param = param || {};
}


function procedure(txn_type, entity, cb){

    entity.txn_type = txn_type;

    database.simpleExecute(
        'BEGIN asset_mgmt_pkg.asset_calibration_proc(' +
        '    :asset_code           ' +
        '   ,:calibration_seq      ' +
        '   ,:calibration_date     ' +
        '   ,:calibration_code     ' +
        '   ,:calibration_charger  ' +
        '   ,:calibration_result   ' +
        '   ,:remarks              ' +
        '   ,:write_by             ' +
        '   ,:txn_type             ' +
        '   ,:object_id            ' +
        '   ,:out_code             ' +
        '   ,:out_message          ' +
        '); END; ' ,
        {
             asset_code           : entity.asset_code
            ,calibration_seq      : entity.calibration_seq
            ,calibration_date     : entity.calibration_date
            ,calibration_code     : entity.calibration_code
            ,calibration_charger  : entity.calibration_charger
            ,calibration_result   : entity.calibration_result
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


module.exports = AssetCalibration


