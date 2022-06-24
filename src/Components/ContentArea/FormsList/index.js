import { useState } from "react";
import { Input, Modal, Form, Button, Empty } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DragItems from "./DragItems";

const FormsList = ({
  FormList,
  onGetFormsList,
  getFormsListRes,
  onGetFormsListObject,
  getFormsListObjectRes,
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
      <div className="form-list-section">
        <div className="form-section-title">
          <h2>Forms</h2>
          <PlusOutlined onClick={formListModal} />
        </div>
        {getFormsListRes && getFormsListRes.length > 0 ? (
          <div className="forms-list">
            {getFormsListRes.map((data, index) => (
              <div
                key={index}
                className={
                  data.id ===
                  (getFormsListObjectRes && getFormsListObjectRes.id)
                    ? "active"
                    : ""
                }
                onClick={() => onGetFormsListObject(data)}
                id={data.id}
              >
                {data.formName}
              </div>
            ))}
          </div>
        ) : (
          <Empty
            imageStyle={{
              height: 60,
            }}
            description={<span>No Data</span>}
          >
            <Button type="primary" onClick={formListModal}>
              Create Now
            </Button>
          </Empty>
        )}
      </div>
      {/* <div className="drag-drop-section">
        <h2>Cell layout</h2>
        <div className="drag-drop-table">
          <DragOutlined />
          <div className="font-bold">Table</div>
        </div>
      </div> */}
      <div className="drag-drop-section">
        <h2>Form components</h2>
        {FormList &&
          FormList.length > 0 &&
          FormList.map((data, index) => (
            <DragItems key={index} name={data.name} id={data.id} />
          ))}
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
