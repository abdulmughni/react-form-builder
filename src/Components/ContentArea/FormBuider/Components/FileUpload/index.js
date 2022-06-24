import React, { useState } from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import IconButton from "../IconButtons";

const FileUpload = ({ showModal, data, onDeleteField, addShowModal }) => {
  const [fileList, setFileList] = useState([]);

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  return (
    <div className="File-uploader-section">
      <div className="form-section">
        <h2>
          {data.name}
          {data.required === true && <span className="required-star">*</span>}
        </h2>
        <IconButton
          onDeleteField={onDeleteField}
          showModal={showModal}
          addShowModal={addShowModal}
        />
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>{data.buttonText}</Button>
        </Upload>
      </div>
    </div>
  );
};

export default FileUpload;
