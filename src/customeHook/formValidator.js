import React ,{useState , useEffect}from 'react';
import { emailValidator,passwordValidator,confirmPasswordValidator } from  "../utils/validator";

function FormValidator(props) {
    const { email, password, confirmPassword , clicked} = props;
    const [ errors , setErrors] = useState({
        emailError:{
            message:''
        },
        passwordError:{
            message:''
        },
        confirmPasswordError:{
            message:''
        }
    })
    const [isValid , setIsvalid] = useState(true)

    const validateForm = () =>{
        if(clicked){
            const { email, password, confirmPassword } = props;

            let emailMessage = emailValidator(email);
            const passwordMessage = passwordValidator(password);
            const confirmPasswordMessage = confirmPasswordValidator(confirmPassword,props);
            
        
                setErrors({ ...errors, emailError:{
                    message: emailMessage
                },passwordError:{
                    message: passwordMessage
                },confirmPasswordError:{
                    message: confirmPasswordMessage
                }})


            if( emailMessage.length > 0 || passwordMessage.length > 0 || confirmPassword.length >0 ){
                setIsvalid(false)
            }
        } 
    }       
    useEffect( () => {
        // validateForm()
    },[ email , password , confirmPassword])
  

  return {
    errors,
    isValid 
  }
}

export default FormValidator;