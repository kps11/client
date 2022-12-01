import React from 'react';
import "../style/input.css"
function Input(props) {
    const { type , style ,value ,label ,labelStyle ,placeholder ,onChange ,errMsg} = props
    return (
        <>
        <div className='inputContainer'>
            <label  className='labelContainer' style={labelStyle } >{label} :</label> 
            <input 
                id = {type} 
                placeholder= { placeholder } 
                className='inputComponent' 
                type={type} 
                style={style} 
                value={value} 
                onChange={onChange}/> 
                  
        </div>
         <span className='errorMessage'>{errMsg} </span> 
         </>
    );
}

export default Input;