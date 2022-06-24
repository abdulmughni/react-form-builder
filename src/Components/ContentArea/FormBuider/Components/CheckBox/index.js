import React from "react";
import { Checkbox, Col, Row } from "antd";
import IconButton from "./../IconButtons";

const CheckBox = ({ showModal, data, onDeleteField, addShowModal }) => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <div className="checkbox-section">
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
        <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
          <Row>
            {data &&
              data.options &&
              data.options.length > 0 &&
              data.options.map((items) => (
                <Col span={8}>
                  <Checkbox value={items.name}>{items.name}</Checkbox>
                </Col>
              ))}
          </Row>
        </Checkbox.Group>
      </div>
    </div>
  );
};

export default CheckBox;
