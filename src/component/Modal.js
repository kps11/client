import React from 'react';
import Input from "./Input";
import Button from "./Button";
import "../style/body.css";


function Modal(props) {
    const { onClickClose ,  modalCustomeStyle , loadPage } = props

    return (
        <div className="modal" style={modalCustomeStyle}>
            <button className='modalCloseButton' onClick={()=> onClickClose()}>x </button>  
            <div className='modalBody'>
                { loadPage()}
            </div>
        </div>
    );
}

export default Modal;