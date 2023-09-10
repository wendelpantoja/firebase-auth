import styled from "styled-components"

export const ContainerModal = styled.div`
    width: 95%;
    max-width: 500px;
    padding: 30px 15px;
    background-color: #1D1D1D;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    color: white;

    border-radius: 10px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .container_buttons button:nth-child(1) {
        margin-right: 40px;
    }
`

export const Button = styled.button`
    width: 130px;
    height: 40px;
    background-color: ${(props) => props.color};
    color: white;
    border: 0;
    border-radius: 10px;
    cursor: pointer;

    font-weight: 600;
`