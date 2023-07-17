import React, { useState } from "react";
import {  useDispatch } from 'react-redux';
import { Button ,Modal} from "../component";
import  AddMaterial from "./AddMaterial";
import {  addMaterialToList , deleteMaterialItem } from "../action/materialAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


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

    const onClickDelete = ( id ) =>{
        dispatch(deleteMaterialItem(id))
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
                                <span className="materialItemName"> { materialItem.name } </span>
                                <FontAwesomeIcon icon={faXmark} onClick={() => onClickDelete(materialItem._id)}/>
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