import React from 'react';
import Input from "./Input";
import Button from "./Button";
import "../style/body.css";


function Modal(props) {
    const { onClickClose , onChange , classname , modalCustomeStyle , loadPage} = props

    // const style={
    //     height :"3em",
    //     width:"10em",
    //     marginLeft:"2em",
    //     borderColor: "1px solid #000",
    //     fontSize: "16px"
    // }
    // const labelStyle ={
    //     fontSize:"16px",
    //     fontWeight:"bold",
    //     width:"5em"
    // }
    return (
        <div className="modal" style={modalCustomeStyle}>
            <button className='modalCloseButton' onClick={()=> onClickClose()}>x </button>  
            <div className='modalBody'>
                {/* <Input label="Name" style={style} value={name} labelStyle={labelStyle}/>
                <Input label="Role" style={style} value={role} labelStyle={labelStyle} onChange ={(e) => onChange(e,"role")}/> */}
                {/* <Input label="name" style={style} labelStyle={labelStyle}/> */}
                { loadPage()}
            </div>
        </div>
    );
}

export default Modal;