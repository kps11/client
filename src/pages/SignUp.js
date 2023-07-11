import React ,{useEffect, useState }from 'react';
import { useHistory} from 'react-router-dom';
import { Input ,Button ,Select } from '../component';
import { genders , roles } from "../config.js";
import { useDispatch , useSelector} from 'react-redux';
import { signup } from '../action';
import FormValidator from "../customeHook/formValidator"

import "../style/body.css"

function SignUp(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [name , setName] =useState("")
    const [email, setEmail] = useState("")
    const [ password , setPassword ]  = useState("");
    const [ confirmPassword , setConfirmPassword] = useState ("")
    const [role , setRole ] = useState("")
    const [ gender , setGender ] = useState("")
    const [clicked , setClicked] = useState(false)
    const { errors , isValid } = FormValidator({ email, password , confirmPassword ,clicked})
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const { emailError , passwordError , confirmPasswordError} = errors
    const onChange = (type , event) =>{
        var value = event.target.value
        if( type == 'name'){
            setName(value)
        }
        else if( type == 'email'){
            setEmail(value)
        }else if( type == 'password'){
            setPassword(value)
        }else if( type == 'confirmpassword'){
            setConfirmPassword(value)
        }else if( type == 'role'){
            setRole(value)
        }else if( type == 'gender'){
            setGender(value)
        }
    } 

    useEffect(() =>{
            if(isAuthenticated){
                history.push('/dashboard')
            }
    })

    const onClick = (e) =>{
        e.preventDefault()
        setClicked(true)
        const emp  ={
            name,
            email,
            password,
            role,
            gender
        }

        dispatch(signup(emp))

    }
    return (
        <div className='loginContainer signUpContainer'>
             <Input 
                onChange = {(e) => onChange('name',e)}
                type="text" 
                placeholder = "Enter your Name" 
                label="Name" 
                labelStyle= {{fontSize : "18px" ,margin:"0.5em"}}
                />
             <Input 
                onChange = {(e) => onChange('email',e)}
                type="text" 
                placeholder = "Enter your Email" 
                label="Email" 
                labelStyle= {{fontSize : "18px" ,margin:"0.5em"}}
                errMsg = { emailError.message.length > 0 ? emailError.message: ""}/>    

            <Input
                onChange =  {(e) => onChange('password' ,e)}
                type="password" 
                placeholder = "Enter your Password" 
                label="Password" 
                labelStyle= {{fontSize : "18px", margin:"0.5em" }}
                errMsg = { passwordError.message.length > 0 ? passwordError.message: ""}/>

             <Input
                onChange =  {(e) => onChange('confirmpassword' ,e)}
                type="text" 
                placeholder = "Re enter your Password" 
                label= "Confirm Password" 
                labelStyle= {{fontSize : "18px", margin:"0.5em" }}
                errMsg = { confirmPasswordError.message.length > 0 ? confirmPasswordError.message: ""}/>  

            <Select
                options = {roles}
                onChange =  {(e) => onChange('role' ,e)}
                label="Role"
                labelStyle= {{fontSize : "18px", margin:"0.5em" }}/>  

            <Select
                options = {genders}
                onChange =  {(e) => onChange('gender' ,e)}
                label="Gender" 
                labelStyle= {{fontSize : "18px", margin:"0.5em" }}/> 

            <Button 
                name= "SignUp" 
                onClick = {(e) => onClick(e)} 
                style={{width : "100%" , borderRadius : "2em"}}/>
        </div>
    );
}

export default SignUp;