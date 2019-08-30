import React from "react";
import "./Component.css";
import { connect } from "react-redux";
import EditTask from "./EditTask";

var Task = props => {
  return (
    <div
      className="Task"
      style={
        props.keys % 3 == 0
          ? { background: "whitesmoke" }
          : props.keys % 3 == 1
          ? { background: "white" }
          : { background: "paleturquoise" }
      }
    >
      <div className="c1">
        <i
          class="fa fa-pencil"
          aria-hidden="true"
          onClick={() => {
            props.dispatch({ type: "SET_SHOW_EDITTASK" });
            props.dispatch({ type: "SET_ID_EDITTASK", keys: props.keys });
          }}
        />
        <i
          class="fa fa-trash"
          aria-hidden="true"
          onClick={() =>
            props.dispatch({ type: "SET_REMOVE", keys: props.keys })
          }
        />
      </div>
      <div className="c2">{props.title}</div>
      <div className="c3">{props.content}</div>
      <div className="c4">{props.date}</div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    showEditTask: state.showEditTask
  };
};
export default connect(mapStateToProps)(Task);
