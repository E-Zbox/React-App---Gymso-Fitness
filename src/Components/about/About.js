import React from 'react'
// components
import {MainDiv} from "./About.Styles"
import ButtonLink from '../others/ButtonLink'

const About = (props)=> {
    return <MainDiv>
        <div className="container">
        <section>
            <h1>New to the gymso?</h1>
            <p>Your membership is up to 2 months FREE ($62.50 per month)</p>
            <p className="gray">
                Gymso is free HTML template by <a>Tooplate </a> 
                for your commercial website. Styled-components v4.2.1 Layout. Feel free to use it.
            </p> 
            <ButtonLink
                bgColor="#f92e00" bgHoverColor="white"
                textColor="white" textHoverColor="#f92e00"
                buttonText="BECOME A MEMBER TODAY"
            />
        </section>
        <section>
            <h1>Working hours</h1>
            <em>Sunday: Closed</em>
            <em>Monday  - Friday</em>
            <p className="gray">7.00 AM - 10:00 PM</p>
            <em>Saturday</em>
            <p className="gray">6.00 AM - 4:00 PM</p>
        </section>
    </div>
    </MainDiv>
}

export default About