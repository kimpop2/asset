/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : Dashboard
 * File          : asset_dashboard.service.js
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

var jobType = 'sql_1';
var sql;

//#########################################################
// (당월포함 6개월) 자산등록,자산이동,교환수리
//#########################################################
var sql_9 = 'SELECT \'type1\'                                                                                                             AS "key1"     \n' +
            '      ,NULL                                                                                                                  AS "key2"      \n' +
            '      ,NULL                                                                                                                  AS "key3"      \n' +
            '      ,NULL                                                                                                                  AS "key4"      \n' +
            '      ,NULL                                                                                                                  AS "key5"      \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -5), 1, 7), 1)), 0)  AS "data1"     \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -4), 1, 7), 1)), 0)  AS "data2"     \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -3), 1, 7), 1)), 0)  AS "data3"     \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -2), 1, 7), 1)), 0)  AS "data4"     \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -1), 1, 7), 1)), 0)  AS "data5"     \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE,  0), 1, 7), 1)), 0)  AS "data6"     \n' +
            '      ,NULL                                                                                                                  AS "data7"     \n' +
            '      ,NULL                                                                                                                  AS "data8"     \n' +
            '      ,NULL                                                                                                                  AS "data9"     \n' +
            '      ,NULL                                                                                                                  AS "data10"    \n' +
            '      ,NULL                                                                                                                  AS "data11"    \n' +
            '      ,NULL                                                                                                                  AS "data12"    \n' +
            '      ,NULL                                                                                                                  AS "data13"    \n' +
            '      ,NULL                                                                                                                  AS "data14"    \n' +
            '      ,NULL                                                                                                                  AS "data15"    \n' +
            'FROM   asset_master t                                                                                                                       \n' +
            'WHERE  t.acquisition_date BETWEEN TO_CHAR(ADD_MONTHS(SYSDATE, -5), \'yyyy-mm-\') || \'01\'                                                  \n' +
            '                              AND asset_mgmt_pkg.add_month_func(SYSDATE,  0)                                                                \n' +
            'UNION ALL                                                                                                                                   \n' +
            'SELECT \'type2\'                                                                                                              AS "key1"     \n' +
            '      ,NULL                                                                                                                   AS "key2"     \n' +
            '      ,NULL                                                                                                                   AS "key3"     \n' +
            '      ,NULL                                                                                                                   AS "key4"     \n' +
            '      ,NULL                                                                                                                   AS "key5"     \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.move_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -5), 1, 7), 1)), 0)          AS "data1"    \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.move_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -4), 1, 7), 1)), 0)          AS "data2"    \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.move_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -3), 1, 7), 1)), 0)          AS "data3"    \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.move_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -2), 1, 7), 1)), 0)          AS "data4"    \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.move_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -1), 1, 7), 1)), 0)          AS "data5"    \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.move_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE,  0), 1, 7), 1)), 0)          AS "data6"    \n' +
            '      ,NULL                                                                                                                   AS "data7"    \n' +
            '      ,NULL                                                                                                                   AS "data8"    \n' +
            '      ,NULL                                                                                                                   AS "data9"    \n' +
            '      ,NULL                                                                                                                   AS "data10"   \n' +
            '      ,NULL                                                                                                                   AS "data11"   \n' +
            '      ,NULL                                                                                                                   AS "data12"   \n' +
            '      ,NULL                                                                                                                   AS "data13"   \n' +
            '      ,NULL                                                                                                                   AS "data14"   \n' +
            '      ,NULL                                                                                                                   AS "data15"   \n' +
            'FROM   asset_move t                                                                                                                         \n' +
            'WHERE  t.move_date BETWEEN TO_CHAR(ADD_MONTHS(SYSDATE, -5), \'yyyy-mm-\') || \'01\'                                                         \n' +
            '                       AND asset_mgmt_pkg.add_month_func(SYSDATE,  0)                                                                       \n' +
            '   AND t.move_flag IN(\'RENT\', \'RETURN\')                                                                                                 \n' +
            'UNION ALL                                                                                                                                   \n' +
            'SELECT \'type3\'                                                                                                              AS "key1"     \n' +
            '      ,NULL                                                                                                                   AS "key2"     \n' +
            '      ,NULL                                                                                                                   AS "key3"     \n' +
            '      ,NULL                                                                                                                   AS "key4"     \n' +
            '      ,NULL                                                                                                                   AS "key5"     \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.ex_re_req_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -5), 1, 7), 1)), 0)     AS "data1"    \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.ex_re_req_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -4), 1, 7), 1)), 0)     AS "data2"    \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.ex_re_req_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -3), 1, 7), 1)), 0)     AS "data3"    \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.ex_re_req_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -2), 1, 7), 1)), 0)     AS "data4"    \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.ex_re_req_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE, -1), 1, 7), 1)), 0)     AS "data5"    \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.ex_re_req_date, 1, 7), SUBSTRB(asset_mgmt_pkg.add_month_func(SYSDATE,  0), 1, 7), 1)), 0)     AS "data6"    \n' +
            '      ,NULL                                                                                                                   AS "data7"    \n' +
            '      ,NULL                                                                                                                   AS "data8"    \n' +
            '      ,NULL                                                                                                                   AS "data9"    \n' +
            '      ,NULL                                                                                                                   AS "data10"   \n' +
            '      ,NULL                                                                                                                   AS "data11"   \n' +
            '      ,NULL                                                                                                                   AS "data12"   \n' +
            '      ,NULL                                                                                                                   AS "data13"   \n' +
            '      ,NULL                                                                                                                   AS "data14"   \n' +
            '      ,NULL                                                                                                                   AS "data15"   \n' +
            'FROM   asset_ex_repair t                                                                                                                    \n' +
            'WHERE  t.ex_re_req_date BETWEEN TO_CHAR(ADD_MONTHS(SYSDATE, -5), \'yyyy-mm-\') || \'01\'                                                    \n' +
            '                            AND asset_mgmt_pkg.add_month_func(SYSDATE,  0)                                                                  \n';


//#########################################################
// (당월-6) ~ 당월까지의 자산 등록,교환수리,폐기 건수
//#########################################################
var sql_1 = 'SELECT (SELECT COUNT(*) --자산등록                                                  \n' +
            '        FROM   asset_master t                                                       \n' +
            '        WHERE  t.acquisition_date                                                   \n' +
            '               BETWEEN asset_mgmt_pkg.add_month_func(SYSDATE, -6)                   \n' +
            '                   AND asset_mgmt_pkg.add_month_func(SYSDATE, 0))      AS "key1"    \n' +
            '      ,(SELECT COUNT(*) --교환수리                                                  \n' +
            '        FROM   asset_ex_repair t                                                    \n' +
            '        WHERE  t.ex_re_req_date                                                     \n' +
            '               BETWEEN asset_mgmt_pkg.add_month_func(SYSDATE, -6)                   \n' +
            '                   AND asset_mgmt_pkg.add_month_func(SYSDATE, 0))      AS "key2"    \n' +
            '      ,(SELECT COUNT(*)  --자산폐기                                                 \n' +
            '        FROM   asset_disuse t                                                       \n' +
            '        WHERE  t.disuse_date                                                        \n' +
            '               BETWEEN asset_mgmt_pkg.add_month_func(SYSDATE, -6)                   \n' +
            '                   AND asset_mgmt_pkg.add_month_func(SYSDATE, 0))      AS "key3"    \n' +
            '      ,NULL                                                            AS "key4"    \n' +
            '      ,NULL                                                            AS "key5"    \n' +
            '      ,NULL                                                            AS "data1"   \n' +
            '      ,NULL                                                            AS "data2"   \n' +
            '      ,NULL                                                            AS "data3"   \n' +
            '      ,NULL                                                            AS "data4"   \n' +
            '      ,NULL                                                            AS "data5"   \n' +
            '      ,NULL                                                            AS "data6"   \n' +
            '      ,NULL                                                            AS "data7"   \n' +
            '      ,NULL                                                            AS "data8"   \n' +
            '      ,NULL                                                            AS "data9"   \n' +
            '      ,NULL                                                            AS "data10"  \n' +
            '      ,NULL                                                            AS "data11"  \n' +
            '      ,NULL                                                            AS "data12"  \n' +
            '      ,NULL                                                            AS "data13"  \n' +
            '      ,NULL                                                            AS "data14"  \n' +
            '      ,NULL                                                            AS "data15"  \n' +
            'FROM   DUAL                                                                         \n';

//#########################################################
// 당해년도 1~12월 사이의 자산 등록,폐기 건수
//#########################################################
var sql_2 = 'SELECT \'type1\'                                                         AS "key1"                  \n' +
            '      ,NULL                                                              AS "key2"                  \n' +
            '      ,NULL                                                              AS "key3"                  \n' +
            '      ,NULL                                                              AS "key4"                  \n' +
            '      ,NULL                                                              AS "key5"                  \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 6, 2), \'01\', 1)), 0) AS "data1"                 \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 6, 2), \'02\', 1)), 0) AS "data2"                 \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 6, 2), \'03\', 1)), 0) AS "data3"                 \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 6, 2), \'04\', 1)), 0) AS "data4"                 \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 6, 2), \'05\', 1)), 0) AS "data5"                 \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 6, 2), \'06\', 1)), 0) AS "data6"                 \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 6, 2), \'07\', 1)), 0) AS "data7"                 \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 6, 2), \'08\', 1)), 0) AS "data8"                 \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 6, 2), \'09\', 1)), 0) AS "data9"                 \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 6, 2), \'10\', 1)), 0) AS "data10"                \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 6, 2), \'11\', 1)), 0) AS "data11"                \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.acquisition_date, 6, 2), \'12\', 1)), 0) AS "data12"                \n' +
            '      ,NULL                                                              AS "data13"                \n' +
            '      ,NULL                                                              AS "data14"                \n' +
            '      ,NULL                                                              AS "data15"                \n' +
            'FROM   asset_master t                                                                               \n' +
            'WHERE  t.acquisition_date BETWEEN :yyyy || \'-01-01\'                                           \n' +
            '                              AND :yyyy || \'-12-31\'                                           \n' +
            '                                                                                                    \n' +
            'UNION ALL                                                                                           \n' +
            '                                                                                                    \n' +
            'SELECT \'type2\'                                                    AS "key1"                       \n' +
            '      ,NULL                                                         AS "key2"                       \n' +
            '      ,NULL                                                         AS "key3"                       \n' +
            '      ,NULL                                                         AS "key4"                       \n' +
            '      ,NULL                                                         AS "key5"                       \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.disuse_date, 6, 2), \'01\', 1)), 0) AS "data1"                      \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.disuse_date, 6, 2), \'02\', 1)), 0) AS "data2"                      \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.disuse_date, 6, 2), \'03\', 1)), 0) AS "data3"                      \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.disuse_date, 6, 2), \'04\', 1)), 0) AS "data4"                      \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.disuse_date, 6, 2), \'05\', 1)), 0) AS "data5"                      \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.disuse_date, 6, 2), \'06\', 1)), 0) AS "data6"                      \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.disuse_date, 6, 2), \'07\', 1)), 0) AS "data7"                      \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.disuse_date, 6, 2), \'08\', 1)), 0) AS "data8"                      \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.disuse_date, 6, 2), \'09\', 1)), 0) AS "data9"                      \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.disuse_date, 6, 2), \'10\', 1)), 0) AS "data10"                     \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.disuse_date, 6, 2), \'11\', 1)), 0) AS "data11"                     \n' +
            '      ,NVL(SUM(DECODE(SUBSTRB(t.disuse_date, 6, 2), \'12\', 1)), 0) AS "data12"                     \n' +
            '      ,NULL                                                         AS "data13"                     \n' +
            '      ,NULL                                                         AS "data14"                     \n' +
            '      ,NULL                                                         AS "data15"                     \n' +
            'FROM   asset_disuse t                                                                               \n' +
            'WHERE  t.disuse_date BETWEEN :yyyy || \'-01-01\'                                                \n' +
            '                         AND :yyyy || \'-12-31\'                                                \n';

//#########################################################
// 당일 등록,폐기,고장신고,대여,반납,교환수리 건수
//#########################################################
var sql_3 = 'SELECT NULL                                                           AS "key1"    \n' +
            '      ,NULL                                                           AS "key2"    \n' +
            '      ,NULL                                                           AS "key3"    \n' +
            '      ,NULL                                                           AS "key4"    \n' +
            '      ,NULL                                                           AS "key5"    \n' +
            '      ,(SELECT COUNT(*) --신규등록                                                 \n' +
            '        FROM   asset_master t                                                      \n' +
            '        WHERE  t.acquisition_date = TO_CHAR(SYSDATE, \'yyyy-mm-dd\')) AS "data1"   \n' +
            '      ,(SELECT COUNT(*)  --자산폐기                                                \n' +
            '        FROM   asset_disuse t                                                      \n' +
            '        WHERE  t.disuse_date      = TO_CHAR(SYSDATE, \'yyyy-mm-dd\')) AS "data2"   \n' +
            '      ,(SELECT COUNT(*)  --고장신고                                                \n' +
            '        FROM   asset_request t                                                     \n' +
            '        WHERE  t.request_date     = TO_CHAR(SYSDATE, \'yyyy-mm-dd\')               \n' +
            '           AND t.request_flag = \'R01\')                              AS "data3"   \n' +
            '      ,(SELECT COUNT(*)  --대여                                                    \n' +
            '        FROM   asset_move t                                                        \n' +
            '        WHERE  t.move_date        = TO_CHAR(SYSDATE, \'yyyy-mm-dd\')               \n' +
            '           AND t.move_flag = \'RENT\')                                AS "data4"   \n' +
            '      ,(SELECT COUNT(*)  --반납                                                    \n' +
            '        FROM   asset_move t                                                        \n' +
            '        WHERE  t.move_date        = TO_CHAR(SYSDATE, \'yyyy-mm-dd\')               \n' +
            '           AND t.move_flag = \'RETURN\')                              AS "data5"   \n' +
            '      ,(SELECT COUNT(*) --교환수리                                                 \n' +
            '        FROM   asset_ex_repair t                                                   \n' +
            '        WHERE  t.ex_re_date       = TO_CHAR(SYSDATE, \'yyyy-mm-dd\')               \n' +
            '           AND ex_re_req_flag IN(\'E\', \'R\'))                       AS "data6"   \n' +
            '      ,NULL                                                           AS "data7"   \n' +
            '      ,NULL                                                           AS "data8"   \n' +
            '      ,NULL                                                           AS "data9"   \n' +
            '      ,NULL                                                           AS "data10"  \n' +
            '      ,NULL                                                           AS "data11"  \n' +
            '      ,NULL                                                           AS "data12"  \n' +
            '      ,NULL                                                           AS "data13"  \n' +
            '      ,NULL                                                           AS "data14"  \n' +
            '      ,NULL                                                           AS "data15"  \n' +
            'FROM   DUAL                                                                        \n';

//#########################################################
// 설치장소별 자산 등록 건수(top 10)
//#########################################################
var sql_4 = 'SELECT a.install_area_name AS "key1"                                                                             \n' +
            '      ,a.rrank             AS "key2"                                                                             \n' +
            '      ,a.cnt               AS "key3"                                                                             \n' +
            '      ,NULL                AS "key4"                                                                             \n' +
            '      ,NULL                AS "key5"                                                                             \n' +
            '      ,NULL                AS "data1"                                                                            \n' +
            '      ,NULL                AS "data2"                                                                            \n' +
            '      ,NULL                AS "data3"                                                                            \n' +
            '      ,NULL                AS "data4"                                                                            \n' +
            '      ,NULL                AS "data5"                                                                            \n' +
            '      ,NULL                AS "data6"                                                                            \n' +
            '      ,NULL                AS "data7"                                                                            \n' +
            '      ,NULL                AS "data8"                                                                            \n' +
            '      ,NULL                AS "data9"                                                                            \n' +
            '      ,NULL                AS "data10"                                                                           \n' +
            '      ,NULL                AS "data11"                                                                           \n' +
            '      ,NULL                AS "data12"                                                                           \n' +
            '      ,NULL                AS "data13"                                                                           \n' +
            '      ,NULL                AS "data14"                                                                           \n' +
            '      ,NULL                AS "data15"                                                                           \n' +
            'FROM   (SELECT am.install_area_code                                                                              \n' +
            '              ,DECODE(lang.lang, \'ko\', ia.install_area_name, ia.install_area_name_local) AS install_area_name  \n' +
            '              ,RANK() OVER (ORDER BY am.cnt DESC)                                        AS rrank                \n' +
            '              ,cnt                                                                       AS cnt                  \n' +
            '        FROM   (SELECT am.install_area_code        AS install_area_code                                          \n' +
            '                      ,COUNT(am.install_area_code) AS cnt                                                        \n' +
            '                FROM   asset_master am                                                                           \n' +
            '                GROUP BY am.install_area_code                                                                    \n' +
            '               )am                                                                                               \n' +
            '              ,installation_area ia                                                                              \n' +
            '              ,language          lang                                                                            \n' +
            '        WHERE  am.install_area_code = ia.install_area_code                                                       \n' +
            '           AND lang.lang            = \'ko\'                                                                     \n' +
            '        )a                                                                                                       \n' +
            'WHERE rownum <= 10                                                                                               \n';

//#########################################################
// 자산분류별 자산 등록 건수(top 10)
//#########################################################
var sql_5 = 'SELECT a.asset_cat_name   AS "key1"                                                                       \n' +
            '      ,a.rrank            AS "key2"                                                                       \n' +
            '      ,a.cnt              AS "key3"                                                                       \n' +
            '      ,NULL               AS "key4"                                                                       \n' +
            '      ,NULL               AS "key5"                                                                       \n' +
            '      ,NULL               AS "data1"                                                                      \n' +
            '      ,NULL               AS "data2"                                                                      \n' +
            '      ,NULL               AS "data3"                                                                      \n' +
            '      ,NULL               AS "data4"                                                                      \n' +
            '      ,NULL               AS "data5"                                                                      \n' +
            '      ,NULL               AS "data6"                                                                      \n' +
            '      ,NULL               AS "data7"                                                                      \n' +
            '      ,NULL               AS "data8"                                                                      \n' +
            '      ,NULL               AS "data9"                                                                      \n' +
            '      ,NULL               AS "data10"                                                                     \n' +
            '      ,NULL               AS "data11"                                                                     \n' +
            '      ,NULL               AS "data12"                                                                     \n' +
            '      ,NULL               AS "data13"                                                                     \n' +
            '      ,NULL               AS "data14"                                                                     \n' +
            '      ,NULL               AS "data15"                                                                     \n' +
            'FROM   (SELECT am.asset_cat_code                                                                          \n' +
            '              ,DECODE(lang.lang, \'ko\', ac.asset_cat_name, ac.asset_cat_name_local)  AS asset_cat_name   \n' +
            '              ,RANK() OVER (ORDER BY am.cnt DESC)                                     AS rrank            \n' +
            '              ,cnt                                                                    AS cnt              \n' +
            '        FROM   (SELECT am.asset_cat_code           AS asset_cat_code                                      \n' +
            '                      ,COUNT(am.asset_cat_code)    AS cnt                                                 \n' +
            '                FROM   asset_master am                                                                    \n' +
            '                GROUP BY am.asset_cat_code                                                                \n' +
            '               )am                                                                                        \n' +
            '              ,asset_category    ac                                                                       \n' +
            '              ,language          lang                                                                     \n' +
            '        WHERE  am.asset_cat_code = ac.asset_cat_code                                                      \n' +
            '           AND lang.lang            = \'ko\'                                                              \n' +
            '       )a                                                                                                 \n' +
            'WHERE rownum <= 10                                                                                        \n';

//#########################################################
// 관리부서별 자산 등록 건수(top 5)
//#########################################################
var sql_6 = 'SELECT a.cost_center_name AS "key1"                                                                           \n' +
            '      ,a.rrank            AS "key2"                                                                           \n' +
            '      ,a.cnt              AS "key3"                                                                           \n' +
            '      ,NULL               AS "key4"                                                                           \n' +
            '      ,NULL               AS "key5"                                                                           \n' +
            '      ,NULL               AS "data1"                                                                          \n' +
            '      ,NULL               AS "data2"                                                                          \n' +
            '      ,NULL               AS "data3"                                                                          \n' +
            '      ,NULL               AS "data4"                                                                          \n' +
            '      ,NULL               AS "data5"                                                                          \n' +
            '      ,NULL               AS "data6"                                                                          \n' +
            '      ,NULL               AS "data7"                                                                          \n' +
            '      ,NULL               AS "data8"                                                                          \n' +
            '      ,NULL               AS "data9"                                                                          \n' +
            '      ,NULL               AS "data10"                                                                         \n' +
            '      ,NULL               AS "data11"                                                                         \n' +
            '      ,NULL               AS "data12"                                                                         \n' +
            '      ,NULL               AS "data13"                                                                         \n' +
            '      ,NULL               AS "data14"                                                                         \n' +
            '      ,NULL               AS "data15"                                                                         \n' +
            'FROM   (SELECT am.cost_center_code                                                                            \n' +
            '              ,DECODE(lang.lang, \'ko\', cc.cost_center_name, cc.cost_center_name_local)  AS cost_center_name \n' +
            '              ,RANK() OVER (ORDER BY am.cnt DESC)                                         AS rrank            \n' +
            '              ,cnt                                                                        AS cnt              \n' +
            '        FROM   (SELECT am.cost_center_code           AS cost_center_code                                      \n' +
            '                      ,COUNT(am.cost_center_code)    AS cnt                                                   \n' +
            '                FROM   asset_master am                                                                        \n' +
            '                GROUP BY am.cost_center_code                                                                  \n' +
            '               )am                                                                                            \n' +
            '              ,cost_center       cc                                                                           \n' +
            '              ,language          lang                                                                         \n' +
            '        WHERE  cc.cost_center_code = am.cost_center_code                                                      \n' +
            '           AND lang.lang            = \'ko\'                                                                  \n' +
            '        )a                                                                                                    \n' +
            'WHERE  rownum <= 5                                                                                            \n';

//#########################################################
// 7일(D ~ D-7)간의 고장신고,교환수리 건수
//#########################################################
var sql_7 = 'SELECT \'type1\'                                                                                                                                         AS "key1"   \n' +
            '      ,TO_CHAR(SYSDATE-6, \'mm-dd\') || \' ~ \' || TO_CHAR(SYSDATE, \'mm-dd\')                                                                           AS "key2"   \n' +
            '      ,NULL                                                                                                                                              AS "key3"   \n' +
            '      ,NULL                                                                                                                                              AS "key4"   \n' +
            '      ,NULL                                                                                                                                              AS "key5"   \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.request_date,\'1900-01-01\'), \'yyyy-mm-dd\') -6, \'yyyy-mm-dd\'), 1)), 0) AS "data1"  \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.request_date,\'1900-01-01\'), \'yyyy-mm-dd\') -5, \'yyyy-mm-dd\'), 1)), 0) AS "data2"  \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.request_date,\'1900-01-01\'), \'yyyy-mm-dd\') -4, \'yyyy-mm-dd\'), 1)), 0) AS "data3"  \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.request_date,\'1900-01-01\'), \'yyyy-mm-dd\') -3, \'yyyy-mm-dd\'), 1)), 0) AS "data4"  \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.request_date,\'1900-01-01\'), \'yyyy-mm-dd\') -2, \'yyyy-mm-dd\'), 1)), 0) AS "data5"  \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.request_date,\'1900-01-01\'), \'yyyy-mm-dd\') -1, \'yyyy-mm-dd\'), 1)), 0) AS "data6"  \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.request_date,\'1900-01-01\'), \'yyyy-mm-dd\')   , \'yyyy-mm-dd\'), 1)), 0) AS "data7"  \n' +
            '      ,NULL                                                                                                                                              AS "data8"  \n' +
            '      ,NULL                                                                                                                                              AS "data9"  \n' +
            '      ,NULL                                                                                                                                              AS "data10" \n' +
            '      ,NULL                                                                                                                                              AS "data11" \n' +
            '      ,NULL                                                                                                                                              AS "data12" \n' +
            '      ,NULL                                                                                                                                              AS "data13" \n' +
            '      ,NULL                                                                                                                                              AS "data14" \n' +
            '      ,NULL                                                                                                                                              AS "data15" \n' +
            'FROM   asset_request t                                                                                                                                               \n' +
            'WHERE  t.request_date BETWEEN TO_CHAR(SYSDATE-6, \'yyyy-mm-dd\')                                                                                                     \n' +
            '                          AND TO_CHAR(SYSDATE,   \'yyyy-mm-dd\')                                                                                                     \n' +
            '   AND t.request_flag = \'R01\'                                                                                                                                      \n' +
            '                                                                                                                                                                     \n' +
            'UNION                                                                                                                                                                \n' +
            '                                                                                                                                                                     \n' +
            'SELECT \'type2\'                                                                                                                                         AS "key1"   \n' +
            '      ,NULL                                                                                                                                              AS "key2"   \n' +
            '      ,NULL                                                                                                                                              AS "key3"   \n' +
            '      ,NULL                                                                                                                                              AS "key4"   \n' +
            '      ,NULL                                                                                                                                              AS "key5"   \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.ex_re_req_date,\'19000101\'), \'yyyy-mm-dd\') -6, \'yyyy-mm-dd\'), 1)), 0) AS "data1"  \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.ex_re_req_date,\'19000101\'), \'yyyy-mm-dd\') -5, \'yyyy-mm-dd\'), 1)), 0) AS "data2"  \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.ex_re_req_date,\'19000101\'), \'yyyy-mm-dd\') -4, \'yyyy-mm-dd\'), 1)), 0) AS "data3"  \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.ex_re_req_date,\'19000101\'), \'yyyy-mm-dd\') -3, \'yyyy-mm-dd\'), 1)), 0) AS "data4"  \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.ex_re_req_date,\'19000101\'), \'yyyy-mm-dd\') -2, \'yyyy-mm-dd\'), 1)), 0) AS "data5"  \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.ex_re_req_date,\'19000101\'), \'yyyy-mm-dd\') -1, \'yyyy-mm-dd\'), 1)), 0) AS "data6"  \n' +
            '      ,NVL(SUM(DECODE(TO_CHAR(SYSDATE, \'yyyy-mm-dd\'), TO_CHAR(TO_DATE(NVL(t.ex_re_req_date,\'19000101\'), \'yyyy-mm-dd\')   , \'yyyy-mm-dd\'), 1)), 0) AS "data7"  \n' +
            '      ,NULL                                                                                                                                              AS "data8"  \n' +
            '      ,NULL                                                                                                                                              AS "data9"  \n' +
            '      ,NULL                                                                                                                                              AS "data10" \n' +
            '      ,NULL                                                                                                                                              AS "data11" \n' +
            '      ,NULL                                                                                                                                              AS "data12" \n' +
            '      ,NULL                                                                                                                                              AS "data13" \n' +
            '      ,NULL                                                                                                                                              AS "data14" \n' +
            '      ,NULL                                                                                                                                              AS "data15" \n' +
            'FROM   asset_ex_repair t                                                                                                                                             \n' +
            'WHERE  t.ex_re_req_date BETWEEN TO_CHAR(SYSDATE-6, \'yyyy-mm-dd\')                                                                                                   \n' +
            '                            AND TO_CHAR(SYSDATE+1, \'yyyy-mm-dd\')                                                                                                   \n' +
            '   AND t.ex_re_req_flag IN(\'E\', \'R\')                                                                                                                             \n';


//#########################################################
// 당일 자산관련 트랜잭션 정리
//#########################################################
var sql_8 = 'SELECT a.title       AS "key1"                                                   \n' +
            '      ,a.txn_date    AS "key2"                                                   \n' +
            '      ,a.subject     AS "key3"                                                   \n' +
            '      ,a.flag        AS "key4"                                                   \n' +
            '      ,NULL          AS "key5"                                                   \n' +
            '      ,NULL          AS "data1"                                                  \n' +
            '      ,NULL          AS "data2"                                                  \n' +
            '      ,NULL          AS "data3"                                                  \n' +
            '      ,NULL          AS "data4"                                                  \n' +
            '      ,NULL          AS "data5"                                                  \n' +
            '      ,NULL          AS "data6"                                                  \n' +
            '      ,NULL          AS "data7"                                                  \n' +
            '      ,NULL          AS "data8"                                                  \n' +
            '      ,NULL          AS "data9"                                                  \n' +
            '      ,NULL          AS "data10"                                                 \n' +
            '      ,NULL          AS "data11"                                                 \n' +
            '      ,NULL          AS "data12"                                                 \n' +
            '      ,NULL          AS "data13"                                                 \n' +
            '      ,NULL          AS "data14"                                                 \n' +
            '      ,NULL          AS "data15"                                                 \n' +
            'FROM   (SELECT \'신규등록\'                                AS title              \n' +
            '              ,TO_CHAR(t.creation_date, \'HH24:MI:SS\')    AS txn_date           \n' +
            '              ,t.asset_name                                AS subject            \n' +
            '              ,\'type1\'                                   AS flag               \n' +
            '        FROM   asset_master t                                                    \n' +
            '        WHERE  TRUNC(t.creation_date) = TRUNC(SYSDATE)                           \n' +
            '        UNION ALL                                                                \n' +
            '                                                                                 \n' +
            '        SELECT \'자산폐기\'                                AS title              \n' +
            '              ,TO_CHAR(t.creation_date, \'HH24:MI:SS\')    AS txn_date           \n' +
            '              ,a.asset_name                                AS subject            \n' +
            '              ,\'type2\'                                   AS flag               \n' +
            '        FROM   asset_disuse t                                                    \n' +
            '              ,asset_master a                                                    \n' +
            '        WHERE  a.asset_code = t.asset_code                                       \n' +
            '           AND t.disuse_date = TO_CHAR(SYSDATE, \'yyyy-mm-dd\')                  \n' +
            '        UNION ALL                                                                \n' +
            '                                                                                 \n' +
            '        SELECT \'고장신고\'                                AS title              \n' +
            '              ,TO_CHAR(t.creation_date, \'HH24:MI:SS\')    AS txn_date           \n' +
            '              ,a.asset_name                                AS subject            \n' +
            '              ,\'type3\'                                   AS flag               \n' +
            '        FROM   asset_request t                                                   \n' +
            '              ,asset_master  a                                                   \n' +
            '        WHERE  a.asset_code   = t.asset_code                                     \n' +
            '           AND t.request_flag = \'R01\'                                          \n' +
            '           AND t.request_date = TO_CHAR(SYSDATE, \'yyyy-mm-dd\')                 \n' +
            '        UNION ALL                                                                \n' +
            '                                                                                 \n' +
            '        SELECT \'자산대여\'                                AS title              \n' +
            '              ,TO_CHAR(t.creation_date, \'HH24:MI:SS\')    AS txn_date           \n' +
            '              ,a.asset_name                                AS subject            \n' +
            '              ,\'type4\'                                   AS flag               \n' +
            '        FROM   asset_move    t                                                   \n' +
            '              ,asset_master  a                                                   \n' +
            '        WHERE  a.asset_code = t.asset_code                                       \n' +
            '           AND t.move_flag  = \'RENT\'                                           \n' +
            '           AND t.move_date = TO_CHAR(SYSDATE, \'yyyy-mm-dd\')                    \n' +
            '        UNION ALL                                                                \n' +
            '                                                                                 \n' +
            '        SELECT \'자산반납\'                                AS title              \n' +
            '              ,TO_CHAR(t.creation_date, \'HH24:MI:SS\')    AS txn_date           \n' +
            '              ,a.asset_name                                AS subject            \n' +
            '              ,\'type5\'                                   AS flag               \n' +
            '        FROM   asset_move    t                                                   \n' +
            '              ,asset_master  a                                                   \n' +
            '        WHERE  a.asset_code = t.asset_code                                       \n' +
            '           AND t.move_flag  = \'RETURN\'                                         \n' +
            '           AND t.move_date = TO_CHAR(SYSDATE, \'yyyy-mm-dd\')                    \n' +
            '                                                                                 \n' +
            '        UNION ALL                                                                \n' +
            '                                                                                 \n' +
            '        SELECT \'교환수리\'                                AS title              \n' +
            '              ,TO_CHAR(t.creation_date, \'HH24:MI:SS\')    AS txn_date           \n' +
            '              ,a.asset_name                                AS subject            \n' +
            '              ,\'type6\'                                   AS flag               \n' +
            '        FROM   asset_ex_repair t                                                 \n' +
            '              ,asset_master    a                                                 \n' +
            '        WHERE  a.asset_code      = t.asset_code                                  \n' +
            '           AND t.ex_re_req_flag IN(\'E\', \'R\')                                 \n' +
            '           AND t.ex_re_req_date = TO_CHAR(SYSDATE, \'yyyy-mm-dd\')               \n' +
            '       )a                                                                        \n' +
            'ORDER BY txn_date DESC                                                           \n';

//#########################################################
// 자산 고장신고 리스트(미완료내역)
//#########################################################
var sql_10 ='SELECT ar.request_seq                                                              as "key1"    \n' +
            '      ,am.asset_code                                                               as "key2"    \n' +
            '      ,DECODE(lang.lang, \'ko\', am.asset_name, am.asset_name_local)               as "key3"    \n' +
            '      ,NULL                                                                        as "key4"    \n' +
            '      ,NULL                                                                        as "key5"    \n' +
            '      ,ar.request_charger                                                          as "data1"   \n' +
            '      ,ar.req_subject                                                              as "data2"   \n' +
            '      ,ar.request_desc                                                             as "data3"   \n' +
            '      ,ar.process_flag                                                             as "data4"   \n' +
            '      ,cd.code_desc                                                                as "data5"   \n' +
            '      ,ar.creation_date                                                            as "data6"   \n' +
            '      ,DECODE(lang.lang, \'ko\', ia.install_area_name, ia.install_area_name_local) as "data7"   \n' +
            '      ,NULL                                                                        as "data8"   \n' +
            '      ,NULL                                                                        AS "data9"   \n' +
            '      ,NULL                                                                        AS "data10"  \n' +
            '      ,NULL                                                                        AS "data11"  \n' +
            '      ,NULL                                                                        AS "data12"  \n' +
            '      ,NULL                                                                        AS "data13"  \n' +
            '      ,NULL                                                                        AS "data14"  \n' +
            '      ,NULL                                                                        AS "data15"  \n' +
            'FROM   asset_master      am                                                                     \n' +
            '      ,asset_category    ac                                                                     \n' +
            '      ,cost_center       cc                                                                     \n' +
            '      ,installation_area ia                                                                     \n' +
            '      ,asset_request     ar                                                                     \n' +
            '      ,(SELECT code_type                                                                        \n' +
            '              ,lang                                                                             \n' +
            '              ,code                                                                             \n' +
            '              ,code_desc                                                                        \n' +
            '        FROM   common_code                                                                      \n' +
            '        WHERE  code_type =\'ASSET_PROC_FLAG\'                                                   \n' +
            '           AND lang      = \'ko\'                                                               \n' +
            '       )cd                                                                                      \n' +
            '      ,language          lang                                                                   \n' +
            'WHERE  am.asset_cat_code    = ac.asset_cat_code(+)                                              \n' +
            '   AND am.cost_center_code  = cc.cost_center_code(+)                                            \n' +
            '   AND am.install_area_code = ia.install_area_code(+)                                           \n' +
            '   AND am.asset_code        = ar.asset_code                                                     \n' +
            '   AND cd.code              = ar.process_flag                                                   \n' +
            '   AND ar.request_flag     IN(\'R01\')                                                          \n' +
            '   AND ar.process_flag     IN(\'P01\', \'P02\')                                                 \n' +
            '   AND lang.lang            = \'ko\'                                                            \n';

function buildConditions(search) {
    var conditions = [];
    var values = [];

    if (typeof search.command !== 'undefined') {

        //hgjang
        var jobType = search.command;
        if(jobType      === 'sql_1'){
            sql = sql_1;
        }
        else if(jobType === 'sql_2'){
            sql = sql_2;
        }
        else if(jobType === 'sql_3'){
            sql = sql_3;
        }
        else if(jobType === 'sql_4'){
            sql = sql_4;
        }
        else if(jobType === 'sql_5'){
            sql = sql_5;
        }
        else if(jobType === 'sql_6'){
            sql = sql_6;
        }
        else if(jobType === 'sql_7'){
            sql = sql_7;
        }
        else if(jobType === 'sql_8'){
            sql = sql_8;
        }
        else if(jobType === 'sql_9'){
            sql = sql_9;
        }
        else if(jobType === 'sql_10'){
            sql = sql_10;
        }

        //검색조건 sql_2인 경우 연도 4자리
        if (typeof search.yyyy !== 'undefined') {
            values.push(search.yyyy);
        }
    }
    return {
        where: conditions.length ? conditions.join(' AND ') : '1 = 1',
        values: values
    };
}

DashboardView.method('search', function(cb){

    var search = this.param;
    var conditions = buildConditions(search);
    var where = {};
    if (typeof search.yyyy !== 'undefined') {
        where.yyyy = search.yyyy;
    }

    //log
    console.log(sql);

    database.simpleExecute(
        sql,
        where, //sql_2인 경우에만 의미있슴
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

/*DashboardView.method('findByKey', function(cb){
    var search = this.param;

    database.simpleExecute(
        query  + ' WHERE ' +
        ,
        {
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

DashboardView.method('findById', function(cb){
    var search = this.param;

    database.simpleExecute(
        query +
        ' WHERE ' +
        '    object_id = :object_id',
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
        cb(error, null);
     });
});*/

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

function DashboardView(param){
    this.param = param || {};
}

module.exports = DashboardView
