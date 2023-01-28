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
          display: "flex",
          justifyContent: "space-between",
        }}
      ></Header>
      <SuspenseLayout>
        <Outlet />
      </SuspenseLayout>
    </div>
  );
};
