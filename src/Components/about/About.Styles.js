import styled from "styled-components";

const MainDiv = styled.main`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: calc(var(--ten-px) * 10) 0px;
    .container {
        display: grid;
        grid-template-columns: repeat(2, minmax(300px, 500px));
        grid-gap: calc(var(--ten-px) * 6);
        section {
            position: relative;
            display: grid;
            grid-template-columns: 100%;
            * {
                align-content: flex-end;
            }
            h1 {
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bolder;
                font-size: 2.4rem;
            }
            p {
                font-size: 1.5rem;
                a {
                    opacity: 0.7;
                }
            }
            &:nth-child(2n) {
                &::before {
                    content: "";
                    position: absolute;
                    top: 0px;
                    left: -20px;
                    width: var(--three-px);
                    height: 300px;
                    background-color: var(--gray);
                }
            }
        }
    }
`;

export { MainDiv };
