import { useEffect, useState } from 'react';
import styles from './NotificationBox.module.css';

interface Notification {
    timestamp: number;
    Notification: string;
    Priority: string;
}

function NotificationBox() {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch('http://192.168.0.186:8000/notifications/notification_get/');
                const data: Notification = await response.json();
                console.log(data); // Log the received data to inspect its structure

                // Check if the fetched notification is different from the last displayed one
                if (notifications.length === 0 || data.timestamp !== notifications[0].timestamp) {
                    setNotifications([data, ...notifications.slice(0, 9)]); // Add new notification to the beginning of the array
                }
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        const interval = setInterval(fetchNotifications, 1000);

        return () => clearInterval(interval);
    }, [notifications]); // Add notifications dependency to useEffect to trigger re-render when notifications change

    return (
        <div className={styles.NotificationBox}>
            <div className={styles.notifsList}>
                <div className={styles.monthlyNotif}>
                    <h3 className={styles.notifications1}>Notifications</h3>
                    <div className={styles.checkmarkIcon}>
                        <img
                            className={styles.ioniconccheckmarkccircle}
                            loading="eager"
                            alt=""
                            src="/ioniconccheckmarkccircle.svg"
                        />
                        <div className={styles.thisMonth}>
                            <span className={styles.span}>+30%</span>
                            <span> this month</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.notificationListItems}>
                {notifications.map((notification, index) => (
                    <div className={styles.group} key={notification.timestamp}>
                        <div className={styles.text}>{notification.Notification}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NotificationBox;
