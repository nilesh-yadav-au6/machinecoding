import { useState } from "react";
import Notification from "../components/Notification";
import { v4 as uuidv4 } from "uuid";

const useNotification = (position = "top-right") => {
  const [notifications, setNotifications] = useState([]);

  const triggerNotification = (notificationProps) => {
    let toastId = uuidv4();

    setNotifications((preNotifications) => {
      const newNotification = [
        ...preNotifications,
        {
          id: toastId,
          ...notificationProps,
        },
      ];
      return newNotification;
    });

    setTimeout(() => {
      setNotifications((prevNotification) =>
        prevNotification.filter((n) => n.id !== toastId)
      );
    }, notificationProps.duration);
  };

  const handleOnClose = (index) => {
    setNotifications((preNotifications) => {
      const copyNotification = [...preNotifications];
      copyNotification.splice(index, 1);
      return copyNotification;
    });
  };

  const NotificationComponent = (
    <div className={`notification-container ${position}`}>
      {notifications.map((notification, index) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={() => handleOnClose(index)}
        />
      ))}
    </div>
  );

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
