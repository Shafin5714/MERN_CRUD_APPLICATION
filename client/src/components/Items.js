import React, { Fragment, useState } from "react";
import { deleteItem ,updateItem} from "../actions/item";
import { connect } from "react-redux";
import { Modal, Button ,FormGroup,Form} from "react-bootstrap";
import '../App.css'
const Items = ({ name, id, deleteItem,updateItem }) => {
  const [show, setShow] = useState(false);
  const [data,setData] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const update = (data,id)=>{
    updateItem(data,id)
    setShow(false)
  }
  const change = (e)=>{
   
    setData(e.target.value)
    setShow(true)
  }
  const click = (name)=>{
    
    setData(name)
    setShow(true)
  }
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose} keyboard={false} >
        <Modal.Header closeButton className="md">
          <Modal.Title>Update Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormGroup>
              <Form.Control
                type="text"
                value={data}
                onChange={(e)=>change(e)}
              />
            </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" name="name" onClick={(e)=>{update(data,id)}}>Update</Button>
        </Modal.Footer>
      </Modal>

      <tr key={id}>
        <th>{name}</th>
        <td>
          <button
            className="btn btn-primary btn-sm"
            onClick={(e)=>click(name)}
          >
            Update
          </button>{" "}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteItem(id)}
          >
            <i className="far fa-window-close"></i>
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
};
export default connect(null, { deleteItem,updateItem})(Items);
