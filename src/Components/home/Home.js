import React from 'react'
import {
    MainDiv
} from './Home.Styles'
import ButtonLink from '../others/ButtonLink'

const Home = (props)=> {
    return <MainDiv>
        <p>{props.miniText}</p>
        <h1>{props.mainText}</h1>
        <div>
        <ButtonLink buttonHref="" buttonText="GET STARTED"
            textColor="white" textHoverColor="#f92e00"
        />
        <ButtonLink buttonHref="" buttonText="LEARN MORE"
            bgHoverColor="#f92e00" borderColor="#f92e00" textColor="#f92e00" textHoverColor="white"
        />
        </div>
    </MainDiv>
}

export default Home