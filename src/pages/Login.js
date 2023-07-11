import React, { useEffect, useState } from 'react';
import { Button, Input } from "../component/index";
import { login } from "../action"
import { useDispatch , useSelector} from 'react-redux';
import { Redirect , useHistory} from 'react-router-dom'

import "../style/body.css"

function Login() {
    const dispatch = useDispatch()
    const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const history = useHistory()
    const [ error , setError] = useState(false)
    const [ userName , setUserName ] = useState("");
    const [ password , setPassword ] = useState("");
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)


    const onChange = (name,event) =>{
        var value = event.target.value
        if( name === "userName"){
            setUserName(value)
            validation(value)
        }else{
            setPassword(value)
        }
    }
  

    useEffect(() =>{
        if(isAuthenticated){
            history.push("/dashboard")
             
        }
    })

    const validation = (value) =>{
        
        if(! mailformat.test(value)){
            setError("Please enter a valid email id")
        }else{
            setError("")
        }

    }
    

    const onClick = (e) =>{

        e.preventDefault();
        dispatch(login(userName ,password))
        
    }

    
    return (
        <div className='loginContainer'>
            <Input 
                onChange = {(e) => onChange('userName',e)}
                type="text" 
                placeholder = "Enter your User Name or Email" 
                label="Username" 
                labelStyle= {{fontSize : "18px" ,margin:"0.5em"}}
                errMsg = {error}
                />

            <Input
                onChange =  {(e) => onChange('password' ,e)}
                type="password" 
                placeholder = "Enter your Password" 
                label="Password" 
                labelStyle= {{fontSize : "18px", margin:"0.5em" }}/>

            <Button 
                name= "Login" 
                onClick = {(e) => onClick(e)} 
                style={{width : "100%" , borderRadius : "2em"}}/>
        </div>
    );
}
export default Login;