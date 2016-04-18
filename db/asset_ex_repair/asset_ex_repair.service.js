/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 장비교환수리
 * File          : asset_ex_repair.service.js
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
            '   ,ex_re_seq            AS "ex_re_seq"           ' +
            '   ,asset_part_seq       AS "asset_part_seq"      ' +
            '   ,request_seq          AS "request_seq"         ' +
            '   ,ex_re_req_flag       AS "ex_re_req_flag"      ' +
            '   ,ex_re_part_name      AS "ex_re_part_name"     ' +
            '   ,ex_re_part_desc      AS "ex_re_part_desc"     ' +
            '   ,req_subject          AS "req_subject"         ' +
            '   ,ex_re_requester      AS "ex_re_requester"     ' +
            '   ,ex_re_req_date       AS "ex_re_req_date"      ' +
            '   ,ex_re_date           AS "ex_re_date"          ' +
            '   ,ex_re_desc           AS "ex_re_desc"          ' +
            '   ,ex_re_proc_flag      AS "ex_re_proc_flag"     ' +
            '   ,ex_re_cost           AS "ex_re_cost"          ' +
            '   ,ex_re_charger        AS "ex_re_charger"       ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_ex_repair ' ;

var query ='SELECT ' +
            '    asset_code           AS "asset_code"          ' +
            '   ,ex_re_seq            AS "ex_re_seq"           ' +
            '   ,asset_part_seq       AS "asset_part_seq"      ' +
            '   ,request_seq          AS "request_seq"         ' +
            '   ,ex_re_req_flag       AS "ex_re_req_flag"      ' +
            '   ,ex_re_part_name      AS "ex_re_part_name"     ' +
            '   ,ex_re_part_desc      AS "ex_re_part_desc"     ' +
            '   ,req_subject          AS "req_subject"         ' +
            '   ,ex_re_requester      AS "ex_re_requester"     ' +
            '   ,ex_re_req_date       AS "ex_re_req_date"      ' +
            '   ,ex_re_date           AS "ex_re_date"          ' +
            '   ,ex_re_desc           AS "ex_re_desc"          ' +
            '   ,ex_re_proc_flag      AS "ex_re_proc_flag"     ' +
            '   ,ex_re_cost           AS "ex_re_cost"          ' +
            '   ,ex_re_charger        AS "ex_re_charger"       ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_ex_repair ' ;

function buildConditions(search) {
    var conditions = [];
    var values = [];

    // NUMBER convert like this --> values.push(parseInt(search.age));
    if (typeof search.asset_code !== 'undefined') {
        conditions.push("asset_code = :asset_code");
        values.push(search.asset_code);
    }
    if (typeof search.ex_re_req_flag !== 'undefined') {
        conditions.push("ex_re_req_flag = :ex_re_req_flag");
        values.push(search.ex_re_req_flag);
    }
    if (typeof search.ex_re_part_name !== 'undefined') {
        conditions.push("ex_re_part_name LIKE :ex_re_part_name");
        values.push("%" + search.ex_re_part_name + "%");
    }
    if (typeof search.ex_re_part_desc !== 'undefined') {
        conditions.push("ex_re_part_desc = :ex_re_part_desc");
        values.push(search.ex_re_part_desc);
    }
    if (typeof search.req_subject !== 'undefined') {
        conditions.push("req_subject = :req_subject");
        values.push(search.req_subject);
    }
    if (typeof search.ex_re_requester !== 'undefined') {
        conditions.push("ex_re_requester = :ex_re_requester");
        values.push(search.ex_re_requester);
    }
    if (typeof search.ex_re_req_date !== 'undefined') {
        conditions.push("ex_re_req_date = :ex_re_req_date");
        values.push(search.ex_re_req_date);
    }
    if (typeof search.ex_re_date !== 'undefined') {
        conditions.push("ex_re_date = :ex_re_date");
        values.push(search.ex_re_date);
    }
    if (typeof search.ex_re_desc !== 'undefined') {
        conditions.push("ex_re_desc = :ex_re_desc");
        values.push(search.ex_re_desc);
    }
    if (typeof search.ex_re_proc_flag !== 'undefined') {
        conditions.push("ex_re_proc_flag = :ex_re_proc_flag");
        values.push(search.ex_re_proc_flag);
    }
    if (typeof search.ex_re_charger !== 'undefined') {
        conditions.push("ex_re_charger = :ex_re_charger");
        values.push(search.ex_re_charger);
    }
    if (typeof search.file_key !== 'undefined') {
        conditions.push("file_key = :file_key");
        values.push(search.file_key);
    }
    if (typeof search.object_id !== 'undefined') {
        conditions.push("object_id = :object_id");
        values.push(search.object_id);
    }

    return {
        where: conditions.length ? conditions.join(' AND ') : '1 = 1',
        values: values
    };
}



AssetExRepair.method('search', function(cb){

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


AssetExRepair.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
                '    asset_code              = :asset_code           '
              + 'AND ex_re_seq               = :ex_re_seq            '
        ,
        {
             asset_code           : search.asset_code
            ,ex_re_seq            : search.ex_re_seq
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



AssetExRepair.method('findById', function(cb){
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

AssetExRepair.method('insert', function(cb){
    var entity = this.param;

    return procedure('exec_madd', entity, cb);
});

AssetExRepair.method('update', function(cb){
    var entity = this.param;

    return procedure('exec_mupd', entity, cb);
});

AssetExRepair.method('delete', function(cb){
    var entity = this.param;

    return procedure('exec_mdel', entity, cb);
});

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function AssetExRepair(param){
    this.param = param || {};
}


function procedure(txn_type, entity, cb){

    entity.txn_type = txn_type;

    database.simpleExecute(
        'BEGIN asset_mgmt_pkg.asset_ex_repair_proc(' +
        '    :asset_code           ' +
        '   ,:ex_re_seq            ' +
        '   ,:asset_part_seq       ' +
        '   ,:request_seq          ' +
        '   ,:ex_re_req_flag       ' +
        '   ,:ex_re_part_name      ' +
        '   ,:ex_re_part_desc      ' +
        '   ,:req_subject          ' +
        '   ,:ex_re_requester      ' +
        '   ,:ex_re_req_date       ' +
        '   ,:ex_re_date           ' +
        '   ,:ex_re_desc           ' +
        '   ,:ex_re_proc_flag      ' +
        '   ,:ex_re_cost           ' +
        '   ,:ex_re_charger        ' +
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
            ,ex_re_seq            : entity.ex_re_seq
            ,asset_part_seq       : entity.asset_part_seq
            ,request_seq          : entity.request_seq
            ,ex_re_req_flag       : entity.ex_re_req_flag
            ,ex_re_part_name      : entity.ex_re_part_name
            ,ex_re_part_desc      : entity.ex_re_part_desc
            ,req_subject          : entity.req_subject
            ,ex_re_requester      : entity.ex_re_requester
            ,ex_re_req_date       : entity.ex_re_req_date
            ,ex_re_date           : entity.ex_re_date
            ,ex_re_desc           : entity.ex_re_desc
            ,ex_re_proc_flag      : entity.ex_re_proc_flag
            ,ex_re_cost           : entity.ex_re_cost
            ,ex_re_charger        : entity.ex_re_charger
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


module.exports = AssetExRepair


