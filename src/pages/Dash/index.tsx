import { useState } from "react"
import { Header } from "../../components/Header"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { Modal } from "../../components/Modal"
import { MainContainer } from "./styles"
import { Navigate } from "react-router-dom"

export function Dash() {
    const [handleModal, setHandleModal] = useState(false)
    const auth = useAuth()
    
    if(!auth.user) {
        return <Navigate to="/login" />
    }

    function handleModalAction(value: boolean) {
        setHandleModal(value)
    }

    return (
        <>
            <Header handleModal={handleModalAction} />
            <MainContainer>
                <h2>Olá, você está logado!</h2>
            </MainContainer>
            {handleModal && (<Modal handleModal={handleModalAction}/>)}
        </>
    )
}