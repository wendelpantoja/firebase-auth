import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter";
}

html, body {
    height: 100%;
}

body {
    background-color: black;
    position: relative;
}

a {
    text-decoration: none;
    color: black;
}

h1 {
    color: white;
}

h2 {
    color: white;
}

`

export const Container = styled.div`
    max-width: 1480px;
    margin: 0 auto;
    padding: 0 15px;
`