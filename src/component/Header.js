import React from 'react';
import  Button  from './Button';
import Logo from "../logo.svg"; 
import "../style/header.css"


function Header(props) {
    const { onClickSignIn ,onClickSignUp } = props
    return (
        <div className='container'>
            <div className='left-view'>
                 <img src = {Logo}
                alt ="logo" className='applogo' /> 
            </div>
            <div className='right-view'>
                <Button name= "SignIn" onClick = {onClickSignIn}/>
                <Button name= "SignUp" onClick = {onClickSignUp}/>

            </div>
        </div>
    );
}

export default Header;