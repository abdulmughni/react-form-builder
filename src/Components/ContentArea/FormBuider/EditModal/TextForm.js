import React, { useEffect } from "react";
import { Input, Button, Radio, Form, InputNumber } from "antd";

const TextForm = ({ fieldObj, fieldsList, setFieldsList, showModalClose }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: fieldObj && fieldObj.name,
      label: fieldObj && fieldObj.label,
      placeholder: fieldObj && fieldObj.placeholder,
      required: fieldObj && fieldObj.required,
      rows: fieldObj && fieldObj.rows,
    });
  }, [fieldObj]);

  const onFinish = (values) => {
    onSaveField(values);
  };

  const onSaveField = (values) => {
    const fieldsListArr = [...fieldsList];
    const index = fieldsListArr.indexOf(fieldObj);
    values.id = fieldObj.id;
    values.type = fieldObj.type;

    fieldsListArr[index] = values;

    setFieldsList(fieldsListArr);
    showModalClose();
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <div className="modal-tool-name">
        <div className="for-inline-input">
          <div className="edit-input">
            <h3>Name</h3>
            <Form.Item name="name">
              <Input />
            </Form.Item>
          </div>
          <div className="edit-input">
            <h3>Label</h3>
            <Form.Item name="label">
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="mt-25 for-inline-input">
          <div className="edit-input">
            <h3>Placeholder</h3>
            <Form.Item name="placeholder">
              <Input />
            </Form.Item>
          </div>
          <div className="edit-input">
            <h3>Required</h3>
            <Form.Item name="required">
              <Radio.Group>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>
        <div className="edit-input">
          <h3>Table</h3>
          <div className="input-numbers">
            <span>Rows</span>
            <Form.Item name="rows">
              <InputNumber />
            </Form.Item>
          </div>
        </div>
      </div>
      <div className="edit-form-buttons">
        <Button key="back" onClick={showModalClose}>
          Cancel
        </Button>
        ,
        <Button key="submit" type="primary" htmlType="submit">
          Save
        </Button>
      </div>
    </Form>
  );
};

export default TextForm;
