import React,{useState} from "react";
import "./Component.css";
import { connect } from "react-redux";
import ErrorInput from "./ErrorInput";

var NewTask = props => {
  var [title,setTitle] =useState(null);
  var [id,setId] = useState(null);

  return (
    <div className="NewTask">
      <div className="header">
        <div className="left">
          <i class="fa fa-file" />
          New Note
        </div>
        <i
          class="fa fa-close"
          onClick={() => {
            props.dispatch({ type: "SET_SHOW_NEWTASK" });
          }}
        />
      </div>
      {id===null && <ErrorInput>Title is required</ErrorInput>}
      {title===null && <ErrorInput>Content is required</ErrorInput>}
      <div className="tilte">
        <label>Title</label>
        <input onChange={(e)=>setId(e.target.value)}/>
      </div>
      <div className="content">
        <label>Content</label>
        <textarea onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div className="tags">
        <label>Tags</label>
        <input />
      </div>
      <div className="footer">
        <button
          className="save"
          onClick={() => {
            if(title===null ||id===null)
              return;
            props.dispatch({ type: "ADD_TASK", res: [{ id, title}] });
            props.dispatch({ type: "SET_SHOW_NEWTASK" });
          }}
        >
          <i class="fa fa-save" />
          Save
        </button>
        <button
          className="cancel"
          onClick={() => {
            props.dispatch({ type: "SET_SHOW_NEWTASK" });
          }}
        >
          <i class="fa fa-times" />
          Cancel
        </button>
      </div>
    </div>
  );
};

export default connect()(NewTask);
