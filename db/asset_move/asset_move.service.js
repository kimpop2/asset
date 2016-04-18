/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 이동대여반납
 * File          : asset_move.service.js
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
            '   ,move_seq             AS "move_seq"            ' +
            '   ,install_area_code    AS "install_area_code"   ' +
            '   ,move_flag            AS "move_flag"           ' +
            '   ,move_date            AS "move_date"           ' +
            '   ,move_reason          AS "move_reason"         ' +
            '   ,request_charger      AS "request_charger"     ' +
            '   ,process_charger      AS "process_charger"     ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_move ' ;

var query ='SELECT ' +
            '    asset_code           AS "asset_code"          ' +
            '   ,move_seq             AS "move_seq"            ' +
            '   ,install_area_code    AS "install_area_code"   ' +
            '   ,move_flag            AS "move_flag"           ' +
            '   ,move_date            AS "move_date"           ' +
            '   ,move_reason          AS "move_reason"         ' +
            '   ,request_charger      AS "request_charger"     ' +
            '   ,process_charger      AS "process_charger"     ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_move ' ;

function buildConditions(search) {
    var conditions = [];
    var values = [];

    // NUMBER convert like this --> values.push(parseInt(search.age));
    if (typeof search.asset_code !== 'undefined') {
        conditions.push("asset_code = :asset_code");
        values.push(search.asset_code);
    }
    if (typeof search.install_area_code !== 'undefined') {
        conditions.push("install_area_code = :install_area_code");
        values.push(search.install_area_code);
    }
    if (typeof search.move_flag !== 'undefined') {
        conditions.push("move_flag = :move_flag");
        values.push(search.move_flag);
    }
    if (typeof search.move_date !== 'undefined') {
        conditions.push("move_date = :move_date");
        values.push(search.move_date);
    }
    if (typeof search.move_reason !== 'undefined') {
        conditions.push("move_reason = :move_reason");
        values.push(search.move_reason);
    }
    if (typeof search.request_charger !== 'undefined') {
        conditions.push("request_charger = :request_charger");
        values.push(search.request_charger);
    }
    if (typeof search.process_charger !== 'undefined') {
        conditions.push("process_charger = :process_charger");
        values.push(search.process_charger);
    }
    if (typeof search.file_key !== 'undefined') {
        conditions.push("file_key = :file_key");
        values.push(search.file_key);
    }

    return {
        where: conditions.length ? conditions.join(' AND ') : '1 = 1',
        values: values
    };
}



AssetMove.method('search', function(cb){

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


AssetMove.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
                '    asset_code              = :asset_code           '
              + 'AND move_seq                = :move_seq             '
        ,
        {
             asset_code           : search.asset_code
            ,move_seq             : search.move_seq
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



AssetMove.method('findById', function(cb){
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

AssetMove.method('insert', function(cb){
    var entity = this.param;

    return procedure('exec_madd', entity, cb);
});

AssetMove.method('update', function(cb){
    var entity = this.param;

    return procedure('exec_mupd', entity, cb);
});

AssetMove.method('delete', function(cb){
    var entity = this.param;

    return procedure('exec_mdel', entity, cb);
});

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function AssetMove(param){
    this.param = param || {};
}


function procedure(txn_type, entity, cb){

    entity.txn_type = txn_type;

    database.simpleExecute(
        'BEGIN asset_mgmt_pkg.asset_move_proc(' +
        '    :asset_code           ' +
        '   ,:move_seq             ' +
        '   ,:install_area_code    ' +
        '   ,:move_flag            ' +
        '   ,:move_date            ' +
        '   ,:move_reason          ' +
        '   ,:request_charger      ' +
        '   ,:process_charger      ' +
        '   ,:file_key             ' +
        '   ,:remarks              ' +
        '   ,:write_by             ' +
        '   ,:txn_type             ' +
        '   ,:object_id            ' +
        '   ,:out_code             ' +
        '   ,:out_message          ' +
        '); END; ' ,
        {
             asset_code           : entity.asset_code
            ,move_seq             : entity.move_seq
            ,install_area_code    : entity.install_area_code
            ,move_flag            : entity.move_flag
            ,move_date            : entity.move_date
            ,move_reason          : entity.move_reason
            ,request_charger      : entity.request_charger
            ,process_charger      : entity.process_charger
            ,file_key             : entity.file_key
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


module.exports = AssetMove


