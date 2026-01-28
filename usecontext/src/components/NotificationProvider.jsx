import { useState } from "react";
import { NotificationContext } from "./NotificationContext";

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const addNotification = (message) => {
  setNotifications((prev) => [...prev, message]);

    setTimeout(() => {
      setNotifications((prev) => prev.slice(1))
    }, 3000)
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  )
};
