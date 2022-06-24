import React from "react";
import {
  DragOutlined,
  FolderAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const IconButton = ({ showModal, onDeleteField, addShowModal }) => {
  return (
    <div className="form-button-icons">
      {/* <Button type="link">
        <DragOutlined />
      </Button> */}
      <Button type="link" onClick={addShowModal}>
        <FolderAddOutlined />
      </Button>
      <Button type="link" onClick={showModal}>
        <EditOutlined />
      </Button>
      <Button type="link" onClick={onDeleteField}>
        <DeleteOutlined />
      </Button>
    </div>
  );
};

export default IconButton;
