import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 60px;
    line-height: 60px;
`

export const Nav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu {
        display: none;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            width: 25px;
        }
    }

    .nav_buttons {
        display: flex;
        align-items: center;
        gap: 20px;
        a {
            display: flex;
            align-items: center;
        }
        a > span {
            color: #FFCA28;
        }
    }

    @media (max-width: 700px) {
        .nav_buttons {
            display: none;
        }
        .menu {
            display: flex;

            span > svg{
                font-size: 25px;
                color: #FFCA28;
                cursor: pointer;
            }
        }
    }
`

export const ButtonToEnter = styled.button`
    width: 50px;
    height: 40px;
    background-color: transparent;
    color: white;
    font-weight: 600;
    border: none;
    cursor: pointer;
`
export const ButtonRegister = styled.button<{ 
    $width?: string | undefined; 
    $heigth: string | undefined}>`
    width: ${props => props.$width};
    height: ${props => props.$heigth};
    background-color: transparent;
    border: 1px solid #FFCA28;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #FFCA28;
    }
`

export const SectionHome = styled.section`
    width: 100%;
    height: 700px;

    display: flex;
    align-items: center;
    justify-content: center;

    .container_button {
        display: none;
    }

    .container_description {
        width: 100%;
        max-width: 750px;
        text-align: center;
        h2 {
            font-size: 55px;
            font-weight: 600;
            color: white;
            margin-top: 49px;
        }
    }

    @media (max-width: 700px) {
        .container_description {
            img {
                width: 70px;
            }
            h2 {
                font-size: 40px;
            }
        }
        .container_button {
            display: block;
            margin-top: 50px;
        }
    }
`