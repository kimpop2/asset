/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 첨부파일
 * File          : attachment_file.service.js
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
            '    attach_file_seq      AS "attach_file_seq"     ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,file_name            AS "file_name"           ' +
            '   ,file_ext             AS "file_ext"            ' +
            '   ,file_path            AS "file_path"           ' +
            '   ,file_size            AS "file_size"           ' +
            '   ,file_flag            AS "file_flag"           ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            'FROM  ' +
            '    attachment_file ' ;

var query ='SELECT ' +
            '    attach_file_seq      AS "attach_file_seq"     ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,file_name            AS "file_name"           ' +
            '   ,file_ext             AS "file_ext"            ' +
            '   ,file_path            AS "file_path"           ' +
            '   ,file_size            AS "file_size"           ' +
            '   ,file_flag            AS "file_flag"           ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            'FROM  ' +
            '    attachment_file ' ;

function buildConditions(search) {
    var conditions = [];
    var values = [];

    // NUMBER convert like this --> values.push(parseInt(search.age));
    if (typeof search.file_key !== 'undefined') {
        conditions.push("file_key = :file_key");
        values.push(search.file_key);
    }
    if (typeof search.file_name !== 'undefined') {
        conditions.push("file_name LIKE :file_name");
        values.push("%" + search.file_name + "%");
    }
    if (typeof search.file_ext !== 'undefined') {
        conditions.push("file_ext = :file_ext");
        values.push(search.file_ext);
    }
    if (typeof search.file_path !== 'undefined') {
        conditions.push("file_path = :file_path");
        values.push(search.file_path);
    }
    if (typeof search.file_flag !== 'undefined') {
        conditions.push("file_flag = :file_flag");
        values.push(search.file_flag);
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



AttachmentFile.method('search', function(cb){

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


AttachmentFile.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
                '    attach_file_seq         = :attach_file_seq      '
        ,
        {
             attach_file_seq      : search.attach_file_seq
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



AttachmentFile.method('findById', function(cb){
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

AttachmentFile.method('insert', function(cb){
    var entity = this.param;

    return procedure('exec_madd', entity, cb);
});

AttachmentFile.method('update', function(cb){
    var entity = this.param;

    return procedure('exec_mupd', entity, cb);
});

AttachmentFile.method('delete', function(cb){
    var entity = this.param;

    return procedure('exec_mdel', entity, cb);
});

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function AttachmentFile(param){
    this.param = param || {};
}


function procedure(txn_type, entity, cb){

    entity.txn_type = txn_type;

    database.simpleExecute(
        'BEGIN asset_mgmt_pkg.attachment_file_proc(' +
        '    :attach_file_seq      ' +
        '   ,:file_key             ' +
        '   ,:file_name            ' +
        '   ,:file_ext             ' +
        '   ,:file_path            ' +
        '   ,:file_size            ' +
        '   ,:file_flag            ' +
        '   ,:status               ' +
        '   ,:remarks              ' +
        '   ,:write_by             ' +
        '   ,:txn_type             ' +
        '   ,:object_id            ' +
        '   ,:out_code             ' +
        '   ,:out_message          ' +
        '); END; ' ,
        {
             attach_file_seq      : entity.attach_file_seq
            ,file_key             : entity.file_key
            ,file_name            : entity.file_name
            ,file_ext             : entity.file_ext
            ,file_path            : entity.file_path
            ,file_size            : entity.file_size
            ,file_flag            : entity.file_flag
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


module.exports = AttachmentFile


