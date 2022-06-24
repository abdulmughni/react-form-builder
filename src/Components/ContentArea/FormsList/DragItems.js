import React from "react";
import { DragOutlined } from "@ant-design/icons";
import { useDrag } from "react-dnd";

const DragItems = ({ id, name, data, addFieldList, isAddVisible }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "form",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const onAddingFields = () => {
    if (isAddVisible === true) {
      addFieldList(data);
    }
  };

  return (
    <div className="drag-drop-table" ref={drag} onClick={onAddingFields}>
      <DragOutlined />
      <div className="font-bold">{name}</div>
    </div>
  );
};

export default DragItems;
