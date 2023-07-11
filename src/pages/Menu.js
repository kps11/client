import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { deleteItem} from "../action/menuAction";
import { Modal , Button } from "../component/index";
import { AddItemMenu } from "../pages/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash ,faPen , faGear } from '@fortawesome/free-solid-svg-icons';

import "../style/Menu.css"


function Menu (props) {
    const buttonStyle={
        backgroundColor:"#fff",
        color:"#000",
        borderRadius:"2rem",
        border : "1px solid green"
    }

    const modalCustomeStyle ={
        width:"35%"
    }

    const dispatch = useDispatch()
    const { itemList , onsubmitMenuItem ,updateItemList , menuLoader} = props
    const [openModal, setOpenModal] = useState(false)
    const [ editItem ,  setEditItem ] = useState({})
    const [ editItemId , setEditItemId] = useState('');

    const onCLickAddItem = () =>{
        setOpenModal(true)
    }

    const onClickCloseModal = () =>{
        setEditItem({})
        setOpenModal(false)
        setEditItemId("")
        

    }
    

    const onCLickItem = (item) =>{
        setOpenModal(true)
        setEditItem(item)
        setEditItemId(item._id)
    }

    const onSubmit = (itemData) =>{
        onsubmitMenuItem(itemData , editItemId)
        setEditItem({})
        setEditItemId()
        setOpenModal(false)
    }

    const loadPage =() =>{
        return(
            <AddItemMenu 
                data ={editItem} 
                onClickClose={onClickCloseModal}
                onSubmit ={onSubmit}
             />
        )
    }

    const onClickDelete = (id) =>{
        dispatch(deleteItem(id))
    } 

    return (
        <div className="menuContainer">
            <div className="header">
                <Button name="Add Item"
                        style={buttonStyle}
                        onClick={onCLickAddItem}
                />
            </div>
            {
                 openModal && (
                    <div className="addItemModal">
                    <Modal 
                        classname="addItemContainer" 
                        loadPage={loadPage}
                        modalCustomeStyle={modalCustomeStyle}
                        onClickClose={onClickCloseModal}
                    />
                </div>
                 )
                 
            }
            { menuLoader ?  <FontAwesomeIcon icon={faGear} spin style={{height:"20%", width:"20%"}}/>  :

            <div className="itemList">
                
                {itemList.map((item,id) =>{
                    return(
                        <div className="itemContainer" key={item._id} >
                            <div className="wide" > {item.name}</div> 
                            <div className="wide"> {item.description}</div> 
                            <div className="wide"> {item.receipe}</div> 
                            <div className="wide"> {item.price}</div> 
                            <div className="wide">
                                <FontAwesomeIcon onClick={() => onCLickItem(item)} icon={faPen} style={{height:"20px", width:"20px"}} />
                            </div>
                            <div className="wide">
                                <FontAwesomeIcon onClick={() => onClickDelete(item._id)} icon={faTrash} style={{height:"20px", width:"20px"}} />
                            </div>

                        </div>
                    )
                })}
            </div>}
    
        </div>
    )
}


export default Menu;