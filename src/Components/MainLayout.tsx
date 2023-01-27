import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;
interface LAY {
  children: JSX.Element;
}

const MainLayout: React.FC<LAY> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span className="logo">logo</span>
        <Menu
          theme="dark"
          mode="horizontal"
          className=""
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      {children}
      {/* <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default MainLayout;
