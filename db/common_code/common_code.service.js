/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 공통코드
 * File          : common_code.service.js
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
            '    code_type            AS "code_type"           ' +
            '   ,display_seq          AS "display_seq"         ' +
            '   ,lang                 AS "lang"                ' +
            '   ,code                 AS "code"                ' +
            '   ,code_desc            AS "code_desc"           ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    common_code ' ;

var query ='SELECT ' +
            '    code_type            AS "code_type"           ' +
            '   ,display_seq          AS "display_seq"         ' +
            '   ,lang                 AS "lang"                ' +
            '   ,code                 AS "code"                ' +
            '   ,code_desc            AS "code_desc"           ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    common_code ' ;

function buildConditions(search) {
    var conditions = [];
    var values = [];

    // NUMBER convert like this --> values.push(parseInt(search.age));
    if (typeof search.code_type !== 'undefined') {
        conditions.push("code_type = :code_type");
        values.push(search.code_type);
    }
    if (typeof search.display_seq !== 'undefined') {
        conditions.push("display_seq = :display_seq");
        values.push(search.display_seq);
    }
    if (typeof search.lang !== 'undefined') {
        conditions.push("lang = :lang");
        values.push(search.lang);
    }
    if (typeof search.code !== 'undefined') {
        conditions.push("code = :code");
        values.push(search.code);
    }
    if (typeof search.code_desc !== 'undefined') {
        conditions.push("code_desc = :code_desc");
        values.push(search.code_desc);
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



CommonCode.method('search', function(cb){

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


CommonCode.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
                '    code_type               = :code_type            '
              + 'AND lang                    = :lang                 '
              + 'AND code                    = :code                 '
        ,
        {
             code_type            : search.code_type
            ,lang                 : search.lang
            ,code                 : search.code
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



CommonCode.method('findById', function(cb){
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

CommonCode.method('insert', function(cb){
    var entity = this.param;

    return procedure('exec_madd', entity, cb);
});

CommonCode.method('update', function(cb){
    var entity = this.param;

    return procedure('exec_mupd', entity, cb);
});

CommonCode.method('delete', function(cb){
    var entity = this.param;

    return procedure('exec_mdel', entity, cb);
});

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function CommonCode(param){
    this.param = param || {};
}


function procedure(txn_type, entity, cb){

    entity.txn_type = txn_type;

    database.simpleExecute(
        'BEGIN asset_mgmt_pkg.common_code_proc(' +
        '    :code_type            ' +
        '   ,:display_seq          ' +
        '   ,:lang                 ' +
        '   ,:code                 ' +
        '   ,:code_desc            ' +
        '   ,:status               ' +
        '   ,:remarks              ' +
        '   ,:write_by             ' +
        '   ,:txn_type             ' +
        '   ,:object_id            ' +
        '   ,:out_code             ' +
        '   ,:out_message          ' +
        '); END; ' ,
        {
             code_type            : entity.code_type
            ,display_seq          : entity.display_seq
            ,lang                 : entity.lang
            ,code                 : entity.code
            ,code_desc            : entity.code_desc
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


module.exports = CommonCode


