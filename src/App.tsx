import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LaunchesList from "./Components/LaunchesList";
import MainLayout from "./Components/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MainLayout>
        <LaunchesList />
      </MainLayout>
    </div>
  );
}

export default App;
