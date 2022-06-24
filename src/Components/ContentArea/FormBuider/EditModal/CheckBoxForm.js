import React, { useEffect } from "react";
import { Input, Button, Radio, Form, Checkbox, Col, Row, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const CheckBoxForm = ({
  fieldObj,
  fieldsList,
  setFieldsList,
  showModalClose,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: fieldObj && fieldObj.name,
      checkType: fieldObj && fieldObj.checkType,
      placeholder: fieldObj && fieldObj.placeholder,
      required: fieldObj && fieldObj.required,
      options: fieldObj && fieldObj.options,
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
            <Form.Item name="checkType">
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="for-inline-input">
          <div className="edit-input-width">
            <h3>Options</h3>
            <div className="options-style">
              <Form.List name="options">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space key={key}>
                        <Form.Item
                          {...restField}
                          name={[name, "name"]}
                          rules={[
                            {
                              required: true,
                              message: "Please enter checkbox label",
                            },
                          ]}
                        >
                          <Input placeholder="Checkbox Label" />
                        </Form.Item>

                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                        className="add-option-button"
                      >
                        Add Options
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </div>
          </div>
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

export default CheckBoxForm;
