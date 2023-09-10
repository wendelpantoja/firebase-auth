import { Link } from "react-router-dom";
import { ContainerButtons, ContainerMenu } from "./styles";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import { ButtonRegister, ButtonToEnter } from "../../pages/Home/styles";

interface MenuProps {
    action?: string;
    handleMenu: (value: boolean) => void;
}


export function ActionMenu({action, handleMenu}: MenuProps) {
    function closeMenu() {
        handleMenu(true)
    }
    return (
        <ContainerMenu $activeMenu={action}>
            <CloseOutlined className="close" onClick={closeMenu}/>
            <ContainerButtons>
                <Link to="/login">
                    <UserOutlined />
                    <ButtonToEnter>Entrar</ButtonToEnter>
                </Link>
                <Link to="/register">
                    <ButtonRegister $width="120px" $heigth="40px">Cadastrar-se</ButtonRegister>
                </Link>
            </ContainerButtons>
        </ContainerMenu>
    )
}