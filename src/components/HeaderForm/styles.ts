import styled from "styled-components"

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 15px;

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 10px;
    }

    div > img {
        width: 28px;
        height: 28px;
    }

    div > p {
        font-size: 24px;
        font-weight: 500;
        color: black;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        color: black;
    }
`