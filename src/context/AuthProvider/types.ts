import { User } from "firebase/auth";
import { ReactNode } from "react";

export interface IUser {
    user: User | null;
}

type NotificatioTypes = 'success' | 'info' | 'warning' | 'error'

interface NotificationProps {
    message?: string;
    type: NotificatioTypes; 
    description?: string;
} 

export interface IContext extends IUser {
    authenticate: (email: string, senha: string) => Promise<void>;
    createUser: (email: string, senha: string) => Promise<void>;
    logout: () => void;
    fireBaseErrors: (error: string) => void;
    handleSpinState: boolean;
    contextHolder: React.ReactElement;
    notificationGlobal: ({ message, type, description }: NotificationProps) => void;
}

export interface IAuthProvider {
    children: ReactNode;
}