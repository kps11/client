import React , { useState }from "react";
import { Button , Modal} from "../component";
import { AddPartner } from "./index";
import { useDispatch} from "react-redux";
import { addPartner , updatePartner , fetchPartner } from "../action/partnerAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash ,faPen } from '@fortawesome/free-solid-svg-icons';
import "../style/Partner.css"


function Partner (props) {
    const { partnerList , materialList , onClickDeletePartner} = props
    const dispatch = useDispatch()
    const [ modal , setModal ] = useState(false)
    const [ partnerDetails , setPartnerDetails ] = useState({})
    const [ selectPartnerId , setSelectpartnerId ] = useState('')

    const modalCustomeStyle = {
        position: "absolute",
        opacity:1,
        backgroundColor:"lightgrey",
        zIndex: 1,
        width:"50%",
        left:"30%",
    }

    const onClickAddPartner = () =>{
        setModal(true);
        setPartnerDetails({})
        setSelectpartnerId("")
    }

    const onClickDelete = (id) =>{
        onClickDeletePartner(id)
    }

    const onClickEdit = (data) =>{
        const { name , address , phone_no , items , quantity , price_per_unit , _id} = data
        const itemListDetails = []
        materialList.filter(material =>{
            if(items.indexOf(material._id) >=0 ){
                itemListDetails.push ({
                    "value" : material._id,
                    "label" : material.name
                })
            }

        })
        const partnerDetails = {
            name,
            address,
            phone_no,
            items : itemListDetails,
            quantity,
            price_per_unit
        }
        setPartnerDetails(partnerDetails)
        setSelectpartnerId(_id)
        setModal(true)

    }


    const onClickClose = () =>{
        setModal(false);
    }

    const loadPage = () =>{
        return (
            <AddPartner
                materialList = { materialList }
                addPartner = { addPartnerToList }
                partnerDetails = { partnerDetails}
            />
        )
    }
    //adding partner
    const addPartnerToList = (data) =>{
        setModal(false)
        if (Object.keys(partnerDetails).length > 0){
            dispatch(updatePartner(data , selectPartnerId ))
        }else{
            dispatch(addPartner(data))
        }
        dispatch(fetchPartner())
    }
    return (
        <div className="partnerConatner">
            <div className="header">
                <Button name ="AddPartner" onClick={onClickAddPartner}/>
            </div>
            <div className="body">
                { modal &&   <Modal
                        modalCustomeStyle = {modalCustomeStyle}
                        onClickClose= {onClickClose}
                        loadPage = { loadPage }
                    />    
                }
                {
                    partnerList && partnerList.length > 0 && 
                    partnerList.map(partner => {
                        return (
                            <div key ={partner._id} className="partner">
                                <span>{partner.name}</span>
                                <span>{partner.address}</span>
                                <span>{partner.phone_no}</span>
                                <span>{partner.quantity}</span>
                                {/* <span>{partner.name}</span> */}
                                <FontAwesomeIcon onClick={() => onClickEdit (partner)} icon={faPen}  style={{height:"1rem", width:"1rem"}} />
                                <FontAwesomeIcon onClick={() => onClickDelete(partner._id)} icon={faTrash}  style={{height:"1rem", width:"1rem"}} />
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Partner;