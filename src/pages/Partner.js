import React , { useEffect, useState }from "react";
import { Button , Modal} from "../component";
import { AddPartner } from "./index";
import { useSelector , useDispatch} from "react-redux";
import { fetchMaterialList } from "../action/materialAction";
import { addPartner } from "../action/partnerAction";
import "../style/Partner.css"


function Partner (props) {
    const { partnerList , materialList } = props
    // const materialList = useSelector(state =>  state.material.materials)
    const dispatch = useDispatch()
    const [ modal , setModal ] = useState(false)

    // useEffect(() =>{
    //     dispatch(fetchMaterialList())
    // },[])

    const modalCustomeStyle = {
        position: "absolute",
        zIndex: 1,
        width:"50%",
        left:"30%",
    }

    const onClickAddPartner = () =>{
        setModal(true);
    }

  useEffect(()=>{
    console.log("partnerList",partnerList)

  },[])

    const onClickClose = () =>{
        setModal(false);
    }

    const loadPage = () =>{
        return (
            <AddPartner
                materialList = { materialList }
                addPartner = { addPartnerToList }
            />
        )
    }

    //adding partner
    const addPartnerToList = (data) =>{
        dispatch(addPartner(data))
        setModal(false)
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
                            <div>
                                {partner.name}
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Partner;