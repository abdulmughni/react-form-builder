import React from "react";
import { Layout } from "antd";
import { FormListContainer, FormCreateContainer } from "../../../Container";
import HeaderSection from "./../Header";

const { Header, Footer, Sider, Content } = Layout;

const FormList = [
  {
    id: 1,
    name: "Input",
    type: "input",
    placeholder: "Your Placeholder",
    required: false,
    inputType: ["text"],
  },
  {
    id: 2,
    name: "CheckBox",
    checkType: "checkbox",
    type: "checkbox",
    options: [
      { name: "option 1" },
      { name: "option 2" },
      { name: "option 3" },
      { name: "option 4" },
    ],
    required: false,
  },
  {
    id: 3,
    name: "File uploader",
    buttonText: "Choose file",
    type: "file uploader",
    required: false,
  },
  {
    id: 4,
    name: "Text",
    type: "text",
    placeholder: "Type here...",
    required: false,
    rows: 3,
  },
  {
    id: 5,
    name: "Divider",
    type: "divider",
  },
];

const MainComponent = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={300}>
        <FormListContainer FormList={FormList} />
      </Sider>
      <Layout className="site-layout">
        <Header>
          <HeaderSection />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <FormCreateContainer FormList={FormList} />
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
};

export default MainComponent;
