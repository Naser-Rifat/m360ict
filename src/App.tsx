import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MainLayout from "./Components/MainLayout";
import LaunchesList from "./Components/LaunchesList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MainLayout>
        <LaunchesList />
      </MainLayout>
    </div>
  );
}

export default App;
