import "./App.css";
import useNotification from "./hook/useNotification";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-right");

  return (
    <>
      {NotificationComponent}
      <button
        onClick={() =>
          triggerNotification({
            type: "error",
            position: "top-right",
            message: "This is error",
            duration: 3000,
          })
        }
      >
        Show error
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "warning",
            position: "top-right",
            message: "This is warn",
            duration: 3000,
          })
        }
      >
        Show warn
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "info",
            position: "top-right",
            message: "This is info",
            duration: 3000,
          })
        }
      >
        Show info
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "success",
            position: "top-right",
            message: "This is Success",
            duration: 3000,
          })
        }
      >
        Show sucesss
      </button>
    </>
  );
}

export default App;
