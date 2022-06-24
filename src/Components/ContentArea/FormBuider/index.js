import React, { Fragment, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { Modal, Button } from "antd";
import TextInput from "./Components/TextInput";
import InputSection from "./Components/Input";
import FileUpload from "./Components/FileUpload";
import Divider from "./Components/Divider";
import CheckBox from "./Components/CheckBox";
import InputForm from "./EditModal/InputForm";
import TextForm from "./EditModal/TextForm";
import FileUploaderForm from "./EditModal/FileUploaderForm";
import CheckBoxForm from "./EditModal/CheckBoxForm";
import DividerForm from "./EditModal/DividerForm";
import DragItems from "../FormsList/DragItems";
import OnSaveForm from "./OnSaveForm";
import { FormCreationBoxContainer } from "../../../Container";

const Form = ({
  FormList,
  getFormsListObjectRes,
  getFormsListRes,
  onGetFormsList,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [fieldsList, setFieldsList] = useState([]);
  const [fieldObj, setFieldObj] = useState({});
  const [fieldIndex, setFieldIndex] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (getFormsListObjectRes) {
      setFieldsList(getFormsListObjectRes.formData);
    }
  }, [getFormsListObjectRes]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "form",
    drop: (item) => addImageToList(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToList = (id) => {
    const itemsList = FormList.filter((picture) => id === picture.id);
    setFieldsList((fieldsList) => [...fieldsList, itemsList[0]]);
  };

  const addFieldList = (data) => {
    const fieldsListArr = fieldsList;
    fieldsListArr.splice(fieldIndex + 1, 0, data);
    setFieldsList(fieldsListArr);
    setIsAddVisible(false);
  };

  const showModal = (data) => {
    setIsModalVisible(true);
    setFieldObj(data);
  };

  const addShowModal = (index) => {
    setIsAddVisible(true);
    setFieldIndex(index);
  };

  const showModalClose = () => {
    setIsModalVisible(false);
  };

  const addModalClose = () => {
    setIsAddVisible(false);
  };

  const onDeleteField = (index) => {
    const fieldsListArr = [...fieldsList];
    fieldsListArr.splice(index, 1);
    setFieldsList(fieldsListArr);
  };

  const handleCancel = () => {
    setIsAddVisible(false);
  };

  const onSavingForm = () => {
    setLoader(true);
    const formListRes = [...getFormsListRes];
    const formDetailObj = getFormsListObjectRes;
    const formIndex = formListRes.indexOf(formDetailObj);

    formDetailObj.formData = fieldsList;
    formListRes.splice(formIndex + 1, 0, formListRes);

    setTimeout(() => setLoader(false), 2000);

    onGetFormsList(formListRes);
  };

  return (
    <Fragment>
      <div className="m-80 min-height" ref={drop}>
        {getFormsListRes && getFormsListRes.length > 0 ? (
          fieldsList && fieldsList.length > 0 ? (
            <Fragment>
              {fieldsList.map(
                (data, index) =>
                  (data && data.type === "input" && (
                    <InputSection
                      data={data}
                      showModal={() => showModal(data)}
                      onDeleteField={() => onDeleteField(index)}
                      addShowModal={() => addShowModal(index)}
                    />
                  )) ||
                  (data && data.type === "divider" && (
                    <Divider
                      data={data}
                      showModal={() => showModal(data)}
                      onDeleteField={() => onDeleteField(index)}
                      addShowModal={() => addShowModal(index)}
                    />
                  )) ||
                  (data && data.type === "text" && (
                    <TextInput
                      data={data}
                      showModal={() => showModal(data)}
                      onDeleteField={() => onDeleteField(index)}
                      addShowModal={() => addShowModal(index)}
                    />
                  )) ||
                  (data && data.type === "file uploader" && (
                    <FileUpload
                      data={data}
                      showModal={() => showModal(data)}
                      onDeleteField={() => onDeleteField(index)}
                      addShowModal={() => addShowModal(index)}
                    />
                  )) ||
                  (data && data.type === "checkbox" && (
                    <CheckBox
                      data={data}
                      showModal={() => showModal(data)}
                      onDeleteField={() => onDeleteField(index)}
                      addShowModal={() => addShowModal(index)}
                    />
                  ))
              )}
              <OnSaveForm onSavingForm={onSavingForm} loader={loader} />
            </Fragment>
          ) : (
            <div className="drop-here">
              <h2>Drop Here</h2>
            </div>
          )
        ) : (
          <FormCreationBoxContainer />
        )}

        {isModalVisible && (
          <Modal
            title="Edit Modal"
            visible={isModalVisible}
            onCancel={showModalClose}
            width={1000}
            footer={null}
          >
            {fieldObj.type === "input" && (
              <InputForm
                fieldObj={fieldObj}
                fieldsList={fieldsList}
                setFieldsList={setFieldsList}
                showModalClose={showModalClose}
              />
            )}
            {fieldObj.type === "text" && (
              <TextForm
                fieldObj={fieldObj}
                fieldsList={fieldsList}
                setFieldsList={setFieldsList}
                showModalClose={showModalClose}
              />
            )}
            {fieldObj.type === "file uploader" && (
              <FileUploaderForm
                fieldObj={fieldObj}
                fieldsList={fieldsList}
                setFieldsList={setFieldsList}
                showModalClose={showModalClose}
              />
            )}
            {fieldObj.type === "checkbox" && (
              <CheckBoxForm
                fieldObj={fieldObj}
                fieldsList={fieldsList}
                setFieldsList={setFieldsList}
                showModalClose={showModalClose}
              />
            )}
            {fieldObj.type === "divider" && (
              <DividerForm
                fieldObj={fieldObj}
                fieldsList={fieldsList}
                setFieldsList={setFieldsList}
                showModalClose={showModalClose}
              />
            )}
          </Modal>
        )}

        {isAddVisible && (
          <Modal
            title="Add Your Field"
            visible={isAddVisible}
            onCancel={addModalClose}
            width={1000}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button key="submit" type="primary">
                Save
              </Button>,
            ]}
          >
            <div className="modal-list">
              {FormList &&
                FormList.length > 0 &&
                FormList.map((data, index) => (
                  <DragItems
                    key={index}
                    data={data}
                    name={data.name}
                    id={data.id}
                    addFieldList={addFieldList}
                    isAddVisible={isAddVisible}
                  />
                ))}
            </div>
          </Modal>
        )}
      </div>
    </Fragment>
  );
};

export default Form;
