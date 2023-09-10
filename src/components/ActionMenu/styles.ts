import styled from "styled-components"

export const ContainerMenu = styled.div<{$activeMenu: string | undefined}>`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 80%;
    height: 40vh;
    background-color: #1D1D1D;

    position: absolute;
    top: 0;
    right: ${(props) => props.$activeMenu};
    .close {
        position: absolute;
        top: 20px;
        right: 15px;
        font-size: 25px;
        color: #FFCA28;
    }
`
export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    a > span {
        color: #FFCA28;
    }
`
