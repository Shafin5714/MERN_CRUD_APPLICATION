import React ,{useEffect,Fragment} from 'react'
import { getItems ,deleteItem} from "../actions/item";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Modal from "./Modal";
import Items from "./Items";


 const ItemList = ({getItems,deleteItem,item:{items,loading}}) => {
   useEffect(()=>{
     getItems()
   },[getItems])
    // console.log(items);
    
    return (
   
          <div className="container my-3">
              <table className="table text-center">
            <thead className="thead-red">
              <tr>
                <th >Item Name</th>
                <th >Delete/Update</th>
              </tr>
            </thead>
            <tbody>
            {items.map(it=>
              <Items  name={it.name} id={it._id} key={it._id}/>
            )}
            </tbody>
            
        
 
          </table>
          </div>
       
    )
}

ItemList.propTypes = {
  getItems:PropTypes.func.isRequired,
  item:PropTypes.object.isRequired,
}
const mapStateToProps = state =>({
  item:state.item
})

export default connect(mapStateToProps,{getItems,deleteItem})(ItemList)