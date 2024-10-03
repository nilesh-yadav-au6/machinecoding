import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import useCustomEffect from "./hooks/useCustomEffect";
import { useState } from "react";

function App() {
  const size = useWindowSize();

  const [count, setCount] = useState(0);

  useCustomEffect(() => {
    console.log(count);
    return () => console.log("clean up called");
  }, [count]);

  return (
    <>
      {size.width}/{size.height}
      <div>
        {count}
        <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      </div>
    </>
  );
}

export default App;
