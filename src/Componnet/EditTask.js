import React, { useState } from "react";
import "./Component.css";
import { connect } from "react-redux";
import ErrorInput from "./ErrorInput";

var EditTask = props => {
  var [title, setTitle] = useState(props.data[props.edit].title);
  var [id, setId] = useState(props.data[props.edit].id);

  return (
    <div className="EditTask">
      <div className="header">
        <div className="left">
          <i class="fa fa-file" />
          Edit Note
        </div>
        <i
          class="fa fa-close"
          onClick={() => {
            props.dispatch({ type: "SET_SHOW_EDITTASK" });
          }}
        />
      </div>
      <div className="tilte">
        <label>Title</label>
        <input onChange={e => setId(e.target.value)} value={id}/>
      </div>
      <div className="content">
        <label>Content</label>
        <textarea onChange={e => setTitle(e.target.value)} value={title}/>
      </div>
      <div className="footer">
        <button
          className="save"
          onClick={() => {
            props.dispatch({
              type: "EDIT_TASK",
              keys: props.edit,
              newTitle: id,
              newContent: title
            });
            props.dispatch({ type: "SET_SHOW_EDITTASK" });
          }}
        >
          <i class="fa fa-save" />
          Save
        </button>
        <button
          className="cancel"
          onClick={() => {
            props.dispatch({ type: "SET_SHOW_EDITTASK" });
          }}
        >
          <i class="fa fa-times" />
          Cancel
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
    return {
      edit: state.edit,
      data:state.data.data,
    };
  };
export default connect(mapStateToProps)(EditTask);
