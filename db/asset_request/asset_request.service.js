/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 자산처리요청
 * File          : asset_request.service.js
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
            '    request_seq          AS "request_seq"         ' +
            '   ,asset_code           AS "asset_code"          ' +
            '   ,request_flag         AS "request_flag"        ' +
            '   ,request_date         AS "request_date"        ' +
            '   ,request_charger      AS "request_charger"     ' +
            '   ,req_subject          AS "req_subject"         ' +
            '   ,request_desc         AS "request_desc"        ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,process_flag         AS "process_flag"        ' +
            '   ,process_date         AS "process_date"        ' +
            '   ,process_charger      AS "process_charger"     ' +
            '   ,process_desc         AS "process_desc"        ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_request ' ;

var query ='SELECT ' +
            '    request_seq          AS "request_seq"         ' +
            '   ,asset_code           AS "asset_code"          ' +
            '   ,request_flag         AS "request_flag"        ' +
            '   ,request_date         AS "request_date"        ' +
            '   ,request_charger      AS "request_charger"     ' +
            '   ,req_subject          AS "req_subject"         ' +
            '   ,request_desc         AS "request_desc"        ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,process_flag         AS "process_flag"        ' +
            '   ,process_date         AS "process_date"        ' +
            '   ,process_charger      AS "process_charger"     ' +
            '   ,process_desc         AS "process_desc"        ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_request ' ;

function buildConditions(search) {
    var conditions = [];
    var values = [];

    // NUMBER convert like this --> values.push(parseInt(search.age));
    if (typeof search.asset_code !== 'undefined') {
        conditions.push("asset_code = :asset_code");
        values.push(search.asset_code);
    }
    if (typeof search.request_flag !== 'undefined') {
        conditions.push("request_flag = :request_flag");
        values.push(search.request_flag);
    }
    if (typeof search.request_date !== 'undefined') {
        conditions.push("request_date = :request_date");
        values.push(search.request_date);
    }
    if (typeof search.request_charger !== 'undefined') {
        conditions.push("request_charger = :request_charger");
        values.push(search.request_charger);
    }
    if (typeof search.req_subject !== 'undefined') {
        conditions.push("req_subject = :req_subject");
        values.push(search.req_subject);
    }
    if (typeof search.request_desc !== 'undefined') {
        conditions.push("request_desc = :request_desc");
        values.push(search.request_desc);
    }
    if (typeof search.file_key !== 'undefined') {
        conditions.push("file_key = :file_key");
        values.push(search.file_key);
    }
    if (typeof search.process_flag !== 'undefined') {
        conditions.push("process_flag = :process_flag");
        values.push(search.process_flag);
    }
    if (typeof search.process_date !== 'undefined') {
        conditions.push("process_date = :process_date");
        values.push(search.process_date);
    }
    if (typeof search.process_charger !== 'undefined') {
        conditions.push("process_charger = :process_charger");
        values.push(search.process_charger);
    }
    if (typeof search.process_desc !== 'undefined') {
        conditions.push("process_desc = :process_desc");
        values.push(search.process_desc);
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



AssetRequest.method('search', function(cb){

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


AssetRequest.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
                '    request_seq             = :request_seq          '
        ,
        {
             request_seq          : search.request_seq
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



AssetRequest.method('findById', function(cb){
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

AssetRequest.method('insert', function(cb){
    var entity = this.param;

    return procedure('exec_madd', entity, cb);
});

AssetRequest.method('update', function(cb){
    var entity = this.param;

    return procedure('exec_mupd', entity, cb);
});

AssetRequest.method('delete', function(cb){
    var entity = this.param;

    return procedure('exec_mdel', entity, cb);
});

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function AssetRequest(param){
    this.param = param || {};
}


function procedure(txn_type, entity, cb){

    entity.txn_type = txn_type;

    database.simpleExecute(
        'BEGIN asset_mgmt_pkg.asset_request_proc(' +
        '    :request_seq          ' +
        '   ,:asset_code           ' +
        '   ,:request_flag         ' +
        '   ,:request_date         ' +
        '   ,:request_charger      ' +
        '   ,:req_subject          ' +
        '   ,:request_desc         ' +
        '   ,:file_key             ' +
        '   ,:process_flag         ' +
        '   ,:process_date         ' +
        '   ,:process_charger      ' +
        '   ,:process_desc         ' +
        '   ,:status               ' +
        '   ,:remarks              ' +
        '   ,:write_by             ' +
        '   ,:txn_type             ' +
        '   ,:object_id            ' +
        '   ,:out_code             ' +
        '   ,:out_message          ' +
        '); END; ' ,
        {
             request_seq          : entity.request_seq
            ,asset_code           : entity.asset_code
            ,request_flag         : entity.request_flag
            ,request_date         : entity.request_date
            ,request_charger      : entity.request_charger
            ,req_subject          : entity.req_subject
            ,request_desc         : entity.request_desc
            ,file_key             : entity.file_key
            ,process_flag         : entity.process_flag
            ,process_date         : entity.process_date
            ,process_charger      : entity.process_charger
            ,process_desc         : entity.process_desc
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


module.exports = AssetRequest


