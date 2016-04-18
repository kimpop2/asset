CREATE OR REPLACE PACKAGE asset_mgmt_pkg IS
    
    PROCEDURE asset_user_proc(
     p_user_id              IN         VARCHAR2     -- 사용자id
    ,p_user_name            IN         VARCHAR2     -- 사용자명
    ,p_user_pwd             IN         VARCHAR2     -- 비밀번호
    ,p_user_role            IN         VARCHAR2     -- 역할
    ,p_phone                IN         VARCHAR2     -- 연락처
    ,p_email                IN         VARCHAR2     -- 이메일
    ,p_lang                 IN         VARCHAR2     -- 기본언어
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE asset_category_proc(
     p_asset_cat_code       IN         VARCHAR2     -- 자산분류코드
    ,p_asset_cat_name       IN         VARCHAR2     -- 자산분류명
    ,p_asset_cat_name_local IN         VARCHAR2     -- 자산분류명_지역
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE cost_center_proc(
     p_cost_center_code     IN         VARCHAR2     -- 코스트센타코드
    ,p_cost_center_name     IN         VARCHAR2     -- 코스트센타명
    ,p_cost_center_name_local IN         VARCHAR2     -- 코스트센타명_지역
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE installation_area_proc(
     p_install_area_code    IN         VARCHAR2     -- 설치장소코드
    ,p_install_area_name    IN         VARCHAR2     -- 설치장소명
    ,p_install_area_name_local IN         VARCHAR2     -- 설치장소명_지역
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE asset_part_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_asset_part_seq       IN         NUMBER       -- 부속품일련번호
    ,p_part_no              IN         VARCHAR2     -- 부속품목번호
    ,p_part_name            IN         VARCHAR2     -- 품명
    ,p_part_name_local      IN         VARCHAR2     -- 부품명_지역
    ,p_part_spec            IN         VARCHAR2     -- 규격
    ,p_quantity             IN         NUMBER       -- 재고수량
    ,p_unit_price           IN         NUMBER       -- 단가
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE asset_master_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_asset_name           IN         VARCHAR2     -- 자산명
    ,p_asset_name_local     IN         VARCHAR2     -- 자산명_지역
    ,p_asset_cat_code       IN         VARCHAR2     -- 자산분류
    ,p_cost_center_code     IN         VARCHAR2     -- 관리부서
    ,p_main_mgr_no          IN         VARCHAR2     -- 관리자_정
    ,p_sub_mgr_no           IN         VARCHAR2     -- 관리자_부
    ,p_asset_model_name     IN         VARCHAR2     -- 모델명
    ,p_manufacturer_name    IN         VARCHAR2     -- 제작회사
    ,p_purchaser_name       IN         VARCHAR2     -- 구입처
    ,p_acquisition_date     IN         VARCHAR2     -- 취득일자
    ,p_depreciation_a       IN         NUMBER       -- 감가상각년수A
    ,p_depreciation_b       IN         NUMBER       -- 감가상각년수B
    ,p_salvage_amount       IN         NUMBER       -- 잔존가액
    ,p_manufacture_no       IN         VARCHAR2     -- 제조번호
    ,p_manufacture_date     IN         VARCHAR2     -- 제조일자
    ,p_external_apperance   IN         VARCHAR2     -- 기계의외형
    ,p_gross_weight         IN         NUMBER       -- 중량
    ,p_inspection_flag      IN         VARCHAR2     -- 검교정대상여부
    ,p_inspection_period    IN         NUMBER       -- 검교정_점검주기
    ,p_inspection_unit      IN         VARCHAR2     -- 검교정_점검단위
    ,p_acquisition_amount   IN         NUMBER       -- 취득가액
    ,p_install_area_code    IN         VARCHAR2     -- 설치/보관장소
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_final_move_seq       IN         VARCHAR2     -- 최종이동일련번호
    ,p_final_disuse_seq     IN         VARCHAR2     -- 최종폐기일련번호
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE asset_request_proc(
     p_request_seq          IN         NUMBER       -- 요청일련번호
    ,p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_request_flag         IN         VARCHAR2     -- 요청구분
    ,p_request_date         IN         DATE         -- 요청일시
    ,p_request_charger      IN         VARCHAR2     -- 요청자
    ,p_req_subject          IN         VARCHAR2     -- 제목
    ,p_request_desc         IN         VARCHAR2     -- 신고내역
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_process_flag         IN         VARCHAR2     -- 처리구분
    ,p_process_date         IN         DATE         -- 처리일시
    ,p_process_charger      IN         VARCHAR2     -- 처리자
    ,p_process_desc         IN         VARCHAR2     -- 처리내역
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE asset_move_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_move_seq             IN         NUMBER       -- 이동일련번호
    ,p_install_area_code    IN         VARCHAR2     -- 이동대여반납장소
    ,p_move_flag            IN         VARCHAR2     -- 이동대여반납구분
    ,p_move_date            IN         VARCHAR2     -- 이동대여반납일자
    ,p_move_reason          IN         VARCHAR2     -- 이동대여반납사유
    ,p_reqest_charger       IN         VARCHAR2     -- 이동대여반납요청자
    ,p_process_charger      IN         VARCHAR2     -- 이동대여반납처리자
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE asset_disuse_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_disuse_seq           IN         NUMBER       -- 폐기일련번호
    ,p_disuse_date          IN         VARCHAR2     -- 폐기일자
    ,p_disuse_reason        IN         VARCHAR2     -- 폐기사유
    ,p_disuse_desc          IN         VARCHAR2     -- 폐기내역
    ,p_disuse_charger       IN         VARCHAR2     -- 폐기처리담당자
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE asset_capa_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_capa_seq             IN         NUMBER       -- 일련번호
    ,p_name                 IN         VARCHAR2     -- 항목명
    ,p_name_local           IN         VARCHAR2     -- 항목명_지역
    ,p_description          IN         VARCHAR2     -- 항목설명
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE asset_ex_repair_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_ex_re_seq            IN         NUMBER       -- 교환수리일련번호
    ,p_asset_part_seq       IN         NUMBER       -- 부속품일련번호
    ,p_request_seq          IN         NUMBER       -- 교환수리요청번호
    ,p_ex_re_req_flag       IN         VARCHAR2     -- 교환수리요청구분
    ,p_ex_re_part_name      IN         VARCHAR2     -- 교환수리품목명
    ,p_ex_re_part_desc      IN         VARCHAR2     -- 교환수리품목규격
    ,p_req_subject          IN         VARCHAR2     -- 제목
    ,p_ex_re_requester      IN         VARCHAR2     -- 교환수리요청자
    ,p_ex_re_req_date       IN         VARCHAR2     -- 교환수리요청일자
    ,p_ex_re_date           IN         VARCHAR2     -- 교환수리처리일자
    ,p_ex_re_desc           IN         VARCHAR2     -- 교환수리처리내역
    ,p_ex_re_proc_flag      IN         VARCHAR2     -- 교환수리처리상태
    ,p_ex_re_cost           IN         NUMBER       -- 교환수리비용
    ,p_ex_re_charger        IN         VARCHAR2     -- 교환수리처리담당자
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE asset_survey_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_survey_seq           IN         NUMBER       -- 실사일련번호
    ,p_move_seq             IN         NUMBER       -- 이동일련번호
    ,p_survey_date          IN         VARCHAR2     -- 실사일자
    ,p_survey_desc          IN         VARCHAR2     -- 실사내역
    ,p_survey_result        IN         VARCHAR2     -- 실사결과
    ,p_survey_charger       IN         VARCHAR2     -- 처리담당자
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE common_code_proc(
     p_object_id            IN OUT     NUMBER       -- object_id
    ,p_code_type            IN         VARCHAR2     -- 공통코드
    ,p_lang                 IN         VARCHAR2     -- 언어코드
    ,p_code                 IN         VARCHAR2     -- 코드
    ,p_code_desc            IN         VARCHAR2     -- 언어별코드명
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE asset_calibration_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_calibration_seq      IN         VARCHAR2     -- 검교정일련번호
    ,p_calibration_date     IN         VARCHAR2     -- 검교정일자
    ,p_calibration_code     IN         VARCHAR2     -- 검교정측정코드
    ,p_calibration_charger  IN         VARCHAR2     -- 검교정담당자
    ,p_calibration_result   IN         VARCHAR2     -- 검교정내역
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE calibration_range_proc(
     p_calibration_code     IN         VARCHAR2     -- 검교정측정코드
    ,p_calibration_value    IN         VARCHAR2     -- 검교정측정수식
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE language_proc(
     p_lang                 IN         VARCHAR2     -- 언어코드
    ,p_lang_name            IN         VARCHAR2     -- 언어명
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE attachment_file_proc(
     p_attach_file_seq      IN         NUMBER       -- 첨부일련번호
    ,p_file_key             IN         VARCHAR2     -- 첨부파일키
    ,p_file_name            IN         VARCHAR2     -- 파일명
    ,p_file_ext             IN         VARCHAR2     -- 파일확장자
    ,p_file_path            IN         VARCHAR2     -- 파일경로
    ,p_file_size            IN         NUMBER       -- 파일크기
    ,p_file_flag            IN         VARCHAR2     -- 파일구분
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;
PROCEDURE asset_common_part_proc(
     p_part_no              IN         VARCHAR2     -- 부속품목번호
    ,p_part_name            IN         VARCHAR2     -- 부품명
    ,p_part_name_local      IN         VARCHAR2     -- 부품명_지역
    ,p_part_spec            IN         VARCHAR2     -- 부품규격
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)
;

      
END asset_mgmt_pkg;
/
CREATE OR REPLACE PACKAGE BODY asset_mgmt_pkg IS
    PROCEDURE asset_user_proc(
     p_user_id              IN         VARCHAR2     -- 사용자id
    ,p_user_name            IN         VARCHAR2     -- 사용자명
    ,p_user_pwd             IN         VARCHAR2     -- 비밀번호
    ,p_user_role            IN         VARCHAR2     -- 역할
    ,p_phone                IN         VARCHAR2     -- 연락처
    ,p_email                IN         VARCHAR2     -- 이메일
    ,p_lang                 IN         VARCHAR2     -- 기본언어
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  사용자
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_user
    WHERE
        user_id              = p_user_id
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_user_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO asset_user (
             user_id
            ,user_name
            ,user_pwd
            ,user_role
            ,phone
            ,email
            ,lang
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_user_id
            ,p_user_name
            ,p_user_pwd
            ,p_user_role
            ,p_phone
            ,p_email
            ,p_lang
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE asset_user SET
             user_name            = p_user_name
            ,user_pwd             = p_user_pwd
            ,user_role            = p_user_role
            ,phone                = p_phone
            ,email                = p_email
            ,lang                 = p_lang
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            user_id              = p_user_id
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM asset_user
        WHERE
            user_id              = p_user_id
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_user_id :'              || p_user_id              || '},' ||
        ' { p_user_name :'            || p_user_name            || '},' ||
        ' { p_user_pwd :'             || p_user_pwd             || '},' ||
        ' { p_user_role :'            || p_user_role            || '},' ||
        ' { p_phone :'                || p_phone                || '},' ||
        ' { p_email :'                || p_email                || '},' ||
        ' { p_lang :'                 || p_lang                 || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END asset_user_proc;
PROCEDURE asset_category_proc(
     p_asset_cat_code       IN         VARCHAR2     -- 자산분류코드
    ,p_asset_cat_name       IN         VARCHAR2     -- 자산분류명
    ,p_asset_cat_name_local IN         VARCHAR2     -- 자산분류명_지역
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  자산분류
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_category
    WHERE
        asset_cat_code       = p_asset_cat_code
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_category_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO asset_category (
             asset_cat_code
            ,asset_cat_name
            ,asset_cat_name_local
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_asset_cat_code
            ,p_asset_cat_name
            ,p_asset_cat_name_local
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE asset_category SET
             asset_cat_name       = p_asset_cat_name
            ,asset_cat_name_local = p_asset_cat_name_local
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            asset_cat_code       = p_asset_cat_code
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM asset_category
        WHERE
            asset_cat_code       = p_asset_cat_code
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_asset_cat_code :'       || p_asset_cat_code       || '},' ||
        ' { p_asset_cat_name :'       || p_asset_cat_name       || '},' ||
        ' { p_asset_cat_name_local :' || p_asset_cat_name_local || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END asset_category_proc;
PROCEDURE cost_center_proc(
     p_cost_center_code     IN         VARCHAR2     -- 코스트센타코드
    ,p_cost_center_name     IN         VARCHAR2     -- 코스트센타명
    ,p_cost_center_name_local IN         VARCHAR2     -- 코스트센타명_지역
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  코스트센타
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   cost_center
    WHERE
        cost_center_code     = p_cost_center_code
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT cost_center_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO cost_center (
             cost_center_code
            ,cost_center_name
            ,cost_center_name_local
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_cost_center_code
            ,p_cost_center_name
            ,p_cost_center_name_local
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE cost_center SET
             cost_center_name     = p_cost_center_name
            ,cost_center_name_local = p_cost_center_name_local
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            cost_center_code     = p_cost_center_code
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM cost_center
        WHERE
            cost_center_code     = p_cost_center_code
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_cost_center_code :'     || p_cost_center_code     || '},' ||
        ' { p_cost_center_name :'     || p_cost_center_name     || '},' ||
        ' { p_cost_center_name_local :' || p_cost_center_name_local || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END cost_center_proc;
PROCEDURE installation_area_proc(
     p_install_area_code    IN         VARCHAR2     -- 설치장소코드
    ,p_install_area_name    IN         VARCHAR2     -- 설치장소명
    ,p_install_area_name_local IN         VARCHAR2     -- 설치장소명_지역
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  설치장소
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   installation_area
    WHERE
        install_area_code    = p_install_area_code
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT installation_area_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO installation_area (
             install_area_code
            ,install_area_name
            ,install_area_name_local
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_install_area_code
            ,p_install_area_name
            ,p_install_area_name_local
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE installation_area SET
             install_area_name    = p_install_area_name
            ,install_area_name_local = p_install_area_name_local
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            install_area_code    = p_install_area_code
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM installation_area
        WHERE
            install_area_code    = p_install_area_code
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_install_area_code :'    || p_install_area_code    || '},' ||
        ' { p_install_area_name :'    || p_install_area_name    || '},' ||
        ' { p_install_area_name_local :' || p_install_area_name_local || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END installation_area_proc;
PROCEDURE asset_part_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_asset_part_seq       IN         NUMBER       -- 부속품일련번호
    ,p_part_no              IN         VARCHAR2     -- 부속품목번호
    ,p_part_name            IN         VARCHAR2     -- 품명
    ,p_part_name_local      IN         VARCHAR2     -- 부품명_지역
    ,p_part_spec            IN         VARCHAR2     -- 규격
    ,p_quantity             IN         NUMBER       -- 재고수량
    ,p_unit_price           IN         NUMBER       -- 단가
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  장비부속품
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_part
    WHERE
        asset_code           = p_asset_code
    AND asset_part_seq       = p_asset_part_seq
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_part_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO asset_part (
             asset_code
            ,asset_part_seq
            ,part_no
            ,part_name
            ,part_name_local
            ,part_spec
            ,quantity
            ,unit_price
            ,file_key
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_asset_code
            ,p_asset_part_seq
            ,p_part_no
            ,p_part_name
            ,p_part_name_local
            ,p_part_spec
            ,p_quantity
            ,p_unit_price
            ,p_file_key
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE asset_part SET
             part_no              = p_part_no
            ,part_name            = p_part_name
            ,part_name_local      = p_part_name_local
            ,part_spec            = p_part_spec
            ,quantity             = p_quantity
            ,unit_price           = p_unit_price
            ,file_key             = p_file_key
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            asset_code           = p_asset_code
        AND asset_part_seq       = p_asset_part_seq
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM asset_part
        WHERE
            asset_code           = p_asset_code
        AND asset_part_seq       = p_asset_part_seq
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_asset_code :'           || p_asset_code           || '},' ||
        ' { p_asset_part_seq :'       || p_asset_part_seq       || '},' ||
        ' { p_part_no :'              || p_part_no              || '},' ||
        ' { p_part_name :'            || p_part_name            || '},' ||
        ' { p_part_name_local :'      || p_part_name_local      || '},' ||
        ' { p_part_spec :'            || p_part_spec            || '},' ||
        ' { p_quantity :'             || p_quantity             || '},' ||
        ' { p_unit_price :'           || p_unit_price           || '},' ||
        ' { p_file_key :'             || p_file_key             || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END asset_part_proc;
PROCEDURE asset_master_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_asset_name           IN         VARCHAR2     -- 자산명
    ,p_asset_name_local     IN         VARCHAR2     -- 자산명_지역
    ,p_asset_cat_code       IN         VARCHAR2     -- 자산분류
    ,p_cost_center_code     IN         VARCHAR2     -- 관리부서
    ,p_main_mgr_no          IN         VARCHAR2     -- 관리자_정
    ,p_sub_mgr_no           IN         VARCHAR2     -- 관리자_부
    ,p_asset_model_name     IN         VARCHAR2     -- 모델명
    ,p_manufacturer_name    IN         VARCHAR2     -- 제작회사
    ,p_purchaser_name       IN         VARCHAR2     -- 구입처
    ,p_acquisition_date     IN         VARCHAR2     -- 취득일자
    ,p_depreciation_a       IN         NUMBER       -- 감가상각년수A
    ,p_depreciation_b       IN         NUMBER       -- 감가상각년수B
    ,p_salvage_amount       IN         NUMBER       -- 잔존가액
    ,p_manufacture_no       IN         VARCHAR2     -- 제조번호
    ,p_manufacture_date     IN         VARCHAR2     -- 제조일자
    ,p_external_apperance   IN         VARCHAR2     -- 기계의외형
    ,p_gross_weight         IN         NUMBER       -- 중량
    ,p_inspection_flag      IN         VARCHAR2     -- 검교정대상여부
    ,p_inspection_period    IN         NUMBER       -- 검교정_점검주기
    ,p_inspection_unit      IN         VARCHAR2     -- 검교정_점검단위
    ,p_acquisition_amount   IN         NUMBER       -- 취득가액
    ,p_install_area_code    IN         VARCHAR2     -- 설치/보관장소
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_final_move_seq       IN         VARCHAR2     -- 최종이동일련번호
    ,p_final_disuse_seq     IN         VARCHAR2     -- 최종폐기일련번호
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  자산마스타
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_master
    WHERE
        asset_code           = p_asset_code
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_master_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO asset_master (
             asset_code
            ,asset_name
            ,asset_name_local
            ,asset_cat_code
            ,cost_center_code
            ,main_mgr_no
            ,sub_mgr_no
            ,asset_model_name
            ,manufacturer_name
            ,purchaser_name
            ,acquisition_date
            ,depreciation_a
            ,depreciation_b
            ,salvage_amount
            ,manufacture_no
            ,manufacture_date
            ,external_apperance
            ,gross_weight
            ,inspection_flag
            ,inspection_period
            ,inspection_unit
            ,acquisition_amount
            ,install_area_code
            ,file_key
            ,final_move_seq
            ,final_disuse_seq
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_asset_code
            ,p_asset_name
            ,p_asset_name_local
            ,p_asset_cat_code
            ,p_cost_center_code
            ,p_main_mgr_no
            ,p_sub_mgr_no
            ,p_asset_model_name
            ,p_manufacturer_name
            ,p_purchaser_name
            ,p_acquisition_date
            ,p_depreciation_a
            ,p_depreciation_b
            ,p_salvage_amount
            ,p_manufacture_no
            ,p_manufacture_date
            ,p_external_apperance
            ,p_gross_weight
            ,p_inspection_flag
            ,p_inspection_period
            ,p_inspection_unit
            ,p_acquisition_amount
            ,p_install_area_code
            ,p_file_key
            ,p_final_move_seq
            ,p_final_disuse_seq
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE asset_master SET
             asset_name           = p_asset_name
            ,asset_name_local     = p_asset_name_local
            ,asset_cat_code       = p_asset_cat_code
            ,cost_center_code     = p_cost_center_code
            ,main_mgr_no          = p_main_mgr_no
            ,sub_mgr_no           = p_sub_mgr_no
            ,asset_model_name     = p_asset_model_name
            ,manufacturer_name    = p_manufacturer_name
            ,purchaser_name       = p_purchaser_name
            ,acquisition_date     = p_acquisition_date
            ,depreciation_a       = p_depreciation_a
            ,depreciation_b       = p_depreciation_b
            ,salvage_amount       = p_salvage_amount
            ,manufacture_no       = p_manufacture_no
            ,manufacture_date     = p_manufacture_date
            ,external_apperance   = p_external_apperance
            ,gross_weight         = p_gross_weight
            ,inspection_flag      = p_inspection_flag
            ,inspection_period    = p_inspection_period
            ,inspection_unit      = p_inspection_unit
            ,acquisition_amount   = p_acquisition_amount
            ,install_area_code    = p_install_area_code
            ,file_key             = p_file_key
            ,final_move_seq       = p_final_move_seq
            ,final_disuse_seq     = p_final_disuse_seq
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            asset_code           = p_asset_code
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM asset_master
        WHERE
            asset_code           = p_asset_code
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_asset_code :'           || p_asset_code           || '},' ||
        ' { p_asset_name :'           || p_asset_name           || '},' ||
        ' { p_asset_name_local :'     || p_asset_name_local     || '},' ||
        ' { p_asset_cat_code :'       || p_asset_cat_code       || '},' ||
        ' { p_cost_center_code :'     || p_cost_center_code     || '},' ||
        ' { p_main_mgr_no :'          || p_main_mgr_no          || '},' ||
        ' { p_sub_mgr_no :'           || p_sub_mgr_no           || '},' ||
        ' { p_asset_model_name :'     || p_asset_model_name     || '},' ||
        ' { p_manufacturer_name :'    || p_manufacturer_name    || '},' ||
        ' { p_purchaser_name :'       || p_purchaser_name       || '},' ||
        ' { p_acquisition_date :'     || p_acquisition_date     || '},' ||
        ' { p_depreciation_a :'       || p_depreciation_a       || '},' ||
        ' { p_depreciation_b :'       || p_depreciation_b       || '},' ||
        ' { p_salvage_amount :'       || p_salvage_amount       || '},' ||
        ' { p_manufacture_no :'       || p_manufacture_no       || '},' ||
        ' { p_manufacture_date :'     || p_manufacture_date     || '},' ||
        ' { p_external_apperance :'   || p_external_apperance   || '},' ||
        ' { p_gross_weight :'         || p_gross_weight         || '},' ||
        ' { p_inspection_flag :'      || p_inspection_flag      || '},' ||
        ' { p_inspection_period :'    || p_inspection_period    || '},' ||
        ' { p_inspection_unit :'      || p_inspection_unit      || '},' ||
        ' { p_acquisition_amount :'   || p_acquisition_amount   || '},' ||
        ' { p_install_area_code :'    || p_install_area_code    || '},' ||
        ' { p_file_key :'             || p_file_key             || '},' ||
        ' { p_final_move_seq :'       || p_final_move_seq       || '},' ||
        ' { p_final_disuse_seq :'     || p_final_disuse_seq     || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END asset_master_proc;
PROCEDURE asset_request_proc(
     p_request_seq          IN         NUMBER       -- 요청일련번호
    ,p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_request_flag         IN         VARCHAR2     -- 요청구분
    ,p_request_date         IN         DATE         -- 요청일시
    ,p_request_charger      IN         VARCHAR2     -- 요청자
    ,p_req_subject          IN         VARCHAR2     -- 제목
    ,p_request_desc         IN         VARCHAR2     -- 신고내역
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_process_flag         IN         VARCHAR2     -- 처리구분
    ,p_process_date         IN         DATE         -- 처리일시
    ,p_process_charger      IN         VARCHAR2     -- 처리자
    ,p_process_desc         IN         VARCHAR2     -- 처리내역
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  자산처리요청
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_request
    WHERE
        request_seq          = p_request_seq
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_request_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO asset_request (
             request_seq
            ,asset_code
            ,request_flag
            ,request_date
            ,request_charger
            ,req_subject
            ,request_desc
            ,file_key
            ,process_flag
            ,process_date
            ,process_charger
            ,process_desc
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
        )
        VALUES(
             p_request_seq
            ,p_asset_code
            ,p_request_flag
            ,p_request_date
            ,p_request_charger
            ,p_req_subject
            ,p_request_desc
            ,p_file_key
            ,p_process_flag
            ,p_process_date
            ,p_process_charger
            ,p_process_desc
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE asset_request SET
             asset_code           = p_asset_code
            ,request_flag         = p_request_flag
            ,request_date         = p_request_date
            ,request_charger      = p_request_charger
            ,req_subject          = p_req_subject
            ,request_desc         = p_request_desc
            ,file_key             = p_file_key
            ,process_flag         = p_process_flag
            ,process_date         = p_process_date
            ,process_charger      = p_process_charger
            ,process_desc         = p_process_desc
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            request_seq          = p_request_seq
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM asset_request
        WHERE
            request_seq          = p_request_seq
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_request_seq :'          || p_request_seq          || '},' ||
        ' { p_asset_code :'           || p_asset_code           || '},' ||
        ' { p_request_flag :'         || p_request_flag         || '},' ||
        ' { p_request_date :'         || p_request_date         || '},' ||
        ' { p_request_charger :'      || p_request_charger      || '},' ||
        ' { p_req_subject :'          || p_req_subject          || '},' ||
        ' { p_request_desc :'         || p_request_desc         || '},' ||
        ' { p_file_key :'             || p_file_key             || '},' ||
        ' { p_process_flag :'         || p_process_flag         || '},' ||
        ' { p_process_date :'         || p_process_date         || '},' ||
        ' { p_process_charger :'      || p_process_charger      || '},' ||
        ' { p_process_desc :'         || p_process_desc         || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END asset_request_proc;

PROCEDURE asset_move_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_move_seq             IN         NUMBER       -- 이동일련번호
    ,p_install_area_code    IN         VARCHAR2     -- 이동대여반납장소
    ,p_move_flag            IN         VARCHAR2     -- 이동대여반납구분
    ,p_move_date            IN         VARCHAR2     -- 이동대여반납일자
    ,p_move_reason          IN         VARCHAR2     -- 이동대여반납사유
    ,p_reqest_charger       IN         VARCHAR2     -- 이동대여반납요청자
    ,p_process_charger      IN         VARCHAR2     -- 이동대여반납처리자
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  이동대여반납
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_move
    WHERE
        asset_code           = p_asset_code
    AND move_seq             = p_move_seq
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_move_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO asset_move (
             asset_code
            ,move_seq
            ,install_area_code
            ,move_flag
            ,move_date
            ,move_reason
            ,reqest_charger
            ,process_charger
            ,file_key
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_asset_code
            ,p_move_seq
            ,p_install_area_code
            ,p_move_flag
            ,p_move_date
            ,p_move_reason
            ,p_reqest_charger
            ,p_process_charger
            ,p_file_key
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE asset_move SET
             install_area_code    = p_install_area_code
            ,move_flag            = p_move_flag
            ,move_date            = p_move_date
            ,move_reason          = p_move_reason
            ,reqest_charger       = p_reqest_charger
            ,process_charger      = p_process_charger
            ,file_key             = p_file_key
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            asset_code           = p_asset_code
        AND move_seq             = p_move_seq
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM asset_move
        WHERE
            asset_code           = p_asset_code
        AND move_seq             = p_move_seq
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_asset_code :'           || p_asset_code           || '},' ||
        ' { p_move_seq :'             || p_move_seq             || '},' ||
        ' { p_install_area_code :'    || p_install_area_code    || '},' ||
        ' { p_move_flag :'            || p_move_flag            || '},' ||
        ' { p_move_date :'            || p_move_date            || '},' ||
        ' { p_move_reason :'          || p_move_reason          || '},' ||
        ' { p_reqest_charger :'       || p_reqest_charger       || '},' ||
        ' { p_process_charger :'      || p_process_charger      || '},' ||
        ' { p_file_key :'             || p_file_key             || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END asset_move_proc;
PROCEDURE asset_disuse_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_disuse_seq           IN         NUMBER       -- 폐기일련번호
    ,p_disuse_date          IN         VARCHAR2     -- 폐기일자
    ,p_disuse_reason        IN         VARCHAR2     -- 폐기사유
    ,p_disuse_desc          IN         VARCHAR2     -- 폐기내역
    ,p_disuse_charger       IN         VARCHAR2     -- 폐기처리담당자
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  장비폐기
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_disuse
    WHERE
        asset_code           = p_asset_code
    AND disuse_seq           = p_disuse_seq
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_disuse_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO asset_disuse (
             asset_code
            ,disuse_seq
            ,disuse_date
            ,disuse_reason
            ,disuse_desc
            ,disuse_charger
            ,file_key
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_asset_code
            ,p_disuse_seq
            ,p_disuse_date
            ,p_disuse_reason
            ,p_disuse_desc
            ,p_disuse_charger
            ,p_file_key
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE asset_disuse SET
             disuse_date          = p_disuse_date
            ,disuse_reason        = p_disuse_reason
            ,disuse_desc          = p_disuse_desc
            ,disuse_charger       = p_disuse_charger
            ,file_key             = p_file_key
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            asset_code           = p_asset_code
        AND disuse_seq           = p_disuse_seq
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM asset_disuse
        WHERE
            asset_code           = p_asset_code
        AND disuse_seq           = p_disuse_seq
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_asset_code :'           || p_asset_code           || '},' ||
        ' { p_disuse_seq :'           || p_disuse_seq           || '},' ||
        ' { p_disuse_date :'          || p_disuse_date          || '},' ||
        ' { p_disuse_reason :'        || p_disuse_reason        || '},' ||
        ' { p_disuse_desc :'          || p_disuse_desc          || '},' ||
        ' { p_disuse_charger :'       || p_disuse_charger       || '},' ||
        ' { p_file_key :'             || p_file_key             || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END asset_disuse_proc;
PROCEDURE asset_capa_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_capa_seq             IN         NUMBER       -- 일련번호
    ,p_name                 IN         VARCHAR2     -- 항목명
    ,p_name_local           IN         VARCHAR2     -- 항목명_지역
    ,p_description          IN         VARCHAR2     -- 항목설명
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  장비능력및주요부치수
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_capa
    WHERE
        asset_code           = p_asset_code
    AND capa_seq             = p_capa_seq
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_capa_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO asset_capa (
             asset_code
            ,capa_seq
            ,name
            ,name_local
            ,description
            ,file_key
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_asset_code
            ,p_capa_seq
            ,p_name
            ,p_name_local
            ,p_description
            ,p_file_key
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE asset_capa SET
             name                 = p_name
            ,name_local           = p_name_local
            ,description          = p_description
            ,file_key             = p_file_key
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            asset_code           = p_asset_code
        AND capa_seq             = p_capa_seq
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM asset_capa
        WHERE
            asset_code           = p_asset_code
        AND capa_seq             = p_capa_seq
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_asset_code :'           || p_asset_code           || '},' ||
        ' { p_capa_seq :'             || p_capa_seq             || '},' ||
        ' { p_name :'                 || p_name                 || '},' ||
        ' { p_name_local :'           || p_name_local           || '},' ||
        ' { p_description :'          || p_description          || '},' ||
        ' { p_file_key :'             || p_file_key             || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END asset_capa_proc;
PROCEDURE asset_ex_repair_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_ex_re_seq            IN         NUMBER       -- 교환수리일련번호
    ,p_asset_part_seq       IN         NUMBER       -- 부속품일련번호
    ,p_request_seq          IN         NUMBER       -- 교환수리요청번호
    ,p_ex_re_req_flag       IN         VARCHAR2     -- 교환수리요청구분
    ,p_ex_re_part_name      IN         VARCHAR2     -- 교환수리품목명
    ,p_ex_re_part_desc      IN         VARCHAR2     -- 교환수리품목규격
    ,p_req_subject          IN         VARCHAR2     -- 제목
    ,p_ex_re_requester      IN         VARCHAR2     -- 교환수리요청자
    ,p_ex_re_req_date       IN         VARCHAR2     -- 교환수리요청일자
    ,p_ex_re_date           IN         VARCHAR2     -- 교환수리처리일자
    ,p_ex_re_desc           IN         VARCHAR2     -- 교환수리처리내역
    ,p_ex_re_proc_flag      IN         VARCHAR2     -- 교환수리처리상태
    ,p_ex_re_cost           IN         NUMBER       -- 교환수리비용
    ,p_ex_re_charger        IN         VARCHAR2     -- 교환수리처리담당자
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  장비교환수리
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_ex_repair
    WHERE
        asset_code           = p_asset_code
    AND ex_re_seq            = p_ex_re_seq
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_ex_repair_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO asset_ex_repair (
             asset_code
            ,ex_re_seq
            ,asset_part_seq
            ,request_seq
            ,ex_re_req_flag
            ,ex_re_part_name
            ,ex_re_part_desc
            ,req_subject
            ,ex_re_requester
            ,ex_re_req_date
            ,ex_re_date
            ,ex_re_desc
            ,ex_re_proc_flag
            ,ex_re_cost
            ,ex_re_charger
            ,file_key
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_asset_code
            ,p_ex_re_seq
            ,p_asset_part_seq
            ,p_request_seq
            ,p_ex_re_req_flag
            ,p_ex_re_part_name
            ,p_ex_re_part_desc
            ,p_req_subject
            ,p_ex_re_requester
            ,p_ex_re_req_date
            ,p_ex_re_date
            ,p_ex_re_desc
            ,p_ex_re_proc_flag
            ,p_ex_re_cost
            ,p_ex_re_charger
            ,p_file_key
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE asset_ex_repair SET
             asset_part_seq       = p_asset_part_seq
            ,request_seq          = p_request_seq
            ,ex_re_req_flag       = p_ex_re_req_flag
            ,ex_re_part_name      = p_ex_re_part_name
            ,ex_re_part_desc      = p_ex_re_part_desc
            ,req_subject          = p_req_subject
            ,ex_re_requester      = p_ex_re_requester
            ,ex_re_req_date       = p_ex_re_req_date
            ,ex_re_date           = p_ex_re_date
            ,ex_re_desc           = p_ex_re_desc
            ,ex_re_proc_flag      = p_ex_re_proc_flag
            ,ex_re_cost           = p_ex_re_cost
            ,ex_re_charger        = p_ex_re_charger
            ,file_key             = p_file_key
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            asset_code           = p_asset_code
        AND ex_re_seq            = p_ex_re_seq
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM asset_ex_repair
        WHERE
            asset_code           = p_asset_code
        AND ex_re_seq            = p_ex_re_seq
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_asset_code :'           || p_asset_code           || '},' ||
        ' { p_ex_re_seq :'            || p_ex_re_seq            || '},' ||
        ' { p_asset_part_seq :'       || p_asset_part_seq       || '},' ||
        ' { p_request_seq :'          || p_request_seq          || '},' ||
        ' { p_ex_re_req_flag :'       || p_ex_re_req_flag       || '},' ||
        ' { p_ex_re_part_name :'      || p_ex_re_part_name      || '},' ||
        ' { p_ex_re_part_desc :'      || p_ex_re_part_desc      || '},' ||
        ' { p_req_subject :'          || p_req_subject          || '},' ||
        ' { p_ex_re_requester :'      || p_ex_re_requester      || '},' ||
        ' { p_ex_re_req_date :'       || p_ex_re_req_date       || '},' ||
        ' { p_ex_re_date :'           || p_ex_re_date           || '},' ||
        ' { p_ex_re_desc :'           || p_ex_re_desc           || '},' ||
        ' { p_ex_re_proc_flag :'      || p_ex_re_proc_flag      || '},' ||
        ' { p_ex_re_cost :'           || p_ex_re_cost           || '},' ||
        ' { p_ex_re_charger :'        || p_ex_re_charger        || '},' ||
        ' { p_file_key :'             || p_file_key             || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END asset_ex_repair_proc;

PROCEDURE asset_survey_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_survey_seq           IN         NUMBER       -- 실사일련번호
    ,p_move_seq             IN         NUMBER       -- 이동일련번호
    ,p_survey_date          IN         VARCHAR2     -- 실사일자
    ,p_survey_desc          IN         VARCHAR2     -- 실사내역
    ,p_survey_result        IN         VARCHAR2     -- 실사결과
    ,p_survey_charger       IN         VARCHAR2     -- 처리담당자
    ,p_file_key             IN         VARCHAR2     -- 첨부파일
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  장비실사
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_survey
    WHERE
        asset_code           = p_asset_code
    AND survey_seq           = p_survey_seq
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_survey_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO asset_survey (
             asset_code
            ,survey_seq
            ,move_seq
            ,survey_date
            ,survey_desc
            ,survey_result
            ,survey_charger
            ,file_key
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_asset_code
            ,p_survey_seq
            ,p_move_seq
            ,p_survey_date
            ,p_survey_desc
            ,p_survey_result
            ,p_survey_charger
            ,p_file_key
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE asset_survey SET
             move_seq             = p_move_seq
            ,survey_date          = p_survey_date
            ,survey_desc          = p_survey_desc
            ,survey_result        = p_survey_result
            ,survey_charger       = p_survey_charger
            ,file_key             = p_file_key
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            asset_code           = p_asset_code
        AND survey_seq           = p_survey_seq
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM asset_survey
        WHERE
            asset_code           = p_asset_code
        AND survey_seq           = p_survey_seq
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_asset_code :'           || p_asset_code           || '},' ||
        ' { p_survey_seq :'           || p_survey_seq           || '},' ||
        ' { p_move_seq :'             || p_move_seq             || '},' ||
        ' { p_survey_date :'          || p_survey_date          || '},' ||
        ' { p_survey_desc :'          || p_survey_desc          || '},' ||
        ' { p_survey_result :'        || p_survey_result        || '},' ||
        ' { p_survey_charger :'       || p_survey_charger       || '},' ||
        ' { p_file_key :'             || p_file_key             || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END asset_survey_proc;
PROCEDURE common_code_proc(
     p_object_id            IN OUT     NUMBER       -- object_id
    ,p_code_type            IN         VARCHAR2     -- 공통코드
    ,p_lang                 IN         VARCHAR2     -- 언어코드
    ,p_code                 IN         VARCHAR2     -- 코드
    ,p_code_desc            IN         VARCHAR2     -- 언어별코드명
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  공통코드
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   common_code
    WHERE
        code_type            = p_code_type
    AND lang                 = p_lang
    AND code                 = p_code
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT common_code_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO common_code (
             object_id
            ,code_type
            ,lang
            ,code
            ,code_desc
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
        )
        VALUES(
             p_object_id
            ,p_code_type
            ,p_lang
            ,p_code
            ,p_code_desc
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE common_code SET
             code_desc            = p_code_desc
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            code_type            = p_code_type
        AND lang                 = p_lang
        AND code                 = p_code
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM common_code
        WHERE
            code_type            = p_code_type
        AND lang                 = p_lang
        AND code                 = p_code
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_code_type :'            || p_code_type            || '},' ||
        ' { p_lang :'                 || p_lang                 || '},' ||
        ' { p_code :'                 || p_code                 || '},' ||
        ' { p_code_desc :'            || p_code_desc            || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END common_code_proc;
PROCEDURE asset_calibration_proc(
     p_asset_code           IN         VARCHAR2     -- 자산번호
    ,p_calibration_seq      IN         VARCHAR2     -- 검교정일련번호
    ,p_calibration_date     IN         VARCHAR2     -- 검교정일자
    ,p_calibration_code     IN         VARCHAR2     -- 검교정측정코드
    ,p_calibration_charger  IN         VARCHAR2     -- 검교정담당자
    ,p_calibration_result   IN         VARCHAR2     -- 검교정내역
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  검교정
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_calibration
    WHERE
        asset_code           = p_asset_code
    AND calibration_seq      = p_calibration_seq
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_calibration_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO asset_calibration (
             asset_code
            ,calibration_seq
            ,calibration_date
            ,calibration_code
            ,calibration_charger
            ,calibration_result
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_asset_code
            ,p_calibration_seq
            ,p_calibration_date
            ,p_calibration_code
            ,p_calibration_charger
            ,p_calibration_result
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE asset_calibration SET
             calibration_date     = p_calibration_date
            ,calibration_code     = p_calibration_code
            ,calibration_charger  = p_calibration_charger
            ,calibration_result   = p_calibration_result
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            asset_code           = p_asset_code
        AND calibration_seq      = p_calibration_seq
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM asset_calibration
        WHERE
            asset_code           = p_asset_code
        AND calibration_seq      = p_calibration_seq
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_asset_code :'           || p_asset_code           || '},' ||
        ' { p_calibration_seq :'      || p_calibration_seq      || '},' ||
        ' { p_calibration_date :'     || p_calibration_date     || '},' ||
        ' { p_calibration_code :'     || p_calibration_code     || '},' ||
        ' { p_calibration_charger :'  || p_calibration_charger  || '},' ||
        ' { p_calibration_result :'   || p_calibration_result   || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END asset_calibration_proc;
PROCEDURE calibration_range_proc(
     p_calibration_code     IN         VARCHAR2     -- 검교정측정코드
    ,p_calibration_value    IN         VARCHAR2     -- 검교정측정수식
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  검교정측정범위
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   calibration_range
    WHERE
        calibration_code     = p_calibration_code
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT calibration_range_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO calibration_range (
             calibration_code
            ,calibration_value
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_calibration_code
            ,p_calibration_value
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE calibration_range SET
             calibration_value    = p_calibration_value
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            calibration_code     = p_calibration_code
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM calibration_range
        WHERE
            calibration_code     = p_calibration_code
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_calibration_code :'     || p_calibration_code     || '},' ||
        ' { p_calibration_value :'    || p_calibration_value    || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END calibration_range_proc;
PROCEDURE language_proc(
     p_lang                 IN         VARCHAR2     -- 언어코드
    ,p_lang_name            IN         VARCHAR2     -- 언어명
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  언어
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   language
    WHERE
        lang                 = p_lang
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT language_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO language (
             lang
            ,lang_name
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_lang
            ,p_lang_name
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE language SET
             lang_name            = p_lang_name
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            lang                 = p_lang
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM language
        WHERE
            lang                 = p_lang
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_lang :'                 || p_lang                 || '},' ||
        ' { p_lang_name :'            || p_lang_name            || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END language_proc;
PROCEDURE attachment_file_proc(
     p_attach_file_seq      IN         NUMBER       -- 첨부일련번호
    ,p_file_key             IN         VARCHAR2     -- 첨부파일키
    ,p_file_name            IN         VARCHAR2     -- 파일명
    ,p_file_ext             IN         VARCHAR2     -- 파일확장자
    ,p_file_path            IN         VARCHAR2     -- 파일경로
    ,p_file_size            IN         NUMBER       -- 파일크기
    ,p_file_flag            IN         VARCHAR2     -- 파일구분
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  첨부파일
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   attachment_file
    WHERE
        attach_file_seq      = p_attach_file_seq
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT attachment_file_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO attachment_file (
             attach_file_seq
            ,file_key
            ,file_name
            ,file_ext
            ,file_path
            ,file_size
            ,file_flag
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
        )
        VALUES(
             p_attach_file_seq
            ,p_file_key
            ,p_file_name
            ,p_file_ext
            ,p_file_path
            ,p_file_size
            ,p_file_flag
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE attachment_file SET
             file_key             = p_file_key
            ,file_name            = p_file_name
            ,file_ext             = p_file_ext
            ,file_path            = p_file_path
            ,file_size            = p_file_size
            ,file_flag            = p_file_flag
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            attach_file_seq      = p_attach_file_seq
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM attachment_file
        WHERE
            attach_file_seq      = p_attach_file_seq
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_attach_file_seq :'      || p_attach_file_seq      || '},' ||
        ' { p_file_key :'             || p_file_key             || '},' ||
        ' { p_file_name :'            || p_file_name            || '},' ||
        ' { p_file_ext :'             || p_file_ext             || '},' ||
        ' { p_file_path :'            || p_file_path            || '},' ||
        ' { p_file_size :'            || p_file_size            || '},' ||
        ' { p_file_flag :'            || p_file_flag            || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END attachment_file_proc;
PROCEDURE asset_common_part_proc(
     p_part_no              IN         VARCHAR2     -- 부속품목번호
    ,p_part_name            IN         VARCHAR2     -- 부품명
    ,p_part_name_local      IN         VARCHAR2     -- 부품명_지역
    ,p_part_spec            IN         VARCHAR2     -- 부품규격
    ,p_status               IN         VARCHAR2     -- 사용여부
    ,p_remarks              IN         VARCHAR2     -- 비고
    ,p_write_by             IN         VARCHAR2     -- 작성자
    ,p_txn_type             IN         VARCHAR2     -- 처리유형
    ,p_object_id            OUT        VARCHAR2     -- 객체id
    ,p_out_code             OUT        VARCHAR2     -- 처리코드
    ,p_out_message          OUT        VARCHAR2     -- 처리내역
)/**********************************************************************
***********************************************************************
-- Project       : (주)대동 연구소 자산관리
-- Program Name  :  부속품목
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --테스트
    e_exist       EXCEPTION; --존재
    e_notfound    EXCEPTION; --미존재
    e_nottxntype  EXCEPTION; --처리없음
    e_nameexist   EXCEPTION; --명칭존재

BEGIN

    -- 자료존재 확인
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_common_part
    WHERE
        part_no              = p_part_no
    ;

    --************************************
    --************* 등록 *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_common_part_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- 신규 key 생성
        p_object_id := v_object_id;

        -- 등록처리
        INSERT INTO asset_common_part (
             part_no
            ,part_name
            ,part_name_local
            ,part_spec
            ,status
            ,remarks
            ,created_by
            ,creation_date
            ,last_updated_by
            ,last_update_date
            ,object_id
        )
        VALUES(
             p_part_no
            ,p_part_name
            ,p_part_name_local
            ,p_part_spec
            ,p_status
            ,p_remarks
            ,p_write_by
            ,SYSDATE
            ,p_write_by
            ,SYSDATE
            ,p_object_id
        );

        p_out_message := 'OK';

    --************************************
    --************* 수정 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 수정처리
        UPDATE asset_common_part SET
             part_name            = p_part_name
            ,part_name_local      = p_part_name_local
            ,part_spec            = p_part_spec
            ,status               = p_status
            ,remarks              = p_remarks
            ,last_updated_by      = p_write_by
            ,last_update_date     = SYSDATE
        WHERE
            part_no              = p_part_no
        ;

        p_out_message := 'OK';

    --************************************
    --************* 삭제 *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- 중복체크
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- 삭제처리
        DELETE FROM asset_common_part
        WHERE
            part_no              = p_part_no
        ;

        p_out_message := 'OK';

    ELSE
        RAISE e_nottxntype;
    END IF;

    p_out_code  := '0';

EXCEPTION
    WHEN e_test THEN
        p_out_code    := '-20002';
        p_out_message := '{' ||
        ' { p_part_no :'              || p_part_no              || '},' ||
        ' { p_part_name :'            || p_part_name            || '},' ||
        ' { p_part_name_local :'      || p_part_name_local      || '},' ||
        ' { p_part_spec :'            || p_part_spec            || '},' ||
        ' { p_status :'               || p_status               || '},' ||
        ' { p_remarks :'              || p_remarks              || '},' ||
        ' { p_object_id :'            || p_object_id            || '},' ||
        ' { p_write_by :'             || p_write_by             || '}' ||
      '}';

    WHEN e_nottxntype THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_TXNTYPE';            -- 처리명령이 존재하지 않습니다

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- 데이터가 존재합니다

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- 데이터가 존재하지 않습니다

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- 같은 코드명이 존재합니다

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- 데이타베이스 에러;
END asset_common_part_proc;
END asset_mgmt_pkg;
/
