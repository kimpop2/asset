/* *********************************************************************
 * Copyright (c) 2014, COPYRIGHTⓒ2014 eBiz-Pro. ALL RIGHTS RESERVED.
 *
 * Project       : (주)대동 연구소 자산관리
 * Program Name  : 자산마스타
 * File          : assetMasterCtrl.js
 * Description   :
 *                 
 * Author        :
 * Creation Date :
 * Creation Date :
 * ******************************************************************** */
(function() {
    'use strict';
    
    app.service('ebizList', ['asset_master', 'common_code', 'asset_user', 'asset_category', 'calibration_range', 'cost_center', 'installation_area', 'language', 'asset_common_part', 'asset_part', '$translate',
    function(asset_master, common_code, asset_user, asset_category, calibration_range, cost_center, installation_area, language, asset_common_part, asset_part, $translate){
    
        //메시지 타이틀, 내용, alert 유형(success, warning, error), 2초후 alert창 close됨
        this.list = function(list_type) {
            var list = [];
            var trans_lang = $translate.use();

            if(list_type === 'common_code') {
                common_code.search()
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }

            else if(list_type === 'user_role') {
                common_code.search({ "code_type": "USER_ROLE", "lang" : trans_lang })
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            else if(list_type === 'asset_proc_flag') {
                common_code.search({ "code_type": "ASSET_PROC_FLAG", "lang" : trans_lang })
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            else if(list_type === 'asset_req_flag') {
                common_code.search({"code_type": "ASSET_REQ_FLAG", "lang" : trans_lang })
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            else if(list_type === 'disuse_reason') {
                common_code.search({ "code_type": "DISUSE_REASON", "lang" : trans_lang })
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            else if(list_type === 'ex_re_proc_flag') {
                common_code.search({ "code_type": "EX_RE_PROC_FLAG", "lang" : trans_lang })
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            else if(list_type === 'ex_re_req_flag') {
                common_code.search({ "code_type": "EX_RE_REQ_FLAG", "lang" : trans_lang })
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            else if(list_type === 'file_flag') {
                common_code.search({ "code_type": "FILE_FLAG", "lang" : trans_lang })
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            else if(list_type === 'inspection_flag') {
                common_code.search({ "code_type": "INSPECTION_FLAG", "lang" : trans_lang })
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            else if(list_type === 'inspection_unit') {
                var param = { code_type: 'INSPECTION_UNIT', lang : trans_lang };
                common_code.search(param)
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            else if(list_type === 'move_flag') {
                common_code.search({"code_type": "MOVE_FLAG", "lang" : trans_lang})
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            else if(list_type === 'survey_result') {
                common_code.search({ "code_type": "SURVEY_RESULT", "lang" : trans_lang })
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            else if(list_type === 'use_status') {
                common_code.search({ "code_type": "USE_STATUS", "lang" : trans_lang })
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            else if(list_type === 'yes_no') {
                common_code.search({ "code_type": "YES_NO", "lang" : trans_lang })
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.code, name: row.code_desc});
                    });
                });
            }
            
            else if(list_type ===  'asset_master') { 
                asset_master.search()
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.asset_code, name: row.asset_name});
                    });
                });
            }
            else if(list_type ===  'asset_user') { 
                asset_user.search()
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.user_id, name: row.user_name});
                    });
                });
            }
            else if(list_type ===  'asset_category') { 
                asset_category.search()
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.asset_cat_code, name: row.asset_cat_name});
                    });
                });
            }
            else if(list_type === 'calibration_range') { 
                calibration_range.search()
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.calibration_code, name: row.calibration_value});
                    });
                });
            }
            else if(list_type ===  'cost_center') {
                cost_center.search()
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.cost_center_code, name: row.cost_center_name});
                    });
                });
            }
            else if(list_type ===  'installation_area') { 
                installation_area.search()
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.install_area_code, name: row.install_area_name});
                    });
                }); 
            }
            else if(list_type ===  'language') {
                language.search()
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.lang, name: row.lang_name});
                    });
                });
            }
            else if(list_type === 'asset_common_part') { 
                asset_common_part.search()
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.part_no, name: row.part_name});
                    });
                });
            }
            else if(list_type === 'asset_part') { 
                asset_part.search()
                .then(function(response) { 
                    response.forEach(function(row) {
                        list.push({code: row.part_no, name: row.part_name});
                    });
                });
            }
        
            
            else {
                list.push({code:'', name: 'no list exist!!'});
            }
            return list;
        };    

        this.find = function(list, code) {
            
            list.forEach(function(row) {
                if(row.code == code) {
                    return row.name;
                }
            })
           
        };
    }]);
 })();