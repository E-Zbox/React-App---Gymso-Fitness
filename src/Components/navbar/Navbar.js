import React from "react";
import { 
    MainContent, Title, Menu, InPageLink
 } from "./Navbar.Styles";

const Navbar = (props)=> {
    return <MainContent>
        <Title>{ props.title }</Title>
        <Menu>
            {
                props.inPageLinkList.map(item=> <InPageLink key={item.name}>{item.name}</InPageLink>)
            }
        </Menu>
        {/* <SocialIcons></SocialIcons> */}
    </MainContent>
}

export default Navbar