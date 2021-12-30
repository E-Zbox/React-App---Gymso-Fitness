import styled from 'styled-components'

const MainDiv = styled.div`
    --gradient: #040404a2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: 
        linear-gradient(to bottom right, var(--gradient), var(--gradient)),
        url("images/hero-bg.jpg")
    ;
    background-position: center;
    background-size: 105% 125%;
    width: 100%;
    height: 115vh;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    p {
        color: var(--gray);
        font-size: 1.4rem;
        font-weight: 400;
    }
    h1 {
        max-width: 600px;
        color: white;
        font-weight: 900;
        font-size: 3rem;
        text-align: center;
        text-transform: uppercase;
    }
    div {
        padding:  calc(var(--ten-px)*4);
    }
`

export {
    MainDiv
}