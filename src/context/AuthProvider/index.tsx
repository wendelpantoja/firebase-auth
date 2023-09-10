import { createContext, useEffect, useState } from "react";
import { IContext, IAuthProvider } from "./types";
import { createUserAcess, singInUserAcess } from "../../services/authentications/authAuthentications";
import {  onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../../services/fireBaseConfig";
import { errosCode } from "./erros";
import { Notification } from "../../components/Notification";

export const AuthContext = createContext<IContext>({} as IContext)


type NotificatioTypes = 'success' | 'info' | 'warning' | 'error'

interface NotificationProps {
    message?: string;
    type: NotificatioTypes; 
    description?: string;
} 

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<User | null>(null)
    const [handleSpinState, setHandleSpinState] = useState(false)
    const { notificationOpen, contextHolder } = Notification()

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
        })   
        
        return subscriber
    }, [])

    async function authenticate(email: string, password: string) {
        setHandleSpinState(true)
        try {
            const response = await singInUserAcess(email, password)
            const data = response.user
            setUser(data)
        } finally {
            setHandleSpinState(false)
        }
    }

    async function createUser(email: string, password: string) {
        setHandleSpinState(true)
        try {
            await createUserAcess(email, password);
            notificationGlobal({
                message: "Usuário criado com sucesso",
                type: "success"
            })
        } finally {
            setHandleSpinState(false)
        }

    }

    function logout() {
        setHandleSpinState(true)
        signOut(auth)
        .then(() => {
            setUser(null)
            setHandleSpinState(false)
        })
        .catch(error => console.log(error))
    }

    function notificationGlobal({ message, type, description }: NotificationProps) {
        if(message) {
            notificationOpen({
                message: message,
                type: type,
                description: description,
            })
        }
    }

    function fireBaseErrors(error: string | unknown) {
        errosCode.find((element) => {
            if(error == element.error) {
                notificationOpen({
                    message: element.message,
                    type: "error",
                })
            }
        })
    }


    return (
        <AuthContext.Provider value={{
            user, 
            authenticate, 
            createUser,
            logout,
            fireBaseErrors,
            handleSpinState,
            contextHolder,
            notificationGlobal,
        }}>
            {children}
        </AuthContext.Provider>
    )
}