/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 장비폐기
 * File          : asset_disuse.service.js
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
            '   ,disuse_seq           AS "disuse_seq"          ' +
            '   ,disuse_date          AS "disuse_date"         ' +
            '   ,disuse_reason        AS "disuse_reason"       ' +
            '   ,disuse_desc          AS "disuse_desc"         ' +
            '   ,disuse_charger       AS "disuse_charger"      ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_disuse ' ;

var query ='SELECT ' +
            '    asset_code           AS "asset_code"          ' +
            '   ,disuse_seq           AS "disuse_seq"          ' +
            '   ,disuse_date          AS "disuse_date"         ' +
            '   ,disuse_reason        AS "disuse_reason"       ' +
            '   ,disuse_desc          AS "disuse_desc"         ' +
            '   ,disuse_charger       AS "disuse_charger"      ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_disuse ' ;

function buildConditions(search) {
    var conditions = [];
    var values = [];

    // NUMBER convert like this --> values.push(parseInt(search.age));
    if (typeof search.asset_code !== 'undefined') {
        conditions.push("asset_code = :asset_code");
        values.push(search.asset_code);
    }
    if (typeof search.disuse_date !== 'undefined') {
        conditions.push("disuse_date = :disuse_date");
        values.push(search.disuse_date);
    }
    if (typeof search.disuse_reason !== 'undefined') {
        conditions.push("disuse_reason = :disuse_reason");
        values.push(search.disuse_reason);
    }
    if (typeof search.disuse_desc !== 'undefined') {
        conditions.push("disuse_desc = :disuse_desc");
        values.push(search.disuse_desc);
    }
    if (typeof search.disuse_charger !== 'undefined') {
        conditions.push("disuse_charger = :disuse_charger");
        values.push(search.disuse_charger);
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



AssetDisuse.method('search', function(cb){

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


AssetDisuse.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
                '    asset_code              = :asset_code           '
              + 'AND disuse_seq              = :disuse_seq           '
        ,
        {
             asset_code           : search.asset_code
            ,disuse_seq           : search.disuse_seq
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



AssetDisuse.method('findById', function(cb){
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

AssetDisuse.method('insert', function(cb){
    var entity = this.param;

    return procedure('exec_madd', entity, cb);
});

AssetDisuse.method('update', function(cb){
    var entity = this.param;

    return procedure('exec_mupd', entity, cb);
});

AssetDisuse.method('delete', function(cb){
    var entity = this.param;

    return procedure('exec_mdel', entity, cb);
});

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function AssetDisuse(param){
    this.param = param || {};
}


function procedure(txn_type, entity, cb){

    entity.txn_type = txn_type;

    database.simpleExecute(
        'BEGIN asset_mgmt_pkg.asset_disuse_proc(' +
        '    :asset_code           ' +
        '   ,:disuse_seq           ' +
        '   ,:disuse_date          ' +
        '   ,:disuse_reason        ' +
        '   ,:disuse_desc          ' +
        '   ,:disuse_charger       ' +
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
            ,disuse_seq           : entity.disuse_seq
            ,disuse_date          : entity.disuse_date
            ,disuse_reason        : entity.disuse_reason
            ,disuse_desc          : entity.disuse_desc
            ,disuse_charger       : entity.disuse_charger
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


module.exports = AssetDisuse


