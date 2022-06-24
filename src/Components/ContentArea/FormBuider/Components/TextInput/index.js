import React from "react";
import { Input } from "antd";
import IconButton from "../IconButtons";

const { TextArea } = Input;

const TextInput = ({ showModal, data, onDeleteField }) => {
  return (
    <div className="text-input-section">
      <div className="form-section">
        <h2>{data.name}</h2>
        <IconButton onDeleteField={onDeleteField} showModal={showModal} />
        <TextArea rows={data.rows} placeholder={data.placeholder} />
      </div>
    </div>
  );
};

export default TextInput;
