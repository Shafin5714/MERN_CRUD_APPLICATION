import React,{useState} from 'react'
import { connect } from "react-redux";
import { addItem } from "../actions/item";
import PropTypes from "prop-types";
 const ItemInput = ({addItem}) => {
   const [formData, setFormData] = useState({
        name: ''
   })
    const { name} = formData
    const onChange = (e)=>{
        setFormData({name:e.target.value})
    }
    const onSubmit = (e)=>{
        // console.log(e.key);
        if(e.key==='Enter'){
            e.preventDefault()
            // console.log(formData);
            addItem(formData)
            setFormData({name:''})
        }   
    }
    return (
    <div>
       <input type="text" name="name" value={name}  onChange={e=>onChange(e)}  placeholder="Add item" className="form-control input my-3" onKeyPress={e=>onSubmit(e)}></input>
       <div className="d-flex justify-content-center">
        </div>
    </div>
        
    )
}

ItemInput.propTypes ={
    addItem:PropTypes.func.isRequired,
}
export default connect(null,{addItem})(ItemInput)