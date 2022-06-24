import React from "react";
import IconButton from "../IconButtons";
import { Input } from "antd";

const InputSection = ({ showModal, data, onDeleteField, addShowModal }) => {
  return (
    <div className="form-section">
      <h2>
        {data.name}{" "}
        {data.required === true && <span className="required-star">*</span>}
      </h2>
      <IconButton
        onDeleteField={onDeleteField}
        showModal={showModal}
        addShowModal={addShowModal}
      />
      <Input type={data.inputType} placeholder={data.placeholder} />
    </div>
  );
};

export default InputSection;
