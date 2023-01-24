import React from 'react';
import  Button  from './Button';
import "../style/header.css"
import { useSelector } from 'react-redux';


function Header(props) {
    const { onClickSignIn ,onClickSignUp } = props
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    return (
        <div className='container'>
            <div className='left-view'>
                 <img src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt ="logo" className='applogo' /> 
            </div>
            <div className='right-view'>
               { !isAuthenticated ? <> <Button name= "SignIn" onClick = {onClickSignIn}/>
                <Button name= "SignUp" onClick = {onClickSignUp}/></> : 
                null}

            </div>
        </div>
    );
}

export default Header;