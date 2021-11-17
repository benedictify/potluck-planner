import React from 'react'
import {
    Link
} from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.div 
`   display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5% 1%;
    background-color: green;
    margin: 0;
`



const StyledNavbar = styled.div 
`   display: flex;
justify-content: center;
width: 100%;
`


const Footer = () => {
    return (
        <StyledFooter>   
            <StyledNavbar id="footerNav">
                <Link to="/" >HOME</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/signup">SIGN UP</Link>
                <Link to="/events">EVENTS</Link>
            </StyledNavbar>
        </StyledFooter>
       
    )
}

export default Footer