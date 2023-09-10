import { LogoutOutlined } from "@ant-design/icons";
import { ContainerElemens, HeaderDash } from "./styles";
import { Container } from "../../styles/Global.styles";

interface IfunctioProp {
    handleModal: (value: boolean) => void; 
}

export function Header({ handleModal }: IfunctioProp) {

    function handleModalAction() {
        handleModal(true)
    }

    return (
        <HeaderDash>
            <Container>
                <ContainerElemens>
                    <h2>Dashboard</h2>
                    <LogoutOutlined onClick={handleModalAction} />
                </ContainerElemens>
            </Container>
        </HeaderDash>
    )
}