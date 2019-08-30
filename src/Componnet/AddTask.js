import React from "react";
import { connect } from "react-redux";
import "./Component.css";

var AddTask = props => {
  var x=""
  return (
    <div className="AddTask">
      <button
        className="add"
        onClick={() => {
          props.dispatch({ type: "SET_SHOW_NEWTASK" });
        }}
      >
        +
      </button>
      <input placeholder="Search for note by title..." onChange={(e)=>x=e.target.value}/>
      <button
        onClick={() => {
          props.dispatch({ type: "SET_SEARCH" ,sort:x});
        }}
      >
        <i class="fa fa-search" />
      </button>
    </div>
  );
};

export default connect()(AddTask);
