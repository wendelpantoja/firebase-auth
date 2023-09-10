import { notification } from 'antd';

type NotificationTypes = 'success' | 'info' | 'warning' | 'error'

interface NotificationProps {
    message?: string;
    type: NotificationTypes; 
    description?: string;
} 

export function Notification() {
    const [api, contextHolder] = notification.useNotification();
    const notificationOpen = ({ message, type, description }: NotificationProps): void => {
        if(message) {
            api[type]({
                message: message,
                description: description,
                placement: "topRight",
            });
        }
    }

    return {
        notificationOpen,
        contextHolder
    }
}