/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 장비능력및주요부치수
 * File          : asset_capa.service.js
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
            '   ,capa_seq             AS "capa_seq"            ' +
            '   ,name                 AS "name"                ' +
            '   ,name_local           AS "name_local"          ' +
            '   ,description          AS "description"         ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_capa ' ;

var query ='SELECT ' +
            '    asset_code           AS "asset_code"          ' +
            '   ,capa_seq             AS "capa_seq"            ' +
            '   ,name                 AS "name"                ' +
            '   ,name_local           AS "name_local"          ' +
            '   ,description          AS "description"         ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,status               AS "status"              ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_capa ' ;

function buildConditions(search) {
    var conditions = [];
    var values = [];

    // NUMBER convert like this --> values.push(parseInt(search.age));
    if (typeof search.asset_code !== 'undefined') {
        conditions.push("asset_code = :asset_code");
        values.push(search.asset_code);
    }
    if (typeof search.name !== 'undefined') {
        conditions.push("name = :name");
        values.push(search.name);
    }
    if (typeof search.name_local !== 'undefined') {
        conditions.push("name_local = :name_local");
        values.push(search.name_local);
    }
    if (typeof search.description !== 'undefined') {
        conditions.push("description = :description");
        values.push(search.description);
    }
    if (typeof search.file_key !== 'undefined') {
        conditions.push("file_key = :file_key");
        values.push(search.file_key);
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



AssetCapa.method('search', function(cb){

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


AssetCapa.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
                '    asset_code              = :asset_code           '
              + 'AND capa_seq                = :capa_seq             '
        ,
        {
             asset_code           : search.asset_code
            ,capa_seq             : search.capa_seq
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



AssetCapa.method('findById', function(cb){
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

AssetCapa.method('insert', function(cb){
    var entity = this.param;

    return procedure('exec_madd', entity, cb);
});

AssetCapa.method('update', function(cb){
    var entity = this.param;

    return procedure('exec_mupd', entity, cb);
});

AssetCapa.method('delete', function(cb){
    var entity = this.param;

    return procedure('exec_mdel', entity, cb);
});

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function AssetCapa(param){
    this.param = param || {};
}


function procedure(txn_type, entity, cb){

    entity.txn_type = txn_type;

    database.simpleExecute(
        'BEGIN asset_mgmt_pkg.asset_capa_proc(' +
        '    :asset_code           ' +
        '   ,:capa_seq             ' +
        '   ,:name                 ' +
        '   ,:name_local           ' +
        '   ,:description          ' +
        '   ,:file_key             ' +
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
            ,capa_seq             : entity.capa_seq
            ,name                 : entity.name
            ,name_local           : entity.name_local
            ,description          : entity.description
            ,file_key             : entity.file_key
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


module.exports = AssetCapa


