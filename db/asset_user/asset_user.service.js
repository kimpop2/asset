/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 사용자
 * File          : asset_user.service.js
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
            '    user_id              AS "user_id"             ' +
            '   ,user_name            AS "user_name"           ' +
            '   ,user_pwd             AS "user_pwd"            ' +
            '   ,user_role            AS "user_role"           ' +
            '   ,phone                AS "phone"               ' +
            '   ,email                AS "email"               ' +
            '   ,lang                 AS "lang"                ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_user ' ;

var query ='SELECT ' +
            '    user_id              AS "user_id"             ' +
            '   ,user_name            AS "user_name"           ' +
            '   ,user_pwd             AS "user_pwd"            ' +
            '   ,user_role            AS "user_role"           ' +
            '   ,phone                AS "phone"               ' +
            '   ,email                AS "email"               ' +
            '   ,lang                 AS "lang"                ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_user ' ;

function buildConditions(search) {
    var conditions = [];
    var values = [];

    // NUMBER convert like this --> values.push(parseInt(search.age));
    if (typeof search.user_id !== 'undefined') {
        conditions.push("user_id = :user_id");
        values.push(search.user_id);
    }
    if (typeof search.user_name !== 'undefined') {
        conditions.push("user_name LIKE :user_name");
        values.push("%" + search.user_name + "%");
    }
    if (typeof search.user_pwd !== 'undefined') {
        conditions.push("user_pwd = :user_pwd");
        values.push(search.user_pwd);
    }
    if (typeof search.user_role !== 'undefined') {
        conditions.push("user_role = :user_role");
        values.push(search.user_role);
    }
    if (typeof search.phone !== 'undefined') {
        conditions.push("phone = :phone");
        values.push(search.phone);
    }
    if (typeof search.email !== 'undefined') {
        conditions.push("email = :email");
        values.push(search.email);
    }
    if (typeof search.lang !== 'undefined') {
        conditions.push("lang = :lang");
        values.push(search.lang);
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



AssetUser.method('search', function(cb){

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


AssetUser.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
                '    user_id                 = :user_id              '
        ,
        {
             user_id              : search.user_id
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



AssetUser.method('findById', function(cb){
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

AssetUser.method('insert', function(cb){
    var entity = this.param;

    return procedure('exec_madd', entity, cb);
});

AssetUser.method('update', function(cb){
    var entity = this.param;

    return procedure('exec_mupd', entity, cb);
});

AssetUser.method('delete', function(cb){
    var entity = this.param;

    return procedure('exec_mdel', entity, cb);
});

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function AssetUser(param){
    this.param = param || {};
}


function procedure(txn_type, entity, cb){

    entity.txn_type = txn_type;

    database.simpleExecute(
        'BEGIN asset_mgmt_pkg.asset_user_proc(' +
        '    :user_id              ' +
        '   ,:user_name            ' +
        '   ,:user_pwd             ' +
        '   ,:user_role            ' +
        '   ,:phone                ' +
        '   ,:email                ' +
        '   ,:lang                 ' +
        '   ,:status               ' +
        '   ,:remarks              ' +
        '   ,:write_by             ' +
        '   ,:txn_type             ' +
        '   ,:object_id            ' +
        '   ,:out_code             ' +
        '   ,:out_message          ' +
        '); END; ' ,
        {
             user_id              : entity.user_id
            ,user_name            : entity.user_name
            ,user_pwd             : entity.user_pwd
            ,user_role            : entity.user_role
            ,phone                : entity.phone
            ,email                : entity.email
            ,lang                 : entity.lang
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


module.exports = AssetUser


