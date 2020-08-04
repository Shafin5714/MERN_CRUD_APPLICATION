import React,{useState,Fragment} from "react";

const Modal = ({name,id}) => {
  
console.log(name.name);


  return (
    <Fragment id={id}>
      <div className="modal fade"id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel"aria-hidden="true" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Item</h5>
              <button type="button"className="close"data-dismiss="modal"aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
                <div className="modal-body">
                    <input type="text" className="form-control" name={name} value={name.name}></input>
                </div>
                <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Modal;
