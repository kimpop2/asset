/* *********************************************************************
 * Copyright (c) 2016, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)신창코넥타 급여관리
 * Program Name  : 급여 근태 현황
 * File          : server.js
 * Description   :
 *
 * Author        :
 * Creation Date :
 * Updated  Date :
 * ********************************************************************/
var http = require('http');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config/config'); // get config file
var dbconfig = config[config.dbkind];
var database = require('./db/' + config.dbkind); // /db/oracle.js

var openHttpConnections = {};
var app;
var port = '5000';
var httpServer;

process.on('uncaughtException', function(err) {
    console.error('Uncaught exception ', err);

    shutdown();
});

process.on('SIGTERM', function () {
    console.log('Received SIGTERM');

    shutdown();
});

process.on('SIGINT', function () {
    console.log('Received SIGINT');

    shutdown();
});


initApp();

function initApp() {

    app = express();
    httpServer = http.Server(app);

    app.use(logger('combined')); //logger
    
    // 정적 디렉토리 셋팅
    app.use(express.static(path.join(__dirname, 'app/www')));

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/www/index.html'));
    });

    // get our request parameters
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    
    // 추가
    require('./routes')(app);

    app.use(handleError);

    /*
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    */
    
    httpServer.on('connection', function(conn) {
        var key = conn.remoteAddress + ':' + (conn.remotePort || '');
        console.log(key);
        openHttpConnections[key] = conn;

        conn.on('close', function() {
            delete openHttpConnections[key];
        });
    });
    /*
    database.addBuildupSql({
        sql: "BEGIN EXECUTE IMMEDIATE q'[alter session set NLS_DATE_FORMAT='DD-MM-YYYY']'; END;"
    });

    database.addTeardownSql({
        sql: "BEGIN sys.dbms_session.modify_package_state(sys.dbms_session.reinitialize); END;"
    });
    */
    database.createPool(dbconfig)
        .then(function() {

            httpServer.listen(port, function() {
                console.log('Webserver listening on port:' + port);
            });
        })
        .catch(function(err) {
            console.error('Error occurred creating database connection pool', err);
            console.log('Exiting process');
            process.exit(0);
        });
    
}

function handleError(err, req, res, next) {
    console.error(err);
    res.status(err.status || 500);
    res.send({
        success: false,
        msg: err.message || 'An error has occurred, please contact support if the error persists'
    });
    
    //shutdown();//process would usually be restarted via something like https://github.com/foreverjs/forever
}


function shutdown() {
    console.log('Shutting down');
    console.log('Closing web server');

    httpServer.close(function () {
        console.log('Web server closed');

        database.terminatePool()
            .then(function() {
                console.log('node-' + config.dbkind +' connection pool terminated');
                console.log('Exiting process');
                process.exit(0);
            })
            .catch(function(err) {
                console.error('Error occurred while terminating node-' + config.dbkind +' connection pool', err);
                console.log('Exiting process');
                process.exit(0);
            });
    });

    for (key1 in openHttpConnections) {
        openHttpConnections[key1].destroy();
    }
}
