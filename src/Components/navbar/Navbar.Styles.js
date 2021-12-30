import styled from "styled-components";

const MainContent = styled.div`
    color: white;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    height: 13vh;
    padding: 0px var(--seven-px) ;
`
const Title = styled.h1`
    font-size: 2.0rem;
`
const Menu = styled.div`
    padding: 0px var(--ten-px);
    display: flex;
    flex-direction: row;
    padding-right: calc(var(--ten-px)*15);
`
const InPageLink = styled.p`
    --hover-color: red;
    font-size: 1rem;
    color: white;
    padding: 0px calc(var(--ten-px)*1.6);
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
        color: var(hover-color);
    }
`
const SocialIcon = styled.img``

const SocialIcons = styled.div``
// const ReplaceThis = styled.h1``

export {
    MainContent, Title, Menu, InPageLink
}