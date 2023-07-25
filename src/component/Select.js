import React from 'react';
import "../style/input.css"


function Select(props) {
    const { style ,value ,label ,labelStyle ,placeholder ,onChange , options ,multiple} = props
    return (
        <div className='inputContainer'>
        <label  className='labelContainer' style={labelStyle } >{label} :</label> 
        <select 
                className = 'inputComponent selectContainer' 
                style={style} 
                value={value} 
                multiple={multiple}
                onChange={onChange}>
                <option value="" selected disabled hidden>Select your {label} </option>
                {options.map((element) => {
                    return (
                        <option 
                            key={element.value} 
                            className="inputComponent selectContainer" 
                            value = {element.value}>
                                {element.id} 
                        </option>)
                })}
        </select>

    </div>
    );
}

export default Select;