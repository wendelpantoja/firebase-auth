import { Container } from "../../styles/Global.styles";
import { 
    ButtonRegister, 
    ButtonToEnter, 
    Header, 
    Nav, 
    SectionHome 
} from "./styles";
import LogoFireBase from "../../assets/img/logo-firebase.svg"
import { Link } from "react-router-dom";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ActionMenu } from "../../components/ActionMenu";

export function Home(){
    const [actionMenu, setActionMenu] = useState(true)
    function handleMenu(value: boolean) {
        setActionMenu(value)
    }
    return ( 
        <>
            <Header>
                <Container>
                    <Nav>
                        <div className="logo">
                            <img src={LogoFireBase} alt="" />
                            <h2>FirebaseAuth</h2>
                        </div>
                        <div className="nav_buttons">
                            <Link to="/login">
                                <UserOutlined />
                                <ButtonToEnter>Entrar</ButtonToEnter>
                            </Link>
                            <Link to="/register">
                                <ButtonRegister $width="120px" $heigth="40px">Cadastrar-se</ButtonRegister>
                            </Link>
                        </div>
                        <div className="menu">
                            {actionMenu && <MenuOutlined onClick={() => handleMenu(false)}/>}
                        </div>
                    </Nav>
                </Container>
            </Header>
            <SectionHome>
                {!actionMenu && 
                    <ActionMenu 
                        action={actionMenu ? "-100%" : "0"}
                        handleMenu={handleMenu}
                    />
                }
                <Container>
                    <div className="container_description">
                        <img src={LogoFireBase} alt="" />
                        <h2>Sistema de autenticação com firebase</h2>
                        <div className="container_button">
                            <Link to="/register">
                                <ButtonRegister $width="150px" $heigth="45px">Cadastrar-se</ButtonRegister>
                            </Link>
                        </div>
                    </div>
                </Container>
            </SectionHome>
        </>
     )
}