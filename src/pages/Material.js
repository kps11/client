import React, { useState } from "react";
import {  useDispatch } from 'react-redux';
import { Button ,Modal} from "../component";
import  AddMaterial from "./AddMaterial";
import { fetchMaterialList , addMaterialToList } from "../action/materialAction";


import "../style/Material.css"

function Material (props){
    const { materialList } = props
    const dispatch = useDispatch()
    const [ openModal , setOpenModal ] = useState(false)

    const modalCustomeStyle = {
        width: "50%",
        height:"30%"
    }

    const onClickAddMaterial = () =>{
        setOpenModal(true)
    }

    const onClickClose = () =>{
        setOpenModal(false)
    }

    const loadPage = () =>{
        return(
            <AddMaterial
                onClickSubmit ={onSubmit}

            />
        )
    }

    const onSubmit = (data) =>{
        dispatch(addMaterialToList(data))
        setOpenModal(false)
    }
    return(
        <div className="materialContainer">
            <div className="header">
                <Button name="Add Material" onClick={onClickAddMaterial}/>
            </div>
            <div className="body">
                {
                    materialList && materialList.map(materialItem =>{
                        return(
                            <div className="materialListBox" key={materialItem._id}>
                                { materialItem.name }
                            </div>
                        )
                    })
                }

                {
                    openModal && 
                    <Modal
                        modalCustomeStyle = {modalCustomeStyle}
                        onClickClose ={onClickClose}
                        loadPage={loadPage}

                    />
                }
            </div>

            
        </div>
    )
}


export default Material;