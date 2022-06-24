import React from "react";
import IconButton from "../IconButtons";

const Form = ({ showModal, data, onDeleteField, addShowModal }) => {
  return (
    <div className="form-section">
      <h2>{data.name}</h2>
      <IconButton
        onDeleteField={onDeleteField}
        showModal={showModal}
        addShowModal={addShowModal}
      />
      <hr />
    </div>
  );
};

export default Form;
