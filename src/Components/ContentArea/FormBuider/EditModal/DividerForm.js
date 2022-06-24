import React, { useEffect } from "react";
import { Input, Button, Form } from "antd";

const DividerForm = ({
  fieldObj,
  fieldsList,
  setFieldsList,
  showModalClose,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: fieldObj && fieldObj.name,
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

export default DividerForm;
