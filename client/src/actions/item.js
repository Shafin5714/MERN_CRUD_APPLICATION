import axios from "axios";
import { ADD_ITEM,DELETE_ITEM,UPDATE_ITEM,GET_ITEMS } from "./types";

// ADD Item
export const addItem = formData => async dispatch=>{
    const config ={
        'Content-Type':'application/json'
    }
   
    try{
        const res =await axios.post('api/addItem',formData,config)
        dispatch({
            type:ADD_ITEM,
            payload:res.data
        })

    }catch(err){
        console.log(err);
        
    }
}

export const getItems = () => async dispatch =>{
    try {
       const res = await axios.get('api/items')
       dispatch({
           type:GET_ITEMS,
           payload:res.data
       })

       
        
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteItem = (id) => async dispatch =>{
    try{
        const res = await axios.delete(`api/item/${id}`)
        dispatch({
            type:DELETE_ITEM,
            payload:id
        })
    }catch(err){
        console.log(err);
    }
}

export const updateItem = (data,id) =>async dispatch =>{
    console.log(data,id);
    let obj={
        name:data
    }
    
    try{
        const config ={
          
            'Content-Type':'application/json'
           
        }
        const res = await axios.post(`api/item/${id}`,obj,config)
        console.log(res.data);
        
        dispatch({
            type:UPDATE_ITEM,
            payload:res.data
        })

    }catch(err){
        console.log(err);
    }
}