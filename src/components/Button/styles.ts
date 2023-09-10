import styled from "styled-components"

export const ButtonComponent = styled.button`
    width: 100%;
    height: 56px;
    background-color: black;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.842);
    }
`