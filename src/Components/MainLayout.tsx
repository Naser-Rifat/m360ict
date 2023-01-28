// import React from "react";
// import { Breadcrumb, Layout, Menu, theme } from "antd";

// const { Header, Content, Footer } = Layout;
// interface LAY {
//   children: JSX.Element;
// }

// const MainLayout: React.FC<LAY> = ({ children }) => {
//   return (
//     <Layout className="layout">
//       <Header
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       ></Header>
//       {children}
//     </Layout>
//   );
// };

import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";
import SuspenseLayout from "./SuspenseLayout";

export const MainLayout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <Header
        style={{
          padding: "0 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        <div style={{}}>
          <img
            style={{
              width: 150,
            }}
            src={"/src/assets/spacex.svg"}
            alt=""
          />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(1).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `Home`,
            };
          })}
        />
      </Header>
      <SuspenseLayout>
        <Outlet />
      </SuspenseLayout>
    </div>
  );
};
