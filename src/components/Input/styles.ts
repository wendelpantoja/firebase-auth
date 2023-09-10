import styled from "styled-components"


export const InputContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    label {
        font-size: 15px;
        font-weight: 500;
    }
    div {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: 1.5px solid black;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 9px;

        svg {
            font-size: 21px;
            margin-right: 15px;
            cursor: pointer;
        }
    }
`

export const InputComponent = styled.input`
    width: 100%;
    height: 54px;
    padding-left: 15px;
    outline: none;
    border-radius: 10px;
    border: none;
`
