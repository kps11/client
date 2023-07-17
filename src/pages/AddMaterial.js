import React, { useState } from "react";
import { Button, Input } from "../component";


function AddMaterial (props) {
    const { onClickSubmit , } = props
    const [ materialName , setMaterialName ] = useState( '')

    

    const onChange = (e) =>{    
        setMaterialName(e.target.value)

    }

    const onClick = (e) =>{

        e.preventDefault();
        const data = {
            name : materialName
        }
        setMaterialName("")
        onClickSubmit(data)
    }
    return (
        <div className="addItemCaontainer">
            <Input 
                 onChange = {(e) => onChange(e)}
                 type="text" 
                 placeholder = "Enter Material Name" 
                 label="Material Name" 
                 labelStyle= {{fontSize : "18px" ,margin:"0.5em"}}
                 value ={materialName}
            />     
            <Button name="Submit"  onClick ={(e) =>onClick(e)} />
        </div>
    )             
}


export default AddMaterial;