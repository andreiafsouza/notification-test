import React, { useState, useEffect } from "react";
import icon from "../assets/icon.png";

function NotificationComponent() {
  const [permission, setPermission] = useState(Notification.permission);

  useEffect(() => {
    if (permission === "default") {
      Notification.requestPermission().then((perm) => {
        setPermission(perm);
      });
    }
  }, [permission]);

  const handleNotification = () => {
    if (permission === "granted") {
      const notification = new Notification("Hello!", {
        body: "This is a test notification.",
        icon: icon,
      });
    } else if (permission === "default") {
      Notification.requestPermission().then((perm) => {
        setPermission(perm);
        if (perm === "granted") {
          const notification = new Notification("Hello!", {
            body: "This is a test notification.",
            icon: icon,
          });
        }
      });
    } else {
      alert(
        "Notifications are blocked. Please enable them in your browser settings."
      );
    }
  };

  return (
    <div>
      <h1>React Vite Notifications</h1>
      {permission === "granted" ? (
        <button onClick={handleNotification}>Send Notification</button>
      ) : (
        <p>Enable notifications to receive updates.</p>
      )}
    </div>
  );
}

export default NotificationComponent;
