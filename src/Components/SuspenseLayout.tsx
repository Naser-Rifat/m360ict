import { Spin } from "antd";
import React, { FC, ReactNode, Suspense } from "react";

interface iProps {
  children: ReactNode;
}

const SuspenseLayout: FC<iProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div style={{ height: "100%" }}>
          <Spin />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseLayout;
