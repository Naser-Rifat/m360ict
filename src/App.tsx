import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LaunchesList from "./Components/LaunchesList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LaunchesList />
    </div>
  );
}

export default App;
