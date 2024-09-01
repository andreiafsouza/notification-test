import { useState } from "react";
import "./App.css";
import NotificationComponent from "./components/Notification";

function App() {
  const [count, setCount] = useState(0);
  const [userResponded, setUserResponded] = useState(0);

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

  return <NotificationComponent />;
}

export default App;
