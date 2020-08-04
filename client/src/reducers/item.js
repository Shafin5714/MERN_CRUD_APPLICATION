import { ADD_ITEM,DELETE_ITEM,UPDATE_ITEM,GET_ITEMS } from "../actions/types";

const initialState ={
    items:[],
    item:null,
    loading:true
}

export default function(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case ADD_ITEM:
            return{
                ...state,
                items:[payload,...state.items],
                loading:false
            }
        case GET_ITEMS:
            return{
                ...state,
                items:payload,
                loading:false
            }
        case DELETE_ITEM:
            return{
                ...state,
                items:state.items.filter(item=>item._id!==payload),
                loading:false
            }
        case UPDATE_ITEM:
            return{
                ...state,
                items:payload,
                loading:false
            }
        
         default: 
                return state
    }
}

