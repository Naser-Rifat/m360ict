import { ReactElement, Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LaunchesList from "./Components/LaunchesList";
import LandingPage from "./pages/Landingpage";
import { useRoutes } from "react-router";
import { Spin } from "antd";
import { MainLayout } from "./Components/MainLayout";
import SingleFlightDetails from "./Components/SingleFlightDetails";

function App() {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "singleflight/:id",
          element: <SingleFlightDetails />,
        },
      ],
    },
  ];
  const allroutes = useRoutes(routes);
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Suspense fallback={<Spin />}>{allroutes}</Suspense>
    </div>
  );
}

export default App;
