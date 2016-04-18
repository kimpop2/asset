/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 장비실사
 * File          : asset_survey.service.js
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
            '   ,survey_seq           AS "survey_seq"          ' +
            '   ,move_seq             AS "move_seq"            ' +
            '   ,survey_date          AS "survey_date"         ' +
            '   ,survey_desc          AS "survey_desc"         ' +
            '   ,survey_result        AS "survey_result"       ' +
            '   ,survey_charger       AS "survey_charger"      ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_survey ' ;

var query ='SELECT ' +
            '    asset_code           AS "asset_code"          ' +
            '   ,survey_seq           AS "survey_seq"          ' +
            '   ,move_seq             AS "move_seq"            ' +
            '   ,survey_date          AS "survey_date"         ' +
            '   ,survey_desc          AS "survey_desc"         ' +
            '   ,survey_result        AS "survey_result"       ' +
            '   ,survey_charger       AS "survey_charger"      ' +
            '   ,file_key             AS "file_key"            ' +
            '   ,remarks              AS "remarks"             ' +
            '   ,created_by           AS "created_by"          ' +
            '   ,to_char(creation_date, \'yyyy-mm-dd\') AS "creation_date" ' +
            '   ,last_updated_by      AS "last_updated_by"     ' +
            '   ,to_char(last_update_date, \'yyyy-mm-dd\') AS "last_update_date" ' +
            '   ,object_id            AS "object_id"           ' +
            'FROM  ' +
            '    asset_survey ' ;

function buildConditions(search) {
    var conditions = [];
    var values = [];

    // NUMBER convert like this --> values.push(parseInt(search.age));
    if (typeof search.asset_code !== 'undefined') {
        conditions.push("asset_code = :asset_code");
        values.push(search.asset_code);
    }
    if (typeof search.survey_date !== 'undefined') {
        conditions.push("survey_date = :survey_date");
        values.push(search.survey_date);
    }
    if (typeof search.survey_desc !== 'undefined') {
        conditions.push("survey_desc = :survey_desc");
        values.push(search.survey_desc);
    }
    if (typeof search.survey_result !== 'undefined') {
        conditions.push("survey_result = :survey_result");
        values.push(search.survey_result);
    }
    if (typeof search.survey_charger !== 'undefined') {
        conditions.push("survey_charger = :survey_charger");
        values.push(search.survey_charger);
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



AssetSurvey.method('search', function(cb){

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


AssetSurvey.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
                '    asset_code              = :asset_code           '
              + 'AND survey_seq              = :survey_seq           '
        ,
        {
             asset_code           : search.asset_code
            ,survey_seq           : search.survey_seq
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



AssetSurvey.method('findById', function(cb){
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

AssetSurvey.method('insert', function(cb){
    var entity = this.param;

    return procedure('exec_madd', entity, cb);
});

AssetSurvey.method('update', function(cb){
    var entity = this.param;

    return procedure('exec_mupd', entity, cb);
});

AssetSurvey.method('delete', function(cb){
    var entity = this.param;

    return procedure('exec_mdel', entity, cb);
});

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function AssetSurvey(param){
    this.param = param || {};
}


function procedure(txn_type, entity, cb){

    entity.txn_type = txn_type;

    database.simpleExecute(
        'BEGIN asset_mgmt_pkg.asset_survey_proc(' +
        '    :asset_code           ' +
        '   ,:survey_seq           ' +
        '   ,:move_seq             ' +
        '   ,:survey_date          ' +
        '   ,:survey_desc          ' +
        '   ,:survey_result        ' +
        '   ,:survey_charger       ' +
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
            ,survey_seq           : entity.survey_seq
            ,move_seq             : entity.move_seq
            ,survey_date          : entity.survey_date
            ,survey_desc          : entity.survey_desc
            ,survey_result        : entity.survey_result
            ,survey_charger       : entity.survey_charger
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


module.exports = AssetSurvey


