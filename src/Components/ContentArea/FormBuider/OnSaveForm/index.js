import React from "react";
import { DownloadOutlined, SyncOutlined } from "@ant-design/icons";
import { Button } from "antd";

const BottomButtons = ({ onSavingForm, loader }) => {
  return (
    <div className="BottomButtons-section">
      <div className="validate-button">
        <Button shape="round" icon={<SyncOutlined />}>
          Validate
        </Button>
      </div>
      <div className="save-button">
        <Button
          onClick={onSavingForm}
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          loading={loader}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default BottomButtons;
