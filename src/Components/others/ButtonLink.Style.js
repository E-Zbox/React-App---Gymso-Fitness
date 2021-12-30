import styled from 'styled-components'

const Button = styled.a`
    color: ${(props)=> props.textColor};
    background-color: ${(props)=> props.bgColor};
    padding: calc(var(--ten-px)*2);
    border: 2px solid ${(props)=> props.borderColor ? props.borderColor : '#20202f00'};
    border-radius: 3px;
    text-decoration: none;
    opacity: 1;
    &:hover {
        color: ${(props)=> props.textHoverColor};
        background-color: ${(props)=> props.bgHoverColor};
    }
`

export {
    Button
}