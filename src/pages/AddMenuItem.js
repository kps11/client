import React, { useState } from "react";
import { Input , Button} from "../component";
import { addMenuItem } from "../action/menuAction";
import { useDispatch } from "react-redux";

import "../style/Menu.css"


function AddItemMenu(props){
    const { data ,onSubmit } = props

    const [ itemName, setItemName ] = useState(data.name || '');
    const [ description , setDescription ] = useState(data.description || '')
    const [ category , setCategory ] = useState(data.category || '')
    const [ genere , setGenere ] = useState(data.generes && (data.generes).toString() || '')
    const [ receipe ,setReceipe ] = useState(data.receipe || '')
    const [ price ,setPrice ] = useState(data.price || 0)

    const onChange =(type , e) =>{
        let value = e.target.value
        if( type == "name"){
            setItemName(value)
        }else if( type == "desc"){
            setDescription (value )
        }else if( type == "category"){
            setCategory (value )
        }else if( type == 'genere'){
            setGenere(value)
        }else if( type == 'receipe'){
            setReceipe(value)
        }else if( type == 'price'){
            setPrice(value)
        } 

    }

    const onClickSubmit = (e) =>{
        e.preventDefault();
        const newItem ={ 
            name:itemName,
            description:description,
            category:category,
            generes:genere,
            receipe: receipe,
            price: Number(price),
            // imageURL:'https://via.placeholder.com/32x32?text='+

        }

        onSubmit(newItem)
        
    }
    return(
        <div className="addItemContainer">
             <Input 
                onChange = {(e) => onChange('name',e)}
                type="text" 
                placeholder = "Enter Item Name" 
                label="Item Name" 
                labelStyle= {{fontSize : "18px" ,margin:"0.5em"}}
                value ={itemName}
                />
             <Input 
                onChange = {(e) => onChange('desc',e)}
                type="text" 
                placeholder = "Item Description" 
                label="Description" 
                labelStyle= {{fontSize : "18px" ,margin:"0.5em"}}
                value={description}
                />

            <Input
                onChange =  {(e) => onChange('category' ,e)}
                type="text" 
                placeholder = "Item Category" 
                label="Category" 
                labelStyle= {{fontSize : "18px", margin:"0.5em" }}
                value={category}/>

             <Input
                onChange =  {(e) => onChange('genere' ,e)}
                type="text" 
                placeholder = "genere" 
                label= "Genere" 
                labelStyle= {{fontSize : "18px", margin:"0.5em" }}
                value={genere}
                />

            <Input
                onChange =  {(e) => onChange('receipe' ,e)}
                type="text" 
                placeholder = "Receipe" 
                label= "Receipe" 
                labelStyle= {{fontSize : "18px", margin:"0.5em" }}
                value={receipe}
                />
            <Input
                onChange =  {(e) => onChange('price' ,e)}
                type="number" 
                placeholder = "Price" 
                label= "Price" 
                labelStyle= {{fontSize : "18px", margin:"0.5em" }}
                value={price}
                />

            {/* <Select
                options = {roles}
                onChange =  {(e) => onChange('role' ,e)}
                label="Role"
                labelStyle= {{fontSize : "18px", margin:"0.5em" }}/>  

            <Select
                options = {genders}
                onChange =  {(e) => onChange('gender' ,e)}
                label="Gender" 
                labelStyle= {{fontSize : "18px", margin:"0.5em" }}/>  */}

            <Button 
                name= "Add Item" 
                onClick = {(e) => onClickSubmit(e)} 
                style={{width : "50%" , borderRadius : "2em", alignSelf:"center",marginTop:"1em"}}/>
        </div>
    )


}


export default AddItemMenu;