import { useAlert } from "./useAlert";
import "../App.css"

const NotificationList = () => {
  const { notifications } = useAlert();

  return (
    <div className="notification-container">
      {notifications.map((note, index) => (
        <div key={index} className="notification">
          {note}
        </div>
      ))}
    </div>
  )
};

export default NotificationList;
