/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 부속품목
 * File          : asset_common_part.service.js
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
            '    part_no              AS "part_no"             ' +
            '   ,part_name            AS "part_name"           ' +
            '   ,part_name_local      AS "part_name_local"     ' +
            '   ,part_spec            AS "part_spec"           ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_common_part ' ;

var query ='SELECT ' +
            '    part_no              AS "part_no"             ' +
            '   ,part_name            AS "part_name"           ' +
            '   ,part_name_local      AS "part_name_local"     ' +
            '   ,part_spec            AS "part_spec"           ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_common_part ' ;

function buildConditions(search) {
    var conditions = [];
    var values = [];

    // NUMBER convert like this --> values.push(parseInt(search.age));
    if (typeof search.part_no !== 'undefined') {
        conditions.push("part_no = :part_no");
        values.push(search.part_no);
    }
    if (typeof search.part_name !== 'undefined') {
        conditions.push("part_name LIKE :part_name");
        values.push("%" + search.part_name + "%");
    }
    if (typeof search.part_name_local !== 'undefined') {
        conditions.push("part_name_local LIKE :part_name_local");
        values.push("%" + search.part_name_local + "%");
    }
    if (typeof search.part_spec !== 'undefined') {
        conditions.push("part_spec = :part_spec");
        values.push(search.part_spec);
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



AssetCommonPart.method('search', function(cb){

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


AssetCommonPart.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
                '    part_no                 = :part_no              '
        ,
        {
             part_no              : search.part_no
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



AssetCommonPart.method('findById', function(cb){
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

AssetCommonPart.method('insert', function(cb){
    var entity = this.param;

    return procedure('exec_madd', entity, cb);
});

AssetCommonPart.method('update', function(cb){
    var entity = this.param;

    return procedure('exec_mupd', entity, cb);
});

AssetCommonPart.method('delete', function(cb){
    var entity = this.param;

    return procedure('exec_mdel', entity, cb);
});

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function AssetCommonPart(param){
    this.param = param || {};
}


function procedure(txn_type, entity, cb){

    entity.txn_type = txn_type;

    database.simpleExecute(
        'BEGIN asset_mgmt_pkg.asset_common_part_proc(' +
        '    :part_no              ' +
        '   ,:part_name            ' +
        '   ,:part_name_local      ' +
        '   ,:part_spec            ' +
        '   ,:status               ' +
        '   ,:remarks              ' +
        '   ,:write_by             ' +
        '   ,:txn_type             ' +
        '   ,:object_id            ' +
        '   ,:out_code             ' +
        '   ,:out_message          ' +
        '); END; ' ,
        {
             part_no              : entity.part_no
            ,part_name            : entity.part_name
            ,part_name_local      : entity.part_name_local
            ,part_spec            : entity.part_spec
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


module.exports = AssetCommonPart


