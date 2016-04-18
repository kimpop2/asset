CREATE OR REPLACE PACKAGE asset_mgmt_pkg IS
    
    PROCEDURE asset_user_proc(
     p_user_id              IN         VARCHAR2     -- �����id
    ,p_user_name            IN         VARCHAR2     -- ����ڸ�
    ,p_user_pwd             IN         VARCHAR2     -- ��й�ȣ
    ,p_user_role            IN         VARCHAR2     -- ����
    ,p_phone                IN         VARCHAR2     -- ����ó
    ,p_email                IN         VARCHAR2     -- �̸���
    ,p_lang                 IN         VARCHAR2     -- �⺻���
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE asset_category_proc(
     p_asset_cat_code       IN         VARCHAR2     -- �ڻ�з��ڵ�
    ,p_asset_cat_name       IN         VARCHAR2     -- �ڻ�з���
    ,p_asset_cat_name_local IN         VARCHAR2     -- �ڻ�з���_����
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE cost_center_proc(
     p_cost_center_code     IN         VARCHAR2     -- �ڽ�Ʈ��Ÿ�ڵ�
    ,p_cost_center_name     IN         VARCHAR2     -- �ڽ�Ʈ��Ÿ��
    ,p_cost_center_name_local IN         VARCHAR2     -- �ڽ�Ʈ��Ÿ��_����
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE installation_area_proc(
     p_install_area_code    IN         VARCHAR2     -- ��ġ����ڵ�
    ,p_install_area_name    IN         VARCHAR2     -- ��ġ��Ҹ�
    ,p_install_area_name_local IN         VARCHAR2     -- ��ġ��Ҹ�_����
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE asset_part_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_asset_part_seq       IN         NUMBER       -- �μ�ǰ�Ϸù�ȣ
    ,p_part_no              IN         VARCHAR2     -- �μ�ǰ���ȣ
    ,p_part_name            IN         VARCHAR2     -- ǰ��
    ,p_part_name_local      IN         VARCHAR2     -- ��ǰ��_����
    ,p_part_spec            IN         VARCHAR2     -- �԰�
    ,p_quantity             IN         NUMBER       -- �������
    ,p_unit_price           IN         NUMBER       -- �ܰ�
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE asset_master_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_asset_name           IN         VARCHAR2     -- �ڻ��
    ,p_asset_name_local     IN         VARCHAR2     -- �ڻ��_����
    ,p_asset_cat_code       IN         VARCHAR2     -- �ڻ�з�
    ,p_cost_center_code     IN         VARCHAR2     -- �����μ�
    ,p_main_mgr_no          IN         VARCHAR2     -- ������_��
    ,p_sub_mgr_no           IN         VARCHAR2     -- ������_��
    ,p_asset_model_name     IN         VARCHAR2     -- �𵨸�
    ,p_manufacturer_name    IN         VARCHAR2     -- ����ȸ��
    ,p_purchaser_name       IN         VARCHAR2     -- ����ó
    ,p_acquisition_date     IN         VARCHAR2     -- �������
    ,p_depreciation_a       IN         NUMBER       -- �����󰢳��A
    ,p_depreciation_b       IN         NUMBER       -- �����󰢳��B
    ,p_salvage_amount       IN         NUMBER       -- ��������
    ,p_manufacture_no       IN         VARCHAR2     -- ������ȣ
    ,p_manufacture_date     IN         VARCHAR2     -- ��������
    ,p_external_apperance   IN         VARCHAR2     -- ����ǿ���
    ,p_gross_weight         IN         NUMBER       -- �߷�
    ,p_inspection_flag      IN         VARCHAR2     -- �˱�����󿩺�
    ,p_inspection_period    IN         NUMBER       -- �˱���_�����ֱ�
    ,p_inspection_unit      IN         VARCHAR2     -- �˱���_���˴���
    ,p_acquisition_amount   IN         NUMBER       -- ��氡��
    ,p_install_area_code    IN         VARCHAR2     -- ��ġ/�������
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_final_move_seq       IN         VARCHAR2     -- �����̵��Ϸù�ȣ
    ,p_final_disuse_seq     IN         VARCHAR2     -- ��������Ϸù�ȣ
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE asset_request_proc(
     p_request_seq          IN         NUMBER       -- ��û�Ϸù�ȣ
    ,p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_request_flag         IN         VARCHAR2     -- ��û����
    ,p_request_date         IN         DATE         -- ��û�Ͻ�
    ,p_request_charger      IN         VARCHAR2     -- ��û��
    ,p_req_subject          IN         VARCHAR2     -- ����
    ,p_request_desc         IN         VARCHAR2     -- �Ű�����
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_process_flag         IN         VARCHAR2     -- ó������
    ,p_process_date         IN         DATE         -- ó���Ͻ�
    ,p_process_charger      IN         VARCHAR2     -- ó����
    ,p_process_desc         IN         VARCHAR2     -- ó������
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE asset_move_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_move_seq             IN         NUMBER       -- �̵��Ϸù�ȣ
    ,p_install_area_code    IN         VARCHAR2     -- �̵��뿩�ݳ����
    ,p_move_flag            IN         VARCHAR2     -- �̵��뿩�ݳ�����
    ,p_move_date            IN         VARCHAR2     -- �̵��뿩�ݳ�����
    ,p_move_reason          IN         VARCHAR2     -- �̵��뿩�ݳ�����
    ,p_reqest_charger       IN         VARCHAR2     -- �̵��뿩�ݳ���û��
    ,p_process_charger      IN         VARCHAR2     -- �̵��뿩�ݳ�ó����
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE asset_disuse_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_disuse_seq           IN         NUMBER       -- ����Ϸù�ȣ
    ,p_disuse_date          IN         VARCHAR2     -- �������
    ,p_disuse_reason        IN         VARCHAR2     -- ������
    ,p_disuse_desc          IN         VARCHAR2     -- ��⳻��
    ,p_disuse_charger       IN         VARCHAR2     -- ���ó�������
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE asset_capa_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_capa_seq             IN         NUMBER       -- �Ϸù�ȣ
    ,p_name                 IN         VARCHAR2     -- �׸��
    ,p_name_local           IN         VARCHAR2     -- �׸��_����
    ,p_description          IN         VARCHAR2     -- �׸񼳸�
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE asset_ex_repair_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_ex_re_seq            IN         NUMBER       -- ��ȯ�����Ϸù�ȣ
    ,p_asset_part_seq       IN         NUMBER       -- �μ�ǰ�Ϸù�ȣ
    ,p_request_seq          IN         NUMBER       -- ��ȯ������û��ȣ
    ,p_ex_re_req_flag       IN         VARCHAR2     -- ��ȯ������û����
    ,p_ex_re_part_name      IN         VARCHAR2     -- ��ȯ����ǰ���
    ,p_ex_re_part_desc      IN         VARCHAR2     -- ��ȯ����ǰ��԰�
    ,p_req_subject          IN         VARCHAR2     -- ����
    ,p_ex_re_requester      IN         VARCHAR2     -- ��ȯ������û��
    ,p_ex_re_req_date       IN         VARCHAR2     -- ��ȯ������û����
    ,p_ex_re_date           IN         VARCHAR2     -- ��ȯ����ó������
    ,p_ex_re_desc           IN         VARCHAR2     -- ��ȯ����ó������
    ,p_ex_re_proc_flag      IN         VARCHAR2     -- ��ȯ����ó������
    ,p_ex_re_cost           IN         NUMBER       -- ��ȯ�������
    ,p_ex_re_charger        IN         VARCHAR2     -- ��ȯ����ó�������
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE asset_survey_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_survey_seq           IN         NUMBER       -- �ǻ��Ϸù�ȣ
    ,p_move_seq             IN         NUMBER       -- �̵��Ϸù�ȣ
    ,p_survey_date          IN         VARCHAR2     -- �ǻ�����
    ,p_survey_desc          IN         VARCHAR2     -- �ǻ系��
    ,p_survey_result        IN         VARCHAR2     -- �ǻ���
    ,p_survey_charger       IN         VARCHAR2     -- ó�������
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE common_code_proc(
     p_object_id            IN OUT     NUMBER       -- object_id
    ,p_code_type            IN         VARCHAR2     -- �����ڵ�
    ,p_lang                 IN         VARCHAR2     -- ����ڵ�
    ,p_code                 IN         VARCHAR2     -- �ڵ�
    ,p_code_desc            IN         VARCHAR2     -- ���ڵ��
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE asset_calibration_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_calibration_seq      IN         VARCHAR2     -- �˱����Ϸù�ȣ
    ,p_calibration_date     IN         VARCHAR2     -- �˱�������
    ,p_calibration_code     IN         VARCHAR2     -- �˱��������ڵ�
    ,p_calibration_charger  IN         VARCHAR2     -- �˱��������
    ,p_calibration_result   IN         VARCHAR2     -- �˱�������
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE calibration_range_proc(
     p_calibration_code     IN         VARCHAR2     -- �˱��������ڵ�
    ,p_calibration_value    IN         VARCHAR2     -- �˱�����������
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE language_proc(
     p_lang                 IN         VARCHAR2     -- ����ڵ�
    ,p_lang_name            IN         VARCHAR2     -- ����
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE attachment_file_proc(
     p_attach_file_seq      IN         NUMBER       -- ÷���Ϸù�ȣ
    ,p_file_key             IN         VARCHAR2     -- ÷������Ű
    ,p_file_name            IN         VARCHAR2     -- ���ϸ�
    ,p_file_ext             IN         VARCHAR2     -- ����Ȯ����
    ,p_file_path            IN         VARCHAR2     -- ���ϰ��
    ,p_file_size            IN         NUMBER       -- ����ũ��
    ,p_file_flag            IN         VARCHAR2     -- ���ϱ���
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;
PROCEDURE asset_common_part_proc(
     p_part_no              IN         VARCHAR2     -- �μ�ǰ���ȣ
    ,p_part_name            IN         VARCHAR2     -- ��ǰ��
    ,p_part_name_local      IN         VARCHAR2     -- ��ǰ��_����
    ,p_part_spec            IN         VARCHAR2     -- ��ǰ�԰�
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)
;

      
END asset_mgmt_pkg;
/
CREATE OR REPLACE PACKAGE BODY asset_mgmt_pkg IS
    PROCEDURE asset_user_proc(
     p_user_id              IN         VARCHAR2     -- �����id
    ,p_user_name            IN         VARCHAR2     -- ����ڸ�
    ,p_user_pwd             IN         VARCHAR2     -- ��й�ȣ
    ,p_user_role            IN         VARCHAR2     -- ����
    ,p_phone                IN         VARCHAR2     -- ����ó
    ,p_email                IN         VARCHAR2     -- �̸���
    ,p_lang                 IN         VARCHAR2     -- �⺻���
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  �����
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_user
    WHERE
        user_id              = p_user_id
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_user_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END asset_user_proc;
PROCEDURE asset_category_proc(
     p_asset_cat_code       IN         VARCHAR2     -- �ڻ�з��ڵ�
    ,p_asset_cat_name       IN         VARCHAR2     -- �ڻ�з���
    ,p_asset_cat_name_local IN         VARCHAR2     -- �ڻ�з���_����
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  �ڻ�з�
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_category
    WHERE
        asset_cat_code       = p_asset_cat_code
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_category_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END asset_category_proc;
PROCEDURE cost_center_proc(
     p_cost_center_code     IN         VARCHAR2     -- �ڽ�Ʈ��Ÿ�ڵ�
    ,p_cost_center_name     IN         VARCHAR2     -- �ڽ�Ʈ��Ÿ��
    ,p_cost_center_name_local IN         VARCHAR2     -- �ڽ�Ʈ��Ÿ��_����
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  �ڽ�Ʈ��Ÿ
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   cost_center
    WHERE
        cost_center_code     = p_cost_center_code
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT cost_center_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END cost_center_proc;
PROCEDURE installation_area_proc(
     p_install_area_code    IN         VARCHAR2     -- ��ġ����ڵ�
    ,p_install_area_name    IN         VARCHAR2     -- ��ġ��Ҹ�
    ,p_install_area_name_local IN         VARCHAR2     -- ��ġ��Ҹ�_����
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  ��ġ���
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   installation_area
    WHERE
        install_area_code    = p_install_area_code
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT installation_area_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END installation_area_proc;
PROCEDURE asset_part_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_asset_part_seq       IN         NUMBER       -- �μ�ǰ�Ϸù�ȣ
    ,p_part_no              IN         VARCHAR2     -- �μ�ǰ���ȣ
    ,p_part_name            IN         VARCHAR2     -- ǰ��
    ,p_part_name_local      IN         VARCHAR2     -- ��ǰ��_����
    ,p_part_spec            IN         VARCHAR2     -- �԰�
    ,p_quantity             IN         NUMBER       -- �������
    ,p_unit_price           IN         NUMBER       -- �ܰ�
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  ���μ�ǰ
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_part
    WHERE
        asset_code           = p_asset_code
    AND asset_part_seq       = p_asset_part_seq
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_part_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END asset_part_proc;
PROCEDURE asset_master_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_asset_name           IN         VARCHAR2     -- �ڻ��
    ,p_asset_name_local     IN         VARCHAR2     -- �ڻ��_����
    ,p_asset_cat_code       IN         VARCHAR2     -- �ڻ�з�
    ,p_cost_center_code     IN         VARCHAR2     -- �����μ�
    ,p_main_mgr_no          IN         VARCHAR2     -- ������_��
    ,p_sub_mgr_no           IN         VARCHAR2     -- ������_��
    ,p_asset_model_name     IN         VARCHAR2     -- �𵨸�
    ,p_manufacturer_name    IN         VARCHAR2     -- ����ȸ��
    ,p_purchaser_name       IN         VARCHAR2     -- ����ó
    ,p_acquisition_date     IN         VARCHAR2     -- �������
    ,p_depreciation_a       IN         NUMBER       -- �����󰢳��A
    ,p_depreciation_b       IN         NUMBER       -- �����󰢳��B
    ,p_salvage_amount       IN         NUMBER       -- ��������
    ,p_manufacture_no       IN         VARCHAR2     -- ������ȣ
    ,p_manufacture_date     IN         VARCHAR2     -- ��������
    ,p_external_apperance   IN         VARCHAR2     -- ����ǿ���
    ,p_gross_weight         IN         NUMBER       -- �߷�
    ,p_inspection_flag      IN         VARCHAR2     -- �˱�����󿩺�
    ,p_inspection_period    IN         NUMBER       -- �˱���_�����ֱ�
    ,p_inspection_unit      IN         VARCHAR2     -- �˱���_���˴���
    ,p_acquisition_amount   IN         NUMBER       -- ��氡��
    ,p_install_area_code    IN         VARCHAR2     -- ��ġ/�������
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_final_move_seq       IN         VARCHAR2     -- �����̵��Ϸù�ȣ
    ,p_final_disuse_seq     IN         VARCHAR2     -- ��������Ϸù�ȣ
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  �ڻ긶��Ÿ
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_master
    WHERE
        asset_code           = p_asset_code
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_master_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END asset_master_proc;
PROCEDURE asset_request_proc(
     p_request_seq          IN         NUMBER       -- ��û�Ϸù�ȣ
    ,p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_request_flag         IN         VARCHAR2     -- ��û����
    ,p_request_date         IN         DATE         -- ��û�Ͻ�
    ,p_request_charger      IN         VARCHAR2     -- ��û��
    ,p_req_subject          IN         VARCHAR2     -- ����
    ,p_request_desc         IN         VARCHAR2     -- �Ű�����
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_process_flag         IN         VARCHAR2     -- ó������
    ,p_process_date         IN         DATE         -- ó���Ͻ�
    ,p_process_charger      IN         VARCHAR2     -- ó����
    ,p_process_desc         IN         VARCHAR2     -- ó������
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  �ڻ�ó����û
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_request
    WHERE
        request_seq          = p_request_seq
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_request_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END asset_request_proc;

PROCEDURE asset_move_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_move_seq             IN         NUMBER       -- �̵��Ϸù�ȣ
    ,p_install_area_code    IN         VARCHAR2     -- �̵��뿩�ݳ����
    ,p_move_flag            IN         VARCHAR2     -- �̵��뿩�ݳ�����
    ,p_move_date            IN         VARCHAR2     -- �̵��뿩�ݳ�����
    ,p_move_reason          IN         VARCHAR2     -- �̵��뿩�ݳ�����
    ,p_reqest_charger       IN         VARCHAR2     -- �̵��뿩�ݳ���û��
    ,p_process_charger      IN         VARCHAR2     -- �̵��뿩�ݳ�ó����
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  �̵��뿩�ݳ�
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_move
    WHERE
        asset_code           = p_asset_code
    AND move_seq             = p_move_seq
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_move_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END asset_move_proc;
PROCEDURE asset_disuse_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_disuse_seq           IN         NUMBER       -- ����Ϸù�ȣ
    ,p_disuse_date          IN         VARCHAR2     -- �������
    ,p_disuse_reason        IN         VARCHAR2     -- ������
    ,p_disuse_desc          IN         VARCHAR2     -- ��⳻��
    ,p_disuse_charger       IN         VARCHAR2     -- ���ó�������
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  ������
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_disuse
    WHERE
        asset_code           = p_asset_code
    AND disuse_seq           = p_disuse_seq
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_disuse_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END asset_disuse_proc;
PROCEDURE asset_capa_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_capa_seq             IN         NUMBER       -- �Ϸù�ȣ
    ,p_name                 IN         VARCHAR2     -- �׸��
    ,p_name_local           IN         VARCHAR2     -- �׸��_����
    ,p_description          IN         VARCHAR2     -- �׸񼳸�
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  ���ɷ¹��ֿ��ġ��
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_capa
    WHERE
        asset_code           = p_asset_code
    AND capa_seq             = p_capa_seq
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_capa_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END asset_capa_proc;
PROCEDURE asset_ex_repair_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_ex_re_seq            IN         NUMBER       -- ��ȯ�����Ϸù�ȣ
    ,p_asset_part_seq       IN         NUMBER       -- �μ�ǰ�Ϸù�ȣ
    ,p_request_seq          IN         NUMBER       -- ��ȯ������û��ȣ
    ,p_ex_re_req_flag       IN         VARCHAR2     -- ��ȯ������û����
    ,p_ex_re_part_name      IN         VARCHAR2     -- ��ȯ����ǰ���
    ,p_ex_re_part_desc      IN         VARCHAR2     -- ��ȯ����ǰ��԰�
    ,p_req_subject          IN         VARCHAR2     -- ����
    ,p_ex_re_requester      IN         VARCHAR2     -- ��ȯ������û��
    ,p_ex_re_req_date       IN         VARCHAR2     -- ��ȯ������û����
    ,p_ex_re_date           IN         VARCHAR2     -- ��ȯ����ó������
    ,p_ex_re_desc           IN         VARCHAR2     -- ��ȯ����ó������
    ,p_ex_re_proc_flag      IN         VARCHAR2     -- ��ȯ����ó������
    ,p_ex_re_cost           IN         NUMBER       -- ��ȯ�������
    ,p_ex_re_charger        IN         VARCHAR2     -- ��ȯ����ó�������
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  ���ȯ����
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_ex_repair
    WHERE
        asset_code           = p_asset_code
    AND ex_re_seq            = p_ex_re_seq
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_ex_repair_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END asset_ex_repair_proc;

PROCEDURE asset_survey_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_survey_seq           IN         NUMBER       -- �ǻ��Ϸù�ȣ
    ,p_move_seq             IN         NUMBER       -- �̵��Ϸù�ȣ
    ,p_survey_date          IN         VARCHAR2     -- �ǻ�����
    ,p_survey_desc          IN         VARCHAR2     -- �ǻ系��
    ,p_survey_result        IN         VARCHAR2     -- �ǻ���
    ,p_survey_charger       IN         VARCHAR2     -- ó�������
    ,p_file_key             IN         VARCHAR2     -- ÷������
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  ���ǻ�
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_survey
    WHERE
        asset_code           = p_asset_code
    AND survey_seq           = p_survey_seq
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_survey_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END asset_survey_proc;
PROCEDURE common_code_proc(
     p_object_id            IN OUT     NUMBER       -- object_id
    ,p_code_type            IN         VARCHAR2     -- �����ڵ�
    ,p_lang                 IN         VARCHAR2     -- ����ڵ�
    ,p_code                 IN         VARCHAR2     -- �ڵ�
    ,p_code_desc            IN         VARCHAR2     -- ���ڵ��
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  �����ڵ�
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   common_code
    WHERE
        code_type            = p_code_type
    AND lang                 = p_lang
    AND code                 = p_code
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT common_code_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END common_code_proc;
PROCEDURE asset_calibration_proc(
     p_asset_code           IN         VARCHAR2     -- �ڻ��ȣ
    ,p_calibration_seq      IN         VARCHAR2     -- �˱����Ϸù�ȣ
    ,p_calibration_date     IN         VARCHAR2     -- �˱�������
    ,p_calibration_code     IN         VARCHAR2     -- �˱��������ڵ�
    ,p_calibration_charger  IN         VARCHAR2     -- �˱��������
    ,p_calibration_result   IN         VARCHAR2     -- �˱�������
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  �˱���
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_calibration
    WHERE
        asset_code           = p_asset_code
    AND calibration_seq      = p_calibration_seq
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_calibration_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END asset_calibration_proc;
PROCEDURE calibration_range_proc(
     p_calibration_code     IN         VARCHAR2     -- �˱��������ڵ�
    ,p_calibration_value    IN         VARCHAR2     -- �˱�����������
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  �˱�����������
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   calibration_range
    WHERE
        calibration_code     = p_calibration_code
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT calibration_range_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END calibration_range_proc;
PROCEDURE language_proc(
     p_lang                 IN         VARCHAR2     -- ����ڵ�
    ,p_lang_name            IN         VARCHAR2     -- ����
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  ���
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   language
    WHERE
        lang                 = p_lang
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT language_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END language_proc;
PROCEDURE attachment_file_proc(
     p_attach_file_seq      IN         NUMBER       -- ÷���Ϸù�ȣ
    ,p_file_key             IN         VARCHAR2     -- ÷������Ű
    ,p_file_name            IN         VARCHAR2     -- ���ϸ�
    ,p_file_ext             IN         VARCHAR2     -- ����Ȯ����
    ,p_file_path            IN         VARCHAR2     -- ���ϰ��
    ,p_file_size            IN         NUMBER       -- ����ũ��
    ,p_file_flag            IN         VARCHAR2     -- ���ϱ���
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  ÷������
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   attachment_file
    WHERE
        attach_file_seq      = p_attach_file_seq
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT attachment_file_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END attachment_file_proc;
PROCEDURE asset_common_part_proc(
     p_part_no              IN         VARCHAR2     -- �μ�ǰ���ȣ
    ,p_part_name            IN         VARCHAR2     -- ��ǰ��
    ,p_part_name_local      IN         VARCHAR2     -- ��ǰ��_����
    ,p_part_spec            IN         VARCHAR2     -- ��ǰ�԰�
    ,p_status               IN         VARCHAR2     -- ��뿩��
    ,p_remarks              IN         VARCHAR2     -- ���
    ,p_write_by             IN         VARCHAR2     -- �ۼ���
    ,p_txn_type             IN         VARCHAR2     -- ó������
    ,p_object_id            OUT        VARCHAR2     -- ��üid
    ,p_out_code             OUT        VARCHAR2     -- ó���ڵ�
    ,p_out_message          OUT        VARCHAR2     -- ó������
)/**********************************************************************
***********************************************************************
-- Project       : (��)�뵿 ������ �ڻ����
-- Program Name  :  �μ�ǰ��
-- Description   :
-- Author        :
-- Creation Date :
***********************************************************************
**********************************************************************/
IS
    v_count       NUMBER;
    v_object_id   NUMBER;

    e_test        EXCEPTION; --�׽�Ʈ
    e_exist       EXCEPTION; --����
    e_notfound    EXCEPTION; --������
    e_nottxntype  EXCEPTION; --ó������
    e_nameexist   EXCEPTION; --��Ī����

BEGIN

    -- �ڷ����� Ȯ��
    SELECT COUNT(*)
    INTO   v_count
    FROM   asset_common_part
    WHERE
        part_no              = p_part_no
    ;

    --************************************
    --************* ��� *****************
    --************************************
    IF(p_txn_type = 'exec_madd') THEN

        IF(v_count > 0) then
            RAISE e_exist;
        END IF;

        -- sequence
        SELECT asset_common_part_seq.NEXTVAL
        INTO   v_object_id
        FROM   DUAL;

        -- �ű� key ����
        p_object_id := v_object_id;

        -- ���ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mupd') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
    --************* ���� *****************
    --************************************
    ELSIF(p_txn_type = 'exec_mdel') THEN

        -- �ߺ�üũ
        IF(v_count <= 0) THEN
            RAISE e_notfound;
        END IF;

        -- ����ó��
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
        p_out_message := 'ERR_TXNTYPE';            -- ó�������� �������� �ʽ��ϴ�

    WHEN e_exist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_EXIST';         -- �����Ͱ� �����մϴ�

    WHEN e_notfound THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_DATA_NOTFOUND';      -- �����Ͱ� �������� �ʽ��ϴ�

    WHEN e_nameexist THEN
        p_out_code    := '-20001';
        p_out_message := 'ERR_CODENAME_EXIST';     -- ���� �ڵ���� �����մϴ�

    WHEN OTHERS THEN
        p_out_code    := SQLCODE;
        p_out_message := SUBSTR(SQLERRM, 1, 255);  -- ����Ÿ���̽� ����;
END asset_common_part_proc;
END asset_mgmt_pkg;
/