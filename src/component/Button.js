import React from 'react';
import '../style/button.css'

function Button(props) {
    const { name ,onClick ,style} = props
    return (
            <button className='buttonContainer' style={style} onClick={onClick}>{name}</button>
    );
}

export default Button;