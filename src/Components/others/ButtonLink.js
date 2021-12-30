import React from 'react'
import { Button } from './ButtonLink.Style'

const ButtonLink = (props)=> {
    return <Button 
        bgColor={props.bgColor}
        bgHoverColor={props.bgHoverColor}
        borderColor={props.borderColor}
        textColor={props.textColor}
        textHoverColor={props.textHoverColor}
        href="{props.buttonHref}"
    >
        {props.buttonText}
    </Button>
}

export default ButtonLink