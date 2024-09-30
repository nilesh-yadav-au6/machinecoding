import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import { useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
  return (
    <>
      <ProgressBar value={value} />
    </>
  );
}

export default App;
