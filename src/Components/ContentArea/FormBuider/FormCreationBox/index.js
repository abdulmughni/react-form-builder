import { useState } from "react";
import { Input, Modal, Form, Button, Empty } from "antd";

const FormsList = ({
  onGetFormsList,
  getFormsListRes,
  onGetFormsListObject,
}) => {
  const [visible, setVisible] = useState(false);

  const formListModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    let formsListArray = getFormsListRes ? getFormsListRes : [];
    const formObj = {
      id: getFormsListRes ? getFormsListRes.length + 1 : 1,
      formName: values.name,
      formData: [],
    };
    formsListArray.push(formObj);

    onGetFormsList(formsListArray);
    onGetFormsListObject(formObj);
    setVisible(false);
  };

  return (
    <div>
      <div className="empty-box">
        <Empty description={<span>You don't have any form</span>}>
          <Button onClick={formListModal} type="primary">
            Create Form First
          </Button>
        </Empty>
      </div>

      {visible && (
        <Modal
          title="Form Name"
          visible={visible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form onFinish={onFinish}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input name!" }]}
            >
              <Input placeholder="type name" />
            </Form.Item>
            <div className="edit-form-buttons">
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>
              ,
              <Button key="submit" type="primary" htmlType="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default FormsList;
