import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 15px;
    margin: 0 auto;
`

export const Form = styled.form`
    width: 100%;
    max-width: 460px;
    border-radius: 24px;
    background: #FFF;
    padding: 50px 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .inputs_container {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 28px; 

        span {
            font-size: 12px;
            color: red;
        }

    }

    a {
        text-align: center;
        margin-bottom: 26px;
        font-size: 14px;
    }

    .account {
        text-align: center;
        font-size: 15px;
        margin-top: 41px;
    }

    .account > a {
        font-weight: 700;
    }
`