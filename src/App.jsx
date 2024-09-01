import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import addNotification from "react-push-notification";
import NotificationComponent from "./components/Notification";
import icon from "./assets/icon.png"

function App() {
  const [count, setCount] = useState(0);
  const [userResponded, setUserResponded] = useState(0);

  const buttonClick = () => {
    addNotification(
      {
        title: "Warning",
        subtitle: "This is a subtitle",
        message: "This is a very long message",
        theme: "darkblue",
        native: true,
        icon: icon,
        duration: 10000
      }
    );
  };

  function notifyUser(
    notificationText = "Thank you for enabling notifications!"
  ) {
    if (!("Notification" in window)) {
      alert("Browser não suporta notificações");
    } else if (Notification.permission === "granted") {
      const notification = new Notification(notificationText);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const notification = new Notification(notificationText);
        }
      });
    }
  }

  return (
    <>
      <NotificationComponent />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={buttonClick}>SEND NOTIFICATION</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
