import "./notification.scss"
import React, { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import CampaignIcon from '@mui/icons-material/Campaign';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { motion } from "framer-motion"

interface INotification {
  icon: React.ElementType;
  content: string;
  timestamp: string;
  action: string;
}

const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState<INotification[]>([
    {
      icon: NotificationsIcon,
      content: "New message received.",
      timestamp: "Today at 10:00 AM",
      action: "Ver Detalles",
    },
    {
      icon: NotificationsIcon,
      content: "Important notification.",
      timestamp: "Yesterday at 3:30 PM",
      action: "Leer Ahora",
    },
    // Agregar más notificaciones aquí
  ]);

  const markAsRead = () => {
    // Lógica para marcar todas las notificaciones como leídas
    setNotifications([]);
  };

  const clearAll = () => {
    // Lógica para borrar todas las notificaciones
    setNotifications([]);
  };

  return (
    <motion.div
      className="box notifications-container"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      >
      <div className="notifications-header"
      >
        <div className="notifications-icon">
          <CampaignIcon />
        </div>
        <div className="notifications-title">Notifications</div>
      </div>

      <div className="notifications-list">
        {notifications.map((notification, index) => (
          <div key={index} className="notification-item">
            <div className="notification-icon">
              <notification.icon />
            </div>
            <div className="notification-content">{notification.content}</div>
            <div className="notification-timestamp">{notification.timestamp}</div>
            <div className="notification-action">
              <button>
                <VisibilityIcon className="" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="notifications-actions">
        <button onClick={markAsRead}>Mark All as Read</button>
        <button onClick={clearAll}>Delete All</button>
      </div>
    </motion.div>
  );
};

export default Notification;